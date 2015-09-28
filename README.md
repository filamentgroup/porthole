# porthole [![Build Status](https://img.shields.io/travis/filamentgroup/porthole/master.svg)](https://travis-ci.org/filamentgroup/porthole)

[![Filament Group](http://filamentgroup.com/images/fg-logo-positive-sm-crop.png) ](http://www.filamentgroup.com/)

## Activate an element when it is in the viewport.

### Using porthole


Give an element a `data-scroll-activate` attribute and it'll get a "inviewport" class when in the viewport, as well as an "inviewport" event triggered on it.
Elements that also have a `data-scroll-deactivate` attribute will lose the class when they leave the viewport, and they'll get a "outviewport" event


* [Demos and Docs](http://filamentgroup.github.io/porthole/demo/)
* [Tests](http://filamentgroup.github.io/porthole/test/)

## Building the Project Locally

Run `npm install` to install dependencies and then `grunt` to build the project files into the `dist` folder.
