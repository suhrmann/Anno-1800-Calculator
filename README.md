# Anno 1800 Calculator

[![Build Status](https://travis-ci.org/suhrmann/Anno-1800-Calculator.svg?branch=master)](https://travis-ci.org/suhrmann/Anno-1800-Calculator)
[![](https://img.shields.io/github/downloads/suhrmann/Anno-1800-Calculator/total.svg?style=flat)](https://github.com/suhrmann/Anno-1800-Calculator/releases)

<p align="center">
  <a href="https://suhrmann.github.io/Anno-1800-Calculator/#/chains">
    <img src="https://github.com/suhrmann/Anno-1800-Calculator/wiki/images/production-chains-sample.png" width="45%">
  </a>
</p>

-----

There are two versions of the calculator: An online version and a Desktop App.

## Online Calculator

No download, no install. Just calculate: [Anno 1800 Calculator](https://suhrmann.github.io/Anno-1800-Calculator/)


## Download App

The Desktop App (for Windows, MacOS and Linux) does not require a Internet connection once downloaded. 

[Download here](https://github.com/suhrmann/Anno-1800-Calculator/releases)

---

## Changelog:
- ``2022-03-19`` ``v0.4.11`` Update dependencies using yarn
- ``2022-03-10`` ``v0.4.10`` Show version info in About view
- ``2022-03-10`` ``v0.4.9`` Bug fixes and performance improvements...
- ``2022-03-09`` ``v0.4.8`` Switch ordering in sidebar: first Demands second Chains
- ``2020-01-02`` ``v0.4.7`` Fix layout of production chains
- ``2020-01-02`` ``v0.4.6`` Refactored Vuex - thx to [Cahllagerfeld](https://github.com/Cahllagerfeld)
- ``2020-01-01`` ``v0.4.5`` Replace greedy Travis-CI with GitHub Actions! 🚀 Fix some smaller issues
- ``2020-11-06`` ``v0.4.4`` Fix builds for Windows, Linux and MacOS
- ``2020-11-04`` ``v0.4.4`` Hot fix demands calculation (population, not residence) and correct "productionTime" of "Coal Mine"
- ``2020-11-03`` ``v0.4.3`` Finally add all production chains (by now)
- ``2020-11-03`` ``v0.4.2`` Add population demands for population of all DLCs, by now
- ``2020-11-02`` ``v0.4.1`` Working options in production chains & lots of fixed bugs
- ``2020-11-02`` ``v0.4.0`` Update dependencies to latest version - i.a. Vuetify 2, giving full facelift, bug fixes, ...
- ``2020-10-20`` ``v0.3.0`` Merge pull request #24 dependabot, fixing critical issue in electron
- ``2020-05-11`` ``v0.3.0`` Load production layouts from Anno 1800 Wiki
- ``2020-05-11`` ``v0.2.0`` Smaller changes (meta info, UI enhancements, ...)
- ``2019-02-08`` ``v0.1.0`` Basic features working 🎉🎉🎉


-----


# Developers

## Documentation [Wiki]
> We developed this project completely in our free time so please dont expect too much from the documentation. If you have questions, feel free to contact us via mail, issue (especially bugs and errors), PR etc.

The technical documenation is done in the [Wiki of this repo](https://github.com/suhrmann/Anno-1800-Calculator/wiki). Among others there is CI/CD via Travis-CI and the [data structure](https://github.com/suhrmann/Anno-1800-Calculator/tree/master/src/data) described.


## Project setup for developers

```bash
# Get Project
git clone https://github.com/suhrmann/Anno-1800-Calculator.git
cd Anno-1800-Calculator

# Install dependencies
npm install

# Compile and hot-reload for development
npm run serve

# Build desktop application with electron-buiilder.
npm run electron:build
```


## CI / CD

Continuous Integration (CI) and Continuous Delivery (CD) use [GitHub Actions](https://github.com/features/actions). The workflow scripts are located in [.github/workflows](.github/workflows).
 - The CI script ``build.yml`` builds the website on ALL pushs and pull requests
 - The publish (CD) scripts ``release-electron.yml`` to publish Electron on GitHub Releases and ``release-gh-pages.yml`` for Web on GitHub pages react to Git tags ``"v*"``.

### Publish a release:
 1. Update ``version`` in ``package.json`` e.g. ``"version": "0.4.5"``
 2. The publish scripts react to Git tags ``"v*"``, so to publish a release, tag your commit and push both e.g.: 
    1. ``git tag -a v0.4.5 -m "New version v0.4.5"`` - commit and tag (note the version is prefixed `v` ) 
    2. ``git push && git push --tags`` and push (don't forget the tags!)



# Used Technologies

**Core Technologies:**

 - [Electron](https://electronjs.org/) - Build cross platform desktop apps
 - [Vue.js](https://vuejs.org/) - Progressive JavaScript Framework, really helpful for single-page applications
 - [Vuetify](https://vuetifyjs.com/en/) - Material Design Component Framework for Vue.js

**Dependencies**

 - [vuex](https://vuex.vuejs.org/) - state management pattern + library for Vue.js
 - [vue-tree-chart](https://refined-x.com/Vue-Tree-Chart/) - Vue.js component to display tree chart, really awesome ⭐
 - [v-tooltip](https://akryum.github.io/v-tooltip/#/) - highly customizable tooltips
 - [vue-router](https://router.vuejs.org/) - Official Router for SPAs created with Vue


-----


### Legal

This project is licensed under [MIT License](LICENSE).
