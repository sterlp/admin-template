<p align="center">
    <img alt="GitHub Actions status" src="https://github.com/sterlp/admin-template/workflows/admin-template%20CI/badge.svg">
</p>

# Goal
Simple admin UI based on bootstrap but be able to use material design too.

**[Launch Live Preview](https://sterlp.github.io/admin-template/)**

# Included
- [Core UI](https://coreui.io/) based on Bootstrap
- [Angular Material](https://material.angular.io/)

# Optional
- add angular bootstrap 
  - [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/documentation#getting-started) `npm install --save ngx-bootstrap` or 
  - [ng-bootstrap](https://ng-bootstrap.github.io/#/getting-started) `ng add @ng-bootstrap/ng-bootstrap`

# Links
- [Admin-Template Core-UI 2.9](https://github.com/sterlp/admin-template/tree/core-ui-2.9) based on Core-UI 2.9

# Setup this Admin Template on your own
## New Project
- new project `ng new admin-template`

use `scss` for styles

## Add Angular Material
- `ng add @angular/material`
  - select `Y` to add angular animations
- `npm install material-icons --save`

## Add Core UI
- add coreui `npm install @coreui/coreui --save`
- add some icons `npm install @coreui/icons simple-line-icons font-awesome --save`
- `npm install --save rxjs`

## styles `angular.json`

add to styles:
```
            "styles": [
              "node_modules/@coreui/icons/css/free.css",
              "node_modules/font-awesome/css/font-awesome.css",
              "node_modules/simple-line-icons/css/simple-line-icons.css",
              "src/styles.scss",
              ...
            ],
```

add in `styles.scss` https://www.npmjs.com/package/material-icons
```
$material-icons-font-path: '~material-icons/iconfont/';
@import '~material-icons/iconfont/material-icons.scss';
```

# Links
- https://ng-bootstrap.github.io
- https://valor-software.com/ngx-bootstrap
- https://coreui.io/docs
- https://material.angular.io
- https://gist.github.com/timbophillips/455ac41659fddcd774c5550650665b66

## Icons Links
- https://fontawesome.com/v4.7.0/icons/
- https://coreui.io/docs/icons/
- https://material.io/resources/icons/

## Used schematics
- Table: https://material.angular.io/guide/schematics

# Copyright
- CoreUI Code released under the MIT license
- https://getbootstrap.com/docs/4.0/about/license/
