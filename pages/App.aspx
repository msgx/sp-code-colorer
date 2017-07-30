<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<WebPartPages:AllowFraming runat="server" />
<!DOCTYPE html>
<html>
<head>
	<title>Code Colorer</title>
	<script type="text/javascript">
		document.addEventListener("keydown", function (event) {
			event.key === "Escape" && window.parent.postMessage("CloseCustomActionDialogNoRefresh", "*");
		});
	</script>
	<link href="../Content/fabric.min.css" rel="stylesheet" />
	<link href="../Content/themes/default.css" id="hljsThemeLink" rel="stylesheet" />
	<link href="../Content/app.css" rel="stylesheet" />
	<script src="../Scripts/react.min.js" type="text/javascript"></script>
	<script src="../Scripts/react-dom.min.js" type="text/javascript"></script>
</head>
<body>
	<div id="spccApp">Loading...</div>
	<script src="../Scripts/bundle.js" type="text/javascript"></script>
</body>
</html>
