// ==UserScript==
// @author       Janne K
// @name         Dropbox Direct Download Links
// @description  Adds a button to Dropbox shared folder that lists direct download links.
// @version      1.2.0
// @homepage     https://github.com/scoobadog/greasemonkey
// @downloadURL  https://raw.githubusercontent.com/scoobadog/greasemonkey/master/scripts/dropbox-direct-download-links.user.js
// @include      /^https?://www\.dropbox\.com/.+\?dl=0(?:#.*)?$/
// @grant        none
// @run-at       document-body
// ==/UserScript==

var d = document, o, f = function () {
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
				d.querySelectorAll(".sl-file-link").forEach(function (a) {
					l.innerHTML += a.protocol +
						"//dl.dropboxusercontent.com" + a.pathname + "<br/>";
				});
				d.querySelector(".sl-page-body").appendChild(l);
			}
		});
		var c = d.querySelector(".react-title-bar__controls");
		c.insertBefore(e, c.lastChild);
	}
};
if (d.querySelector(".react-title-bar")) {
	f();
}
o = new MutationObserver(f);
o.observe(d.querySelector(".preview-box"), { childList: true, subtree: true });
