"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Mackenzie Baker
   Date:   2.12.2019

*/
/* Causes the document to supply the time written in the date method, but since the localestring method it used, the webpage take the current timezone on your device and uses that instead. The innerhtml method allows the called id to be replaced with the current time specified by the localestring. */
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById('timeStamp').innerHTML = timeStr;

/* The thishour variable calls the current hour from the users machine while the thismonth takes the current month from users machine. */
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

/* Takes the thismonth variable and doubles it, then adding the current hour, before finding the remainder in 24. */
var mapNum = (2 * thisMonth + thisHour) % 24;

/* Sets the provided image to a certain spot depending on the current time and month. */
var imgStr = "<img src='sd_sky" + mapNum + ".png'/>";

/* Sets the imgStr to come after the id planisphere. */
document.getElementById('planisphere').insertAdjacentHTML("afterbegin",imgStr);