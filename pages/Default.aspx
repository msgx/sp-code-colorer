<%@ Page Language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
	<SharePoint:ScriptLink Name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
	<link href="../Content/fabric.min.css" rel="stylesheet" />
	<style type="text/css">
		#s4-ribbonrow { display: none; }
		.howto-img { border: 1px solid #e6e6e6; padding: 4px; }
	</style>
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">How to use Code Colorer</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
	<div class="ms-Fabric">
		<p class="ms-font-m-plus">Code Colorer is a SharePoint add-in that allows to apply syntax highlighting to source code you provide.</p>
		<p class="ms-font-m-plus">Editors and technical writers who work with SharePoint often need to insert pieces of source code into pages. For example, this is the case with maintaining Wiki based KB. Usually, they have to use external tools for syntax highlighting. Code Colorer allows to get highlighed code without switching to any other application or site.</p>
		<p class="ms-font-m-plus">To get started with Code Colorer, put the page in edit mode.</p>
		<p class="ms-font-m-plus">On the <strong>Format Text</strong> tab, you will find the <strong>Code</strong> group with the <strong>Highlight</strong> button.</p>
		<div>
			<img src="../Images/howto_ribbon.png" alt="Code Colorer button on the Ribbon" width="870" height="230" class="howto-img" />
			<div class="ms-font-s">Code Colorer button on the Ribbon</div>
		</div>
		<p class="ms-font-m-plus">The dialog box opens. Here you can type or paste a source code. Click the <strong>Highlight</strong> button then.</p>
		<p class="ms-font-m-plus">Code Colorer switches to highlight view where you can choose theme and language. In most cases, you don’t need to specify code language manually, autodetect does it for you. Use the <strong>Back to code</strong> button if you want to edit the code.</p>
		<div>
			<img src="../Images/howto_preview.png" alt="Code Colorer dialog box" width="842" height="667" />
			<div class="ms-font-s">Code Colorer dialog box</div>
		</div>
		<p class="ms-font-m-plus">When the code is highlighted as needed, copy it to clipboard by clicking <strong>Copy as HTML</strong> or <strong>Copy as Rich Text</strong>. Rich Text is useful for WYSIWYG editing, but HTML format allows you to control the HTML markup of the page.</p>
		<p class="ms-font-m-plus">That’s all, just close the dialog box and paste the code from clipboard where you need it.</p>
	</div>
</asp:Content>
