# Anno 1800 Calculator

[![Build Status](https://travis-ci.org/suhrmann/Anno-1800-Calculator.svg?branch=master)](https://travis-ci.org/suhrmann/Anno-1800-Calculator)
[![](https://img.shields.io/github/downloads/Vadammt/Anno-1800-Calculator/total.svg?style=flat)](https://github.com/Vadammt/Anno-1800-Calculator/releases)

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

[Download here](https://github.com/Vadammt/Anno-1800-Calculator/releases)

---

## Changelog:

- ``2020-11-02`` ``v0.4.0`` Update dependencies to latest version - i.a. Vuetify 2, giving full facelift, bug fixes, ...
- ``2020-10-20`` ``v0.3.0`` Merge pull request #24 dependabot, fixing critical issue in electron
- ``2020-05-11`` ``v0.3.0`` Load production layouts from Anno 1800 Wiki
- ``2020-05-11`` ``v0.2.0`` Smaller changes (meta info, UI enhancements, ...)
- ``2019-02-08`` ``v0.1.0`` Basic features working 🎉🎉🎉

---

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

# Used Technologies

**Core Technologies:**

 - [Electron](https://electronjs.org/) - Build cross platform desktop apps
 - [Vue.js](https://vuejs.org/) - Progressive JavaScript Framework, really helpful for single-page applications
 - [Vuetify](https://vuetifyjs.com/en/) - Material Design Component Framework for Vue.js

**Dependencies**

 - [vuex](https://vuex.vuejs.org/) - state management pattern + library for Vue.js
 - [vue-tree-chart](https://refined-x.com/Vue-Tree-Chart/) - Vue.js component to display tree chart, really awesome ⭐
 - [v-tooltip](https://akryum.github.io/v-tooltip/#/) - highly customizable tooltips

 ---
 
### Legal

This project is licensed under [MIT License](LICENSE).
