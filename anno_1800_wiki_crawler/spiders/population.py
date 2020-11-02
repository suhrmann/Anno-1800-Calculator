# -*- coding: utf-8 -*-
import scrapy


class PopulationSpider(scrapy.Spider):
    name = 'population'
    allowed_domains = ['anno1800.wikia.com', 'anno1800.fandom.com', 'static.wikia.nocookie.net']
    start_urls = ['https://anno1800.fandom.com/wiki/Population']

    def __init__(self):
        # TODO Remove this constructor when implemented!
        self.logger.error("Population not implemented  yet!")
        exit(1)

    def parse(self, response):
        self.logger.error("Population not implemented  yet!")
        exit(1)
