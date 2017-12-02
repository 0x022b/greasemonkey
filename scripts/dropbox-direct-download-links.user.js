// ==UserScript==
// @author       Janne K
// @name         Dropbox Direct Download Links
// @description  Adds a button to Dropbox shared folder that lists direct download links.
// @version      1.4.0
// @homepage     https://github.com/0x022b/greasemonkey
// @downloadURL  https://raw.githubusercontent.com/0x022b/greasemonkey/master/scripts/dropbox-direct-download-links.user.js
// @include      /^https?://www\.dropbox\.com/.+\?dl=0(?:#.*)?$/
// @grant        none
// @run-at       document-body
// ==/UserScript==

var d = document, o, f = function () {
	var b = d.querySelector(".sl-page-body");
	if (!b) {
		return;
	}
	var c = d.querySelector(".react-title-bar__controls");
	if (!c) {
		return;
	}
	if (!d.querySelector("#links-button")) {
		var e = d.createElement("a");
		e.id = "links-button";
		e.href = "#links";
		e.className = "button-primary control__button";
		e.innerHTML = "Links";
		e.addEventListener("click", function () {
			if (!d.querySelector("#links")) {
				var l = d.createElement("div");
				l.id = "links";
				l.className = "sl-gallery-container";
				d.querySelectorAll(".sl-grid-cell a").forEach(function (a) {
					l.innerHTML += "<p style='font-size: 12px'>" + a.protocol +
						"//dl.dropboxusercontent.com" + a.pathname + "</p>";
				});
				b.appendChild(l);
			}
		});
		c.insertBefore(e, c.lastChild);
	}
};
o = new MutationObserver(f);
o.observe(d.querySelector("body"), { childList: true, subtree: true });
