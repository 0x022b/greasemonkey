// ==UserScript==
// @author       Janne K
// @name         Etlari Paywall Bypass
// @description  Bypasses Etlari's paywall
// @version      1.0.1
// @homepage     https://github.com/scoobadog/tampermonkey/
// @downloadURL  https://raw.githubusercontent.com/scoobadog/tampermonkey/master/etlari-paywall-bypass.user.js
// @include      /^https?:\/\/www\.ess\.fi\/.+$/
// @grant        none
// @run-at       document-start
// ==/UserScript==

Object.defineProperty(document, "referrer", {
	get: function() { return "https://t.co"; }
});
