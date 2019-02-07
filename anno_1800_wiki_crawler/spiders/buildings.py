# -*- coding: utf-8 -*-
import scrapy

import re
import requests

from scrapy.linkextractor import LinkExtractor
from scrapy.selector import Selector


class BuildingsSpider(scrapy.Spider):
    name = 'buildings'
    allowed_domains = ['anno1800.wikia.com', 'vignette.wikia.nocookie.net']
    start_urls = ['http://anno1800.wikia.com/wiki/Buildings']

    # Define the regex we'll need to filter the returned links
    # Sample: https://vignette.wikia.nocookie.net/anno1800/images/a/a0/Workforce_-_farmers.png/revision/latest?cb=20190203165406
    url_matcher = re.compile('^https:\/\/vignette\.wikia\.nocookie\.net\/anno1800\/images\/')

    # Create a set that'll keep track of ids we've crawled
    crawled_images = []

    def parse(self, response):
        body = Selector(text=response.body)
        link_extractor = LinkExtractor(allow=BuildingsSpider.url_matcher)
        image_urls = [link.url for link in link_extractor.extract_links(response)]

        for image_url in image_urls:
            filename = image_url.split('/')[-3]
            file_path = './images/' + filename
            self.download(image_url, file_path)


    def download(self, url, filename):
        """
        Download the URL to filename.
        :param url: The URL to download.
        :param filename: The filename and path of the downloaded file
        :return:
        """
        # URL of the image to be downloaded is defined as image_url
        req = requests.get(url)  # create HTTP response object

        with open(filename, 'wb') as f:
            # write the contents of the response (req.content) to a new file in binary mode.
            f.write(req.content)

    def format_filename(self, filename):
        """
        Format the filename for web usage.
        :param filename: The old filename
        :return: The formatted new filename
        """
        # Formatting:
        #  - all lowercase
        #  - all hyphens, no lower dash
        #  - remove spaces (in URLs: %27)
        #  - remove ugly parts ("---", etc.)
        return filename\
            .lower()\
            .replace('_', '-')\
            .replace('-0', '').replace('%27', '').replace('---', '-').replace('--', '-')
