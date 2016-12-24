// ==UserScript==
// @author       Janne K
// @name         YouTube Playlist Duration
// @description  Display the total duration of YouTube playlist
// @version      1.1.0
// @homepage     https://github.com/scoobadog/tampermonkey/
// @downloadURL  https://raw.githubusercontent.com/scoobadog/tampermonkey/master/youtube-playlist-duration.user.js
// @include      /^https?:\/\/www\.youtube\.com\/.*$/
// @grant        none
// @run-at       document-end
// ==/UserScript==

document.addEventListener("spfdone", function () {
	if (location.pathname !== "/playlist") {
		return;
	}
	var total = 0;
	var timestamps = document.querySelectorAll(".timestamp");
	for (var i = 0; i < timestamps.length; i++) {
		var parts = timestamps[i].innerText.split(":");
		total += parseInt(parts[0], 10) * 60;
		total += parseInt(parts[1], 10);
	}
	var duration = document.createElement("li");
	duration.innerText = "Duration ";
	if (document.querySelector(".load-more-text")) {
		duration.innerText += "+";
	}
	if (total > 3600) {
		var hours = parseInt(total / 3600, 10);
		duration.innerText += (hours < 10 ? "0" : "") + hours + ":";
		total = total % 3600;
	}
	var minutes = parseInt(total / 60, 10);
	duration.innerText += (minutes < 10 ? "0" : "") + minutes + ":";
	var seconds = parseInt(total % 60, 10);
	duration.innerText += (seconds < 10 ? "0" : "") + seconds;
	var header = document.querySelector(".pl-header-details");
	header.insertBefore(duration, header.lastChild);
});
document.dispatchEvent(new Event("spfdone"));
