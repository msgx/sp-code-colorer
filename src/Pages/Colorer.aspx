<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<WebPartPages:AllowFraming runat="server" />

<!DOCTYPE html>
<html>
<head>
	<title>Code Colorer</title>
	<link rel="stylesheet" href="../Content/fabric.min.css" />
	<link rel="stylesheet" href="../Content/fabric.components.min.css" />
	<script type="text/javascript" src="../Scripts/jquery-3.1.1.slim.min.js"></script>
	<script type="text/javascript" src="../Scripts/fabric.min.js"></script>
	<script type="text/javascript" src="../Scripts/app.js"></script>
</head>
<body>
	<div class="ms-Pivot" id="spccTabs">
		<ul class="ms-Pivot-links">
			<li class="ms-Pivot-link is-selected" data-content="spcc_code">Code</li>
			<li class="ms-Pivot-link " data-content="spcc_preview">Preview</li>
			<li class="ms-Pivot-link " data-content="spcc_html">HTML</li>
		</ul>
		<div class="ms-Pivot-content" data-content="spcc_code">
			Text area with a source code should be here.
		</div>
		<div class="ms-Pivot-content" data-content="spcc_preview">
			DIV with colored source code should be here.
		</div>
		<div class="ms-Pivot-content" data-content="spcc_html">
			Text area with HTML representation of the code should be here.
		</div>
	</div>
</body>
</html>
