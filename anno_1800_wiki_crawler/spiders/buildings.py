# -*- coding: utf-8 -*-
import scrapy

import os
import re
import requests

from scrapy.linkextractors import LinkExtractor
from scrapy.selector import Selector


class BuildingsSpider(scrapy.Spider):
    name = 'buildings'
    allowed_domains = ['anno1800.wikia.com', 'anno1800.fandom.com', 'static.wikia.nocookie.net']
    start_urls = ['https://anno1800.fandom.com/wiki/Buildings']

    # Store the downloaded images here
    IMAGE_PATH = './images'

    # Define the regex we'll need to filter the returned links
    # Sample: https://static.wikia.nocookie.net/anno1800/images/5/52/Dirt_road.png/revision/latest/scale-to-width-down/40?cb=20190203162550
    url_matcher = r"(https://static.wikia.nocookie.net/anno1800/images/).*\.(png|webp|jpg)"

    # The XPaths to the various populations
    POPULATION_XPATHS = {
        # Old world:
        'farmers': '//*[@id="mw-content-text"]/div/table[1]',
        'workers': '//*[@id="mw-content-text"]/div/table[2]',
        'artisans': '//*[@id="mw-content-text"]/div/table[3]',
        'engineers': '//*[@id="mw-content-text"]/div/table[4]',
        'investors': '//*[@id="mw-content-text"]/div/table[5]',
        'scholars': '//*[@id="mw-content-text"]/div/table[6]',
        # New world:
        'jornaleros': '//*[@id="mw-content-text"]/div/table[7]',
        'obreros': '//*[@id="mw-content-text"]/div/table[8]',
        # Arctic
        'explorers': '//*[@id="mw-content-text"]/div/table[9]',
        'technicians': '//*[@id="mw-content-text"]/div/table[10]',
        # Enbesa
        'shepherds': '//*[@id="mw-content-text"]/div/table[11]',
        'elders': '//*[@id="mw-content-text"]/div/table[12]'
    }

    # Keep track of the crawled ids
    crawled_images = []

    def parse(self, response):

        for key, xpath in self.POPULATION_XPATHS.items():
            link_extractor = LinkExtractor(allow=BuildingsSpider.url_matcher, restrict_xpaths=xpath)
            image_urls = [link.url for link in link_extractor.extract_links(response)]

            # Check and create directory
            path = os.path.join(self.IMAGE_PATH, key)
            if not os.path.exists(path):
                os.makedirs(path)

            # Find and download all images
            for image_url in image_urls:
                filename = image_url.split('/')[-3]  # Extract the filename from URL
                f_filename = self.format_filename(filename)  # The formatted filename
                file_path = os.path.join(path, f_filename)  # The full path to store the file
                url_tokens = re.split(r"(.png|.webp|.jpg)", image_url)  # Crawl the original image - cut the url after image file
                original_image_url = url_tokens[0] + url_tokens[1]  # Merge tokens into original image URL
                self.logger.info(' >> image_url: ' + image_url + '- original_image_url:' + original_image_url)
                self.download(original_image_url, file_path)  # Download the file

    def download(self, url, filename):
        """
        !!! MAKE SURE THE DOWNLOAD DIRECTORY EXISTS !!!
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
        #  - lowercase
        #  - hyphens instead of lower dash
        #  - remove spaces (in URLs: %27)
        #  - replace file extension: Images are .webp instead of .png
        #  - remove ugly parts ("---", etc.)
        return filename \
            .lower() \
            .replace('_', '-')
        #    .replace('%27', '') \
        #    .replace('.png', '.webp') \
        #    .replace('-0', '').replace('---', '-').replace('--', '-')
#
