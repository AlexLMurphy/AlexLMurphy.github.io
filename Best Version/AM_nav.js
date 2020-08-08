/*

	Animation script of Alex Murphy's home page
	Author: Alex Murphy
	Date:   5/24/20
	
	Filename: AM_nav.js
	
	Purpose: Adjust the location of Alex L. Murphy
	based on window viewport width.

*/

var isShort; // Initialized later
var currentWidth = window.innerWidth;

// Find the pageTitle
var pageTitle;
let titles = document.getElementsByTagName("title");
if (titles.length > 0) {
	// Assume it will be the first title
	pageTitle = titles[0].innerHTML;
	if (titles[0].innerHTML.includes("—")) {
		// Do not include em-dashes and any following text
		pageTitle = pageTitle.split("—")[0];
		// Delete the last character (space) by using slice
		pageTitle = pageTitle.slice(0, -1);
	}
}

// Initial checkup on screen width and accompanying adjustments
if (currentWidth < 1247) {
	var newUl = "";
	var ulList = document.getElementsByTagName("ul");
	for (id in ulList) {
		var entry = ulList[id];
		var text = String(entry.innerHTML);
		if (text.includes("Alex L. Murphy")) {
			var entry = ulList[id];
			// var text = String(entry.innerHTML);
			var textarray = entry.innerHTML.split("</li>");
			for (ids in textarray) {
				let text = textarray[ids].trim();
				if (text.length > 0 && !(text.includes("Alex L. Murphy"))) {
					newUl += text;
				}
			}
			entry.innerHTML = newUl;
			theNav = document.getElementsByTagName("nav")[0];
			
			if (pageTitle != "Alex L. Murphy") {
					theNav.innerHTML = "<li style='list-style: none; list-style-image: " +
					"none;'><a href='Home.html'>Alex L. Murphy</a></li>" + theNav.innerHTML;
					
			} else if (pageTitle == "Alex L. Murphy") {
				theNav.innerHTML = "<li id='here' style='list-style: none; list-sty" + 
				"le-image: none;'>Alex L. Murphy</li>" + theNav.innerHTML;
			}
		}
	}
	isShort = true;
	
	if (pageTitle == "About") {
		let HC = document.getElementById("HC");
		HC.style.float = "none";
		HC.style.borderLeft = "none";
		HC.style.width = "calc(100% - 2em)";
		HC.style.margin = "0px 1em 0em 1em";
		HC.style.padding = "1em 13vw 0em 13vw";
		
		let CU = document.getElementById("CU");
		CU.style.borderLeft = "none";
		CU.style.float = "none";
		CU.style.width = "calc(100% - 2em)";
		CU.style.margin = "-1px 1em 0em 1em";
		CU.style.padding = "1em 0em 1em 0em";
	}
} else {
	isShort = false;
	if (pageTitle == "About") {
		let HC = document.getElementById("HC");
		HC.style.float = "right";
		HC.style.borderLeft = "1px solid black";
		HC.style.width = "calc(50% - 1em)";
		HC.style.margin = "1.3em 1em 0em 1vw";
		HC.style.padding = "1em 6.5vw 1em 6.5vw";
		
		let CU = document.getElementById("CU");
		CU.style.float = "right";
		CU.style.borderLeft = "1px solid black";
		CU.style.width = "calc(50% - 1em)";
		CU.style.margin = "-1px 1em 0em 1vw";
		CU.style.padding = "1em 1vw 1em 1vw";
	}
}

// Sometimes maximizing the window bypasses this event handler?
window.onresize = function() {
	currentWidth = window.innerWidth;
	if (!isShort) {
		if (currentWidth < 1247) {
			var newUl = "";
			var ulList = document.getElementsByTagName("ul");
			for (id in ulList) {
				var entry = ulList[id];
				var text = String(entry.innerHTML);
				if (text.includes("Alex L. Murphy")) {
					var entry = ulList[id];
					// var text = String(entry.innerHTML);
					var textarray = entry.innerHTML.split("</li>");
					for (ids in textarray) {
						let text = textarray[ids].trim();
						if (text.length > 0 && !(text.includes("Alex L. Murphy"))) {
							newUl += text;
						}
					}
					entry.innerHTML = newUl;
					theNav = document.getElementsByTagName("nav")[0];
					if (pageTitle != "Alex L. Murphy") {
							theNav.innerHTML = "<li style='list-style: none; list-style-image: " +
							"none;'><a href='Home.html'>Alex L. Murphy</a></li>" + theNav.innerHTML;
							
					} else if (pageTitle == "Alex L. Murphy") {
						theNav.innerHTML = "<li id='here' style='list-style: none; list-sty" + 
						"le-image: none;'>Alex L. Murphy</li>" + theNav.innerHTML;
					}
				}
			}
			isShort = true;
			
			if (pageTitle == "About") {
				let HC = document.getElementById("HC");
				HC.style.float = "none";
				HC.style.borderLeft = "none";
				HC.style.width = "calc(100% - 2em)";
				HC.style.margin = "0px 1em 0em 1em";
				HC.style.padding = "1em 13vw 0em 13vw";
				
				let CU = document.getElementById("CU");
				CU.style.borderLeft = "none";
				CU.style.float = "none";
				CU.style.width = "calc(100% - 2em)";
				CU.style.margin = "-1px 1em 0em 1em";
				CU.style.padding = "1em 0em 1em 0em";
			}
		}
	} else {
		if (currentWidth >= 1247) {
			let newNav = "";
			var navList = document.getElementsByTagName("nav");
			for (id in navList) {
				var entry = navList[id];
				var text = String(entry.innerHTML);
				if (text.includes("Alex L. Murphy")) {
					let entry = navList[id];
					let temp = entry.innerHTML.split("</li>");
					let counter = 0;
					for (id in temp) {
						thetext = temp[id].trim();
						if (counter > 0) {
							newNav += thetext;
							if (thetext.length > 5) {
								newNav += "</li>";
							}
							if (counter == 2) {
								if (pageTitle != "Alex L. Murphy") {
									newNav += "<li><a href='Home.html'>Alex L. Murphy</a></li>";
								} else if (pageTitle == "Alex L. Murphy") {
									newNav += "<li id='here'>Alex L. Murphy</li>";
								}
							}
						}
						counter++;
					}
					entry.innerHTML = newNav;
				}
			}
			isShort = false;
			
			if (pageTitle == "About") {
				let HC = document.getElementById("HC");
				HC.style.float = "right";
				HC.style.borderLeft = "1px solid black";
				HC.style.width = "calc(50% - 1em)";
				HC.style.margin = "1.3em 1em 0em 1vw";
				HC.style.padding = "1em 6.5vw 1em 6.5vw";
				
				let CU = document.getElementById("CU");
				CU.style.float = "right";
				CU.style.borderLeft = "1px solid black";
				CU.style.width = "calc(50% - 1em)";
				CU.style.margin = "-1px 1em 0em 1vw";
				CU.style.padding = "1em 1vw 1em 1vw";
			}
		}
	}
}