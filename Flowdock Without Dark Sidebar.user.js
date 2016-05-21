// ==UserScript==
// @name          Flowdock Solarized Dark Grey
// @namespace     http://userstyles.org
// @description	  Flowdock style inspired by Solarized Dark color palette designed by Ethan Schoonover.
// @author        ristomatti
// @homepage      https://userstyles.org/styles/125297
// @match         https://www.flowdock.com/*
// @run-at        document-start
// @version       0.20160318134437
// ==/UserScript==
(function() {var css = [
	"/**",
	"* Flowdock Solarized Dark Grey v0.3 (2016-03-18)",
	"*",
	"* https://userstyles.org/styles/125297/flowdock-solarized-dark-grey",
	"* https://github.com/ristomatti/flowdock-solarized-dark",
	"*",
	"* The MIT License (MIT)",
	"* https://opensource.org/licenses/MIT",
	"*",
	"* (c) 2016 Ristomatti Airo <ristomatti@kallio.io>",
	"*",
	"* ",
	"* Solarized dark grey colors",
	"*",
	"*   background0  #141414",
	"*   background1  #212121",
	"*   background2  #3a3a3a",
	"*",
	"* Solarized dark base colors",
	"*",
	"*   base03       #002b36",
	"*   base02       #073642",
	"*   base01       #586e75",
	"*   base00       #657b83",
	"*   base0        #839496",
	"*   base1        #93a1a1",
	"*   base2        #eee8d5",
	"*   base3        #fdf6e3",
	"*",
	"* Solarized accent colors",
	"*",
	"*   yellow       #b58900",
	"*   orange       #cb4b16",
	"*   red          #dc322f",
	"*   magenta      #d33682",
	"*   violet       #6c71c4",
	"*   blue         #268bd2",
	"*   cyan         #2aa198",
	"*   green        #859900",
	"*/",
	"",
	"#tab-bar {",
	"	background: #e7e7e7 !important;",
	"}",
	"",
	".tab-name {",
	"	background-color: #e7e7e7 !important;",
	"}",
	"",
        ".current .tab-name {",
        "    background-color: #c7c7c7 !important;",
        "    color: #000000 !important;",
        "}",
        ".current .tab-link {",
        "    background: #c7c7c7 !important;",
        "}",
        ".tab {",
        "    background: none !important;",
        "    color: #93a1a1 !important;",
        "}",
	".tab-list-shadow.top {",
	"	top: 0;",
	"	background-image: none !important;",
	"}",
	".tab-list-shadow.bottom {",
	"	bottom: 0;",
	"	background-image: none !important;",
	"}",
	".nav-footer {",
	"	background: none !important;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
