#Layout
- Configure highlight.js to use spaces (always) instead of tabs
- Hide 'Copy to clipboard' button if source is empty (Preview and HTML tabs)
- (?) Disable 'Language' and 'Theme' dropdowns if source is empty
- (?) Make main navigation (Source/Highlight/HTML) more attractive/larger

#Limits?
- Source code size in bytes/characters?
- Final code size?
- JS-library limits?
- SharePoint limits? (e.g. WikiContent field)

#How to open the add-in?
- From the Ribbon while editing page
- (?) Also from the add-in homepage (dedicated link to open dialog)

#User actions
- Insert source code (Ctrl+V, paste)
- Preview
- Copy to clipboard: rich-text
- Copy to clipboard: HTML
- Paste into the page (if possible, e.g. if the dialog was opened while editing the page's content)
- Cancel/Close

#Two ways to grab the code
- Copy from Preview as rich-text that can be pasted with OOB WYSIWYG functionality
- Copy as HTML code to paste into page's source code (advanced scenario?)

#Localization
- See ReactJS documentation
- Title of the add-in is not localizable (English only)

#Add-in configuration page
- Do we need it at all? Do we have any options to configure out of main window of the add-in?
- Who can configure the add-in? Website admins?
- How to implement: dedicated page.
  BTW, Default.aspx is quite a good option: we can show help/how-to on the page for all users, adding "Configure" link for admins only.
  Of course Admin.aspx should also check if user has web administrator rights on the site.

#Building/bundling
- Get rid of warnings (onLoad, 64 warnings in the console)
- How to update DataURL links for the icons? Gulp? On demand / automatically
- How to minify bundled JS?
- (?) Dev/Prod configurations

#Dialog box
- Keyboard shortcut to open Code Colorer?
- How to close a dialog box by pressing Esc?
- Use CloseCustomActionDialogNoRefresh (https://dev.office.com/sharepoint/docs/sp-add-ins/sharepoint-add-ins-ux-design-guidelines)
