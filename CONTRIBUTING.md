# Contributing to OUI

1. Branch off of `devel`: `git checkout -b username/branch-name`.
2. Make your changes, commit your code.
3. Add your change to the "Unreleased" section of the `CHANGELOG.md` under one of the following sub-sections:
  * **Added**: for new features.
  * **Changed**: for changes in existing functionality.
  * **Deprecated**: for once-stable features removed in upcoming releases.
  * **Removed**: for deprecated features removed in this release.
  * **Fixed**: for any bug fixes.
  * **Security**: to invite users to upgrade in case of vulnerabilities.

  Your message should follow the following format:

  ```
  [Importance] Message (GitHub Issue Number)
  ```

  Where `Importance` is:

  * Patch - Backwards-compatible bug fixes
  * Feature - Added functionality in a backwards-compatible manner
  * Release - Breaking changes to code or large visual design modifications. Renaming a class or redesigning the button styles, for example, would be a `Release`.

  GitHub issue number is the number of the GitHub issue, if applicable, preceded by a `#`. Ideally, each contribution should have a corresponding issue that provides more context.

4. `git push` your changes to GitHub.

5. Open a pull request comparing your feature `branch-name` against `devel`. Add at least one reviewer.

**Note**: Need to release a change immediately for backward compatiblity? 1) Branch off of the latest `master` (instead of `devel`) then open a pull request to merge into `master`. 2) Read "[Releasing a new version of OUI](#releasing-a-new-version-of-oui)" below.

## Breaking changes & deprecating code

This applies any time classes are being renamed and you want old and new code to be running simultaneously, for example, changing `width-100` to `width--100`. In order to give engineers time to refactor deprecated classes, the UI Engineer introducing breaking changes should do the following:

1. Move the deprecated code into a new partial in OUI, adding `--deprecated` to its filename:

  ```
  [_filename]--deprecated.scss
  ```

  For example, if code in `_sizing.scss` contains a breaking change, OUI would contain:

  ```
  _sizing.scss
  _sizing--deprecated.scss
  ```

  Where `_sizing.scss` contains the new code and `_sizing--deprecated.scss` is deprecated code.
2. Add a line into `## [Unreleased][unreleased]` section in the `CHANGELOG.md` explaining the change. Use the `### Deprecated` heading.
3. Make the needed changes in the application HTML after the release.
4. Communicate the breaking change to ADEPT to prevent deprecated code from being introduced.
5. Create an issue on GitHub to track the deprecated code.
6. After 14 days the UI Engineer should search the codebase one last time for depreciated HTML and delete the `--depreciated.scss` partial.

## Releasing a new version of OUI

1. Run `git checkout devel && git pull && git checkout master && git pull`.
2. This step depends on the desired process.
  - **Normal Releases:** Merge `devel` into `master` (`git merge devel`) and fix potential merge conflicts.
  - **Hotfixes:** Skip this step. We don't want to release all changes at once.
3. Open the `CHANGELOG.md` and look at the "Unreleased" contributions. Update it to reflect the new release and commit the change on `master`.
4. Update the URLs in `src/oui/partials/components/_icons.scss` to reflect the version of `oui-icons` that `oui` uses. Run `npm install && npm list oui-icons` to get that version number. These get embedded in the OUI documentation.
5. Run `npm version patch`, `npm version minor`, or `npm version major` depending on the highest importance issue in the new changes. `minor` maps to "Feature" and `major` maps to "Release" in the `CHANGELOG.md`.
6. [Create a new release on GitHub](https://github.com/optimizely/oui/releases/new). It should [look like this](https://www.dropbox.com/s/1nln5ttbxfbacuv/Screenshot%202015-09-02%2011.31.21.png). Select
 the tag version that gulp generated, leave the "Release title" blank, and paste the "Unreleased" contributions from the `CHANGELOG.md` in the release notes. 
7. [Deploy new documentation](https://github.com/optimizely/scribesass/blob/master/README.md) using ScribeSass.
