# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

This file follows the format suggested by [Keep a CHANGELOG](https://github.com/olivierlacan/keep-a-changelog).

## [Unreleased][Unreleased]
### Added
- [Feature] Adding new white-space trump. (#223)
- [Patch] Add more ScribeSass comments.

### Changed
- [Release] Combined different border variables (border color and border-radius) into one object, `$border`, so it can amended downstream. References to `$border-radius` will need to change in apps using OUI. (#156)
- [Release] Remove `.#{$namespace}form--small` (#162)
- [Patch] Move comment about `space-around` that is in the wrong needed. (#180)
- [Patch] Change `CONTRIBUTING.md` to add information about creating GitHub issues to track deprecated code. (#149)

### Fixed
- [Patch] Decreasing left/right padding on `select` elements so they better align with other form elements. Previously the inherited padding of buttons. (#220).
- [Patch] Adding variable for input padding. (#220).
- [Patch] Adding CSS for nested buttons (like in dropdows) in `button-group` so rounded corners work as expected (#137).
- [Patch] Re-add missing variable `pkg` in `deploy.js`. (#210)
- [Patch] Fix deploy gulpfile to include merging `master` back into `devel`. (#209)
- [Patch] Fix typo in license.
- [Patch] Tiny documentation fixes. (#234)

## [9.0.0][9.0.0] - 2016-01-19
### Added
- [Feature] Moving gulp tasks into individual files. Adding documenation for each one. (#202)
- [Feature] Add a link to the living OUI documentation in the README. (#177)
- [Feature] Add Travis CI and Gitter badges to README. (#198)

### Changed
- [Release] Moved polyfills from separate folder/partials into the existing `elements/mixins` and `elements/functions` partials. This requires removing polyfill references from apps using OUI. (#185)
- [Feature] Replace existing comments with ScribeSass annotations. (#194)
- [Release] Renaming all instances of `core` to `oui`. This requires changing `core` Sass references in the apps that use OUI. (#183, #184)
- [Patch] Add `<link>` tags to the external OUI examples in the README.
- [Patch] Update `devel` with `master` after deploy using Gulp. (#193)
- [Patch] Updating javascript to remove handlers when not needed in dropdown/popover.
- [Patch] Updating javascript to remove `jQuery.noconflict` as it breaks other jQuery code.

### Fixed
- [Patch] Fix the gulp `.src()` for the AWS S3 deploy. (#192)
- [Patch] Removed outdated information from `CONTRIBUTING.md`. (#193)
- [Patch] Remove comment about `space-around` that isn't needed. (#180)

## [8.0.0][8.0.0] - 2016-01-13
### Added
- [Feature] Adding `.icon--text-align` class to allow inline icons to visually align with the text. E.g., help icons.
- [Feature] Adding an image of our mascot, Louis.

### Changed
- [Patch] Renamed `oui-canvas.css` to `oui.css` and added a `oui-extras.css` file that contains the only the icons that were previously concatenated into `oui-canvas.css`. May contain additional "extras" in the future. (#176, #186)
- [Patch] Push both `oui.css` and `oui-extras.css` to AWS on releases.
- [Patch] Simplifying CSS in `_select.scss` to remove IE hacks.
- [Release] Removed IE10+ mixin in `partials/elements/_mixins.scss` to remove IE hacks. Not being used within OUI.
- [Patch] Update `CONTRIBUTING.md` to include info on hotfixes. (#168)

### Fixed
- [Patch] Removing `config.rb`. (#163)
- [Patch] Remove executable bit from non-executable files. (#161)
- [Patch] Remove some outdated information from `README.md`. (#174)

## [7.1.0][7.1.0] - 2015-12-08
### Changed
- [Feature] Add ability to generate CSS with icons for Canvas and simplify deployment steps.

## [7.0.0][7.0.0] - 2015-12-04
### Added
- [Release] Adding local JS to power components.
- [Feature] Adding new, custom styling for `select` elements. Removed select styling from `_forms.scss`.
- [Feature] Adding mixin to target IE10+.
- [Feature] Adding mixin to disable `appearance` to remove default browser styling from some elements.
- [Release] Adding additional HTML examples to test component javascript.
- [Feature] Adding input variation `_input-icon.scss` so icons can be added to inputs, like a calendar icon for a date picker.
- [Patch] Adding `edit-text` Sass file.
- [Patch] Adding `background--current-color` trump to make the background the current color.

### Changed
- [Patch] Removed `src/img` and `src/wireframe`. SVGs now in `oui-icons`. `wireframe` not being used or maintained.
- [Patch] Removing `box-sizing: content-box` to restore inherited `border-box` value so that height/width sizing is consistent with inputs/selects. Buttons previously did not have a border so it was easier to calculate height based on `content-box`.
- [Patch] Adding line-height variables for buttons to better center text vertically.
- [Release] Changing `accordion.scss` css to be more consistent with javascript conventions.
- [Release] Changing `disclose.scss` css to be more consistent with javascript conventions.
- [Release] Changing `dropdown.scss` css to be more consistent with javascript conventions.
- [Release] Changing `tabs.scss` css to be more consistent with javascript conventions.
- [Release] Changing `popover` to `pop--over` to more consistent with BEM conventions.
- [Release] Changing `poptip` to `pop--tip` to more consistent with BEM conventions.
- [Patch] Changing the default variable poptip width.
- [Patch] Removing right padding from `input-search`. (#158)
- [Feature] Add a license to the repository. (#125)
- [Feature] Adding scrolling variation for tables.

### Fixed
- [Patch] Fix incorrect links in the changelog.

## [6.0.0][6.0.0] - 2015-10-07
### Changed
- [Patch] Updating weight of poptips from not specified to `600`.
- [Patch] Border-radius on buttons now all `2px`.
- [Patch] Adding `narrow` and `tight` button variations so left/right padding can be made smaller.
- [Feature] `matrix` mixin now has 3 optional values to specify number of columns, spacing, and an optional pixel value for responsive, e.g. `matrix(3, 300px)`.
- [Patch] Adding `gulp html-tests` task to test changes to core using live HTML examples.
- [Patch] Adding explanation of `html-tests` into README.md.
- [Patch] Adding fix for Firefox buttons in `_reset.scss`, removing inner padding and border.
- [Release] Rename LEGO to OUI. This creates a new NPM registry and changes the GitHub repository URL. (#130)

## [5.0.0][5.0.0] - 2015-09-28
### Added
- [Patch] Adding `watch` process so that Sass changes will compile automatically. To use run `gulp watch`.

### Deprecated
- [Patch] Adding `_buttons--deprecated.scss` to temporarily retain the `button--dismiss` styling.

## Changed
- [Patch] Removed unneeded `!important` on colors by using `:visited` to fix conflicts with anchors styled as buttons.
- [Release] Updating buttons to use new styling, `button--dismiss` is now `button--plain`.
- [Patch] Removing `button--extra`. It is not used in the app and is not needed.

## [4.0.1][4.0.1] - 2015-09-22
### Fixed
- [Patch] Added back a reference to the `_borders.scss` file. (#127)
- [Patch] Fixes bug in previous release that caused the height of `lego-select` to be too large in FF/IE.

### Deprecated
- [Patch] Adding `_layout--deprecated.scss` to temporarily retain the `lego-pane...` classes (#70)
- [Patch] Adding `_sizing--deprecated.scss` to temporarily retain the `width/height-` trumps. (#69)
- [Patch] Adding `_flexbox--deprecated.scss` to temporarily retain the `flex-` classes.
- [Patch] Adding instructions in CONTRIBUTING.md about how to handle deprecated code.

## [4.0.0][4.0.0] - 2015-09-14
### Added
- [Patch] `em` italic
- [Release] Rebuilding flexbox mixins/classes, removing `lego-pane...` classes. (#70)
- [Release] Provide an optional namespacing variable. (#68)
- [Feature] Added two layout mixins/classes for centering. (#116)
- [Release] Make add/remove table row more robust, fix bugs. (#119)
- [Patch] Added `height--1-1` trump class to allow for `height: 100%`.
- [Patch] Adding class to make input/textarea disabled appearance the same when using classes or disabled attr. (#117)

### Changed
- [Release] Removed `.input--disabled` in favor of extending both `.text-input` & `.textarea` with `--disabled`. (#117)
- [Release] Rename `.informative` to `.cursor--help`. (#73)

### Fixed
- [Patch] Removing `outline: none` from buttons. (#89)
- [Patch] Clarify the "Releasing a new version of LEGO" steps. (#111)
- [Patch] Clarify `CONTRIBUTING.md` to suggest only pushing the newly created tag. (#107)
- [Patch] Fixes alignment of `lego-icon` inside `lego-button`.
- [Patch] Fixes height of `lego-select` by adding `box-sizing: content-box;` so height will be calculated the same as `lego-button`.

## [3.1.0][3.1.0] - 2015-09-02
### Added
- [Feature] Add explanations to Patch, Feature, and Release in `CONTRIBUTING.md`. (#110)

### Changed
- [Patch] `.lego-button--highlight` changed from green to bue

## [3.0.0][3.0.0] - 2015-09-01
### Added
- [Patch] Add "Charcoal" color `#383838`.
- [Patch] Checks to see if `$include-fonts` map exists. Allows usage of Lego without being forced to include brand font. (#90)
- [Feature] Adding namespace variable so we can use 'lego-' or 'oui-' or no prefix. (#68)
- [Feature] Removing `lego-` from mixins that used it: grid, matrix, media. Use of this mixin will have to be updated.

### Removed
- [Release] Remove `.lego-tag` from Core. (#72)

### Changed
- [Patch] Bump font weight for `.weight--bold` class to `600` so its the same as a `<b>` tag.
- [Patch] Updated font styles for `.lego-table th`
- [Patch] Migrate from Travis CI legacy to container-based infrastructure.

### Fixed
- [Patch] Change the weight of `<b>` and `<strong>` tags to `600`.

## [2.0.0][2.0.0] - 2015-08-18
### Changed
- [Release] Major refactor of button styles and class names. New available class names are `.lego-button--highlight`, `lego-button--outline`, `.lego-button--outline-reverse`, `.lego-button--extra`, `.lego-button--dismiss`. `.lego-button--brand` has been deprecated. Usage for classes to follow shortly. (#92) (#85) (#74)
- [Release] Added `!important` to buttons so that when used as anchors the color is consistent.

## [1.0.0][1.0.0] - 2015-08-18
### Fixed
- [Patch] Change comments in `_spinner.scss` to refer to `.lego-overlay` since `.lego-spinner-wrap` doesn't exist. (#76)
### Added
- [Release] Add namespacing variable to Core (#68).

### Changed
- [Patch] Removed concatenation from the `@font-face` URL strings because it was breaking the SCSS parser used for documentation generation.
- [Release] Renaming sizing trumps to be BEM consistent. (#69)

### Removed
- [Patch] Remove old gitignore targets from js days. (#97)

## [0.0.3][0.0.3] - 2015-08-05
### Added
- [Patch] Add a `.lego-pane--scroll-x` for setting `overflow-x` to `auto`.
- [Patch] Add a `.pointer-events--none` trump for disabling pointer events.
- [Patch] Add a `.cursor--move` trump for changing the cursor to `move`.
- [Patch] Allow `.lego-overlay` to be extended with `%lego-overlay`.

## Changed
- [Patch] Moved `_borders.scss` from `components` to `trumps` and added `!important`.

### Fixed
- [Patch] Fix the name of the npm module and changed the privacy setting to false.

## [0.0.2][0.0.2] - 2015-07-13
### Fixed
- [Patch] Fix the broken links in `CHANGELOG.md`. (#60)

### Changed
- [Patch] `.lego-popover` was dependant on `.lego-block-list-group` for styling its `border`, `border-radius`, and `padding` of child elements, however this added other undesired styles to `.lego-popover`. This change removes the link between `.lego-popover` and `.lego-block-list-group`.

### Added
- [Patch] Add Travis CI support to the LEGO repository.
- [Patch] Update `CONTRIBUTING.md` to include information on Git tags
- [Patch] Updated README.md to include example code and usage instructions.
- [Patch] Added `src/scss/core.scss` file so that Core could be compiled.
- [Patch] Added `sass` task to gulpfile.js to compile Core.
- [Patch] Added `npm start` script into `package.json` to run tests.
- [Patch] Added `npm start` script into `package.json` to run install processes.

### Removed
- [Patch] Removed unneeded gems from Gemfile.

## 0.0.1 - 2015-06-24
### Added
- [Patch] Use semantic versioning in LEGO (#58).

[Unreleased]: https://github.com/optimizely/oui/compare/v9.0.0...HEAD
[0.0.2]: https://github.com/optimizely/oui/compare/v0.0.1...v0.0.2
[0.0.3]: https://github.com/optimizely/oui/compare/v0.0.2...v0.0.3
[1.0.0]: https://github.com/optimizely/oui/compare/v0.0.3...v1.0.0
[2.0.0]: https://github.com/optimizely/oui/compare/v1.0.0...v2.0.0
[3.0.0]: https://github.com/optimizely/oui/compare/v2.0.0...v3.0.0
[3.1.0]: https://github.com/optimizely/oui/compare/v3.0.0...v3.1.0
[4.0.0]: https://github.com/optimizely/oui/compare/v3.1.0...v4.0.0
[4.0.1]: https://github.com/optimizely/oui/compare/v4.0.0...v4.0.1
[5.0.0]: https://github.com/optimizely/oui/compare/v4.0.1...v5.0.0
[6.0.0]: https://github.com/optimizely/oui/compare/v5.0.0...v6.0.0
[7.0.0]: https://github.com/optimizely/oui/compare/v6.0.0...v7.0.0
[7.1.0]: https://github.com/optimizely/oui/compare/v7.0.0...v7.1.0
[8.0.0]: https://github.com/optimizely/oui/compare/v7.1.0...v8.0.0
[9.0.0]: https://github.com/optimizely/oui/compare/v8.0.0...v9.0.0
