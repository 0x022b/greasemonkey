// ==UserScript==
// @author       Janne K
// @name         Movescount Cross-Origin XMLHttpRequest
// @description  Fixes "No 'Access-Control-Allow-Origin' header is present on the requested resource" errors on Movescount.
// @version      1.1.7
// @homepage     https://github.com/scoobadog/greasemonkey
// @downloadURL  https://github.com/scoobadog/greasemonkey/raw/master/scripts/movescount-cross-origin-xmlhttprequest.user.js
// @include      /^https?:\/\/www\.movescount\.com\/moves\/move.+$/
// @grant        none
// @run-at       document-body
// ==/UserScript==
suunto.move.samplesUrl = undefined;
suunto.move.trackUrl = undefined;
