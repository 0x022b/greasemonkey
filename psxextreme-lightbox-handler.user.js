// ==UserScript==
// @author       Janne K
// @name         PSX Extreme Lightbox Handler
// @description  Prevents opening of the lightbox on PSX Extreme.
// @version      1.2.3
// @homepage     https://github.com/scoobadog/greasemonkey/
// @downloadURL  https://raw.githubusercontent.com/scoobadog/greasemonkey/master/psxextreme-lightbox-handler.user.js
// @include      /^https?:\/\/www\.psxextreme\.com\/.*$/
// @grant        none
// @run-at       document-start
// ==/UserScript==
document.cookie = "fb_like=false;domain=."
	+ top.location.host.replace(/www\./i, "") + ";path=/";
