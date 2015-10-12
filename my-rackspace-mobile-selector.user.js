// ==UserScript==
// @author       Janne K
// @name         My Rackspace Mobile Selector
// @description  Automatically sends the verification code to the default phone number on the two factor login page.
// @version      1.0.0
// @homepage     https://bitbucket.org/scoobadog/tampermonkey/
// @updateURL    https://bitbucket.org/scoobadog/tampermonkey/raw/master/my-rackspace-mobile-selector.user.js
// @include      /https://my\.rackspace\.com/portal/auth/login\?mobile=false&targetUri=%2Fhome&ddi=/
// @grant        none
// @run-at       document-ready
// ==/UserScript==
var submit = $(".myrs-form-submit-disable");
if (submit.val() === "Send Code") {
	submit.click();
}
