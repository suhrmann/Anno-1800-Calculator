# -*- coding: utf-8 -*-
import scrapy


class PopulationSpider(scrapy.Spider):
    name = 'population'
    allowed_domains = ['anno1800.wikia.com', 'vignette.wikia.nocookie.net']
    start_urls = ['http://anno1800.wikia.com/wiki/Population/']

    def parse(self, response):
        pass
