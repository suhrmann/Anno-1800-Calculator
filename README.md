# Anno 1800 Calculator

This is a crawler to download the images from the [Anno 1800 Wiki](http://anno1800.wikia.com).

This crawler requires Python 3 and is based on [Scrapy](https://scrapy.org/).


### Hot to use

1. Install **Python 3**

2. Install dependency Scrapy:
    ```
    pip install scrapy requests
    ```
3. Run crawler
    ```
    scrapy crawl buildings
    scrapy crawl population
    ```

### FAQ

- How to change the download directory? <br/>
    Adjust the value `IMAGE_PATH` in the spiders `spiders/buildings.py` or `spiders/population.py`
