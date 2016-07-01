var code = document.getElementById("code");
var btn = document.getElementById("btn");

window.addEventListener("load", function()
{
	btn.addEventListener("click", function()
	{
		var user_script = document.getElementById("user_script");
		if (user_script)
			user_script.parentNode.removeChild(user_script);

		var script = document.createElement("script");
		script.id = "user_script";
		script.text = code.value;
		document.body.appendChild(script);
	});
});
