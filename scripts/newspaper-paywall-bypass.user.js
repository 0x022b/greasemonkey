// ==UserScript==
// @author       Janne K
// @name         Newspaper Paywall Bypass
// @description  Bypasses paywall on Finnish newspapers' websites
// @version      1.1.5
// @homepage     https://github.com/0x022b/greasemonkey
// @downloadURL  https://raw.githubusercontent.com/0x022b/greasemonkey/master/scripts/newspaper-paywall-bypass.user.js
// @include      /^https?://www\.ess\.fi/.+$/
// @include      /^https?://www\.hs\.fi/.+$/
// @grant        none
// @run-at       document-start
// ==/UserScript==

Object.defineProperty(document, "referrer", {
	get: function() { return "https://t.co"; }
});
