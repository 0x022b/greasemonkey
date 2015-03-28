// ==UserScript==
// @author       Janne K
// @name         PSX Extreme Lightbox Handler
// @description  Prevents opening of the lightbox on PSX Extreme.
// @version      1.0.2
// @homepage     https://bitbucket.org/scoobadog/tampermonkey/
// @updateURL    https://bitbucket.org/scoobadog/tampermonkey/raw/master/psxextreme-lightbox-handler.js
// @include      /^http://www\.psxextreme\.com/$/
// @grant        none
// @run-at       document-body
// ==/UserScript==
if (set_cookie) {
    set_cookie("fb_like", "false", 1);
}
