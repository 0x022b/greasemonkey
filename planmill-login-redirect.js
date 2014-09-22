// ==UserScript==
// @name         PlanMill Login Redirect
// @description  Redirects an expired session to a login page that doesn't fail.
// @version      1.1.0
// @homepage     https://bitbucket.org/scoobadog/tampermonkey/
// @updateURL    https://bitbucket.org/scoobadog/tampermonkey/raw/master/planmill-login-redirect.js
// @include      /^https://online\.planmill\.com/.+/.+$/
// @grant        none
// @run-at       document-body
// ==/UserScript==
if (document.getElementById("logindiv") !== null) {
	var path = window.location.pathname;
	var url = window.location.href
		.replace(path, path.substr(0, path.indexOf("/", 1)))
		.replace(window.location.search, "") + "/";

	if (url.length < window.location.href.length) {
		window.location.replace(url)
	}
}
