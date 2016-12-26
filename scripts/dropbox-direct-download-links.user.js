// ==UserScript==
// @author       Janne K
// @name         Dropbox Direct Download Links
// @description  Adds a button to Dropbox shared folder that lists direct download links.
// @version      1.0.0
// @homepage     https://github.com/scoobadog/greasemonkey/
// @downloadURL  https://raw.githubusercontent.com/scoobadog/greasemonkey/master/scripts/dropbox-direct-download-links.user.js
// @include      /^https?://www\.dropbox\.com/.+\?dl=0$/
// @grant        none
// @run-at       document-start
// ==/UserScript==

var d = document, o;
o = new MutationObserver(function () {
	if (d.querySelector(".react-title-bar")) {
		var e = d.createElement("a");
		e.href = "#";
		e.className = "button-primary control__button";
		e.innerHTML = "Links";
		e.addEventListener("click", function () {
			var l = d.createElement("div");
			l.className = "sl-gallery-container";
			d.querySelectorAll(".sl-file-link").forEach(function (a) {
				l.innerHTML += a.href
					.replace("www.dropbox.com", "dl.dropboxusercontent.com")
					.replace("?dl=0", "") + "<br/>";
			});
			d.querySelector(".sl-page-body").appendChild(l);
		});
		var c = d.querySelector(".react-title-bar__controls");
		c.insertBefore(e, c.lastChild);
		o.disconnect();
	}
});
o.observe(d.querySelector("html"), { childList: true, subtree: true });
