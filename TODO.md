## Localization
- See ReactJS documentation
- Title of the add-in is not localizable (English only)

## Building/bundling
- Get rid of warnings (onLoad, 64 warnings in the console)
- How to update DataURL links for the icons? Gulp? On demand or automatically.
- Webpack: minify bundled JS (and CSS?)
- How to implement Dev/Prod configurations?

## Issues
- [ ] Check if main browsers support Copy as Rich Text correctly.
- [ ] Workaround for IE's dialog "Allow access to clipboard?"
- [ ] Landing page (Default.aspx) should provide howto/help to users.

## Ways to open the add-in
- [x] From the Ribbon while editing page
- [ ] Also from the add-in homepage (link to open dialog) if possible

## Limits
- Source code size in bytes/characters?
- Final code size?
- JS-library limits?
- SharePoint limits? (e.g. WikiContent field)

## Dialog box
- How to close a dialog box on Esc?
- Use CloseCustomActionDialogNoRefresh (https://dev.office.com/sharepoint/docs/sp-add-ins/sharepoint-add-ins-ux-design-guidelines)
- Keyboard shortcut to open Code Colorer (if needed)
