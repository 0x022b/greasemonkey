// ==UserScript==
// @author       Janne K
// @name         Kilometrikisa Extra Statistics
// @description  Adds extra statistics to Kilometrikisa results.
// @version      1.0.0
// @homepage     https://bitbucket.org/scoobadog/tampermonkey/
// @updateURL    https://bitbucket.org/scoobadog/tampermonkey/raw/master/kilometrikisa-extra-statistics.js
// @include      /^https?://www\.kilometrikisa\.fi/teams/.+$/
// @grant        none
// @run-at       document-ready
// ==/UserScript==

function calculateAverage(sum, count) {
	var avg = sum / count;
	return !isNaN(avg) ? avg : 0;
}

function createIndicator(value, comparison) {
	var $html = $("<i class='fa'>").css({ "padding-left": "0.5em" });
	if (value > comparison) {
		$html.addClass("fa-caret-up").css({ "color": "limegreen" });
	} else if (value < comparison) {
		$html.addClass("fa-caret-down").css({ "color": "red" });
	} else {
		$html.addClass("fa-circle");
	}
	return $html;
}

function toInvariant(str) {
	return str.replace(/\D(?=\d+\D)/g, "").replace(/\D/, ".");
}

function toVariant(flt) {
	return flt.toFixed(1).replace(".", ",");
}

$("head").append("<link rel='stylesheet' type='text/css' href='"
	+ "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css'>");

var averageDistance = parseFloat(toInvariant($(".team-contest-table li:nth(2)")
	[0].childNodes[1].nodeValue.replace(" km/hlö", "")));
var averageDays = parseFloat(toInvariant($(".team-contest-table li:nth(4)")
	[0].childNodes[1].nodeValue.replace(" pv/hlö", "")));

var totalDistance = parseFloat(toInvariant($(".team-contest-table li:nth(3)")
	[0].childNodes[1].nodeValue.replace(" km", "")));
var totalDays = parseFloat(toInvariant($(".team-contest-table li:nth(5)")
	[0].childNodes[1].nodeValue));
var totalAverage = calculateAverage(totalDistance, totalDays);

$(".content table thead tr").append("<th>").find("th:last").text("km/pv");

$(".content table tbody tr").each(function (i, row) {
	var $row = $(row);
	var distance = parseFloat(toInvariant($row.find("td:nth(2)").text()));
	var days = parseFloat($row.find("td:nth(3)").text());
	var average = calculateAverage(distance, days);
	$row.append("<td>").find("td:last").text(toVariant(average));
	$row.find("td:nth(2)").append(createIndicator(distance, averageDistance));
	$row.find("td:nth(3)").append(createIndicator(days, averageDays));
	$row.find("td:nth(4)").append(createIndicator(average, totalAverage));
});

$(".team-contest-table li:nth(3)").after(
	$("<li class='data-item'>")
		.append($("<div class='data-title'>").append("Kilometrien keskiarvo"))
		.append(toVariant(totalAverage) + " km/pv"));
