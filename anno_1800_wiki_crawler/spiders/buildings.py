# -*- coding: utf-8 -*-
import scrapy


class BuildingsSpider(scrapy.Spider):
    name = 'buildings'
    allowed_domains = ['anno1800.wikia.com', 'vignette.wikia.nocookie.net']
    start_urls = ['http://anno1800.wikia.com/wiki/Buildings/']

    def parse(self, response):
        pass
