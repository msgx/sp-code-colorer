"use strict";

$(document).ready(function () {
	var spccTabs = document.getElementById("spccTabs");
	if (spccTabs) {
		new fabric["Pivot"](spccTabs);
	}
});

//SP.SOD.executeFunc("sp.js", "SP.ClientContext", function () {
//	var context = SP.ClientContext.get_current();
//	var user = context.get_web().get_currentUser();

//	$(document).ready(function () {
//	});

//	function getUserName() {
//		context.load(user);
//		context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
//	}

//	function onGetUserNameSuccess() {
//		$('#message').text('Hello ' + user.get_title());
//	}

//	function onGetUserNameFail(sender, args) {
//		alert('Failed to get user name. Error:' + args.get_message());
//	}
//});
