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
- add angular bootstrap `npm install --save ngx-bootstrap` or `npm install --save @ng-bootstrap/ng-bootstrap`
- add bootstrap and the required dependencies `npm install --save jquery popper.js bootstrap`

# Links
- [Admin-Template](https://github.com/sterlp/admin-template/tree/core-ui-2.9) based on Core-UI 2.9

# Setup this Admin Template on your own
## New Project
- new project `ng new admin-template`
## Core UI
- add coreui `npm install @coreui/coreui --save`
- add some icons `npm install @coreui/icons simple-line-icons font-awesome material-icons --save`
- `npm install --save rxjs`
- `npm install --save @angular/material @angular/cdk @angular/animations`
- `npm install --save hammerjs`  --> requires `import 'hammerjs'` in the `main.ts`;

## Icons
- https://fontawesome.com/v4.7.0/icons/
- https://coreui.io/docs/icons/
- https://material.io/resources/icons/

## Used schematics
- Table: https://material.angular.io/guide/schematics

## adjust `angular.json`
### styles

```
"node_modules/@coreui/icons/css/free.css",
"node_modules/font-awesome/css/font-awesome.css",
"node_modules/simple-line-icons/css/simple-line-icons.css",
"node_modules/material-icons/iconfont/material-icons.scss",
```

# Links
- https://ng-bootstrap.github.io
- https://valor-software.com/ngx-bootstrap
- https://coreui.io/docs
- https://material.angular.io

# Copyright
- CoreUI Code released under the MIT license
- https://getbootstrap.com/docs/4.0/about/license/
