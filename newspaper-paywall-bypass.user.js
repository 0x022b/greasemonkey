// ==UserScript==
// @author       Janne K
// @name         Newspaper Paywall Bypass
// @description  Bypasses paywall on Finnish newspapers' websites
// @version      1.1.0
// @homepage     https://github.com/scoobadog/tampermonkey/
// @downloadURL  https://raw.githubusercontent.com/scoobadog/tampermonkey/master/newspaper-paywall-bypass.user.js
// @include      /^https?:\/\/www\.(?:ess|hs)\.fi\/.+$/
// @grant        none
// @run-at       document-start
// ==/UserScript==

Object.defineProperty(document, "referrer", {
	get: function() { return "https://t.co"; }
});
