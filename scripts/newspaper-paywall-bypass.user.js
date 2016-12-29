// ==UserScript==
// @author       Janne K
// @name         Newspaper Paywall Bypass
// @description  Bypasses paywall on Finnish newspapers' websites
// @version      1.1.4
// @homepage     https://github.com/scoobadog/greasemonkey
// @downloadURL  https://raw.githubusercontent.com/scoobadog/greasemonkey/master/scripts/newspaper-paywall-bypass.user.js
// @include      /^https?://www\.ess\.fi/.+$/
// @include      /^https?://www\.hs\.fi/.+$/
// @grant        none
// @run-at       document-start
// ==/UserScript==

Object.defineProperty(document, "referrer", {
	get: function() { return "https://t.co"; }
});
