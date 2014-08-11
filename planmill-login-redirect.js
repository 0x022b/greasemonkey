// ==UserScript==
// @name         Planmill Login Redirect
// @description  Redirects an expired session to a login page that doesn't fail.
// @version      1.0.0
// @homepage     https://bitbucket.org/scoobadog/tampermonkey/
// @updateURL    https://bitbucket.org/scoobadog/tampermonkey/planmill-login-redirect.js
// @match        https://online.planmill.com/*/*
// @grant        none
// @run-at       document-body
// ==/UserScript==
var el = document.getElementById("logindiv");
var query = window.location.search;
if (el !== null && query !== "") {
	var url = window.location.href.replace(query, "");
	window.location.replace(url)
}
