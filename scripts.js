// JavaScript Document
jQuery(document).ready(function () {
    jQuery("#destroythissite").click(function () {
        //jQuery('head').append('<link rel="stylesheet" href="/wp-content/plugins/destroy-this-site/styles.php" type="text/css" />');
		
		//create new stylesheet
		var sheet = (function() {
			// Create the <style> tag
			var style = document.createElement("style");
		
			// Add a media (and/or media query) here if you'd like!
			// style.setAttribute("media", "screen")
			// style.setAttribute("media", "only screen and (max-width : 1024px)")
		
			// WebKit hack :(
			style.appendChild(document.createTextNode(""));
			
			
		
			// Add the <style> element to the page
			document.head.appendChild(style);
		
			return style.sheet;
		})();
		
		//random values: color, em, border
		var color = '#'+Math.floor(Math.random()*16777215).toString(16);
		var em = Math.floor((Math.random() * 10) + 1);
		var borderstyle = ['solid', 'dotted', 'dashed', 'double'];
		var border = Math.floor((Math.random() * 10) + 1)+"px "+borderstyle[Math.floor(Math.random() * borderstyle.length)]+" "+color;
		var families= ["Arial","Comic Sans MS","Verdana","Georgia","Courier New","Tahoma", "Lucida Console", "MS Serif"];
		var family = families[Math.floor(Math.random() * families.length)];
		var padding =  Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px ";

		
		
		// tags to target: p, a, body, button, div, #main, footer, header
		
		addCSSRule(sheet,"a","color:"+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; border:"+Math.floor((Math.random() * 30) + 1)+"px "+borderstyle[Math.floor(Math.random() * borderstyle.length)]+" "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; font-size:"+Math.floor((Math.random() * 30) + 1)+"!important; font-family:'"+families[Math.floor(Math.random() * families.length)]+"'!important"+"; background: "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; padding:"+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important; margin: "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important;",0);
		
		addCSSRule(sheet,"div","color:"+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; border:"+Math.floor((Math.random() * 30) + 1)+"px "+borderstyle[Math.floor(Math.random() * borderstyle.length)]+" "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; font-size:"+Math.floor((Math.random() * 30) + 1)+"!important; font-family:'"+families[Math.floor(Math.random() * families.length)]+"'!important"+"; background: "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; padding:"+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important; margin: "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important;",0);
		
		addCSSRule(sheet,"p","color:"+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; border:"+Math.floor((Math.random() * 30) + 1)+"px "+borderstyle[Math.floor(Math.random() * borderstyle.length)]+" "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; font-size:"+Math.floor((Math.random() * 30) + 1)+"!important; font-family:'"+families[Math.floor(Math.random() * families.length)]+"'!important"+"; background: "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; padding:"+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important; margin: "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important;",0);
		
		addCSSRule(sheet,"li","color:"+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; border:"+Math.floor((Math.random() * 30) + 1)+"px "+borderstyle[Math.floor(Math.random() * borderstyle.length)]+" "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; font-size:"+Math.floor((Math.random() * 30) + 1)+"!important; font-family:'"+families[Math.floor(Math.random() * families.length)]+"'!important"+"; background: "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; padding:"+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important; margin: "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important;",0);
		
		addCSSRule(sheet,"body","color:"+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; border:"+Math.floor((Math.random() * 30) + 1)+"px "+borderstyle[Math.floor(Math.random() * borderstyle.length)]+" "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; font-size:"+Math.floor((Math.random() * 30) + 1)+"!important; font-family:'"+families[Math.floor(Math.random() * families.length)]+"'!important"+"; background: "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; padding:"+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important; margin: "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important;",0);
		
		addCSSRule(sheet,"header div","color:"+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; border:"+Math.floor((Math.random() * 30) + 1)+"px "+borderstyle[Math.floor(Math.random() * borderstyle.length)]+" "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; font-size:"+Math.floor((Math.random() * 30) + 1)+"!important; font-family:'"+families[Math.floor(Math.random() * families.length)]+"'!important"+"; background: "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; padding:"+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important; margin: "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important;",0);
		
		addCSSRule(sheet,"header","color:"+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; border:"+Math.floor((Math.random() * 30) + 1)+"px "+borderstyle[Math.floor(Math.random() * borderstyle.length)]+" "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; font-size:"+Math.floor((Math.random() * 30) + 1)+"!important; font-family:'"+families[Math.floor(Math.random() * families.length)]+"'!important"+"; background: "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; padding:"+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important; margin: "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important;",0);
		
		addCSSRule(sheet,"footer div","color:"+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; border:"+Math.floor((Math.random() * 30) + 1)+"px "+borderstyle[Math.floor(Math.random() * borderstyle.length)]+" "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; font-size:"+Math.floor((Math.random() * 30) + 1)+"!important; font-family:'"+families[Math.floor(Math.random() * families.length)]+"'!important"+"; background: "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; padding:"+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important; margin: "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important;",0);
		
		addCSSRule(sheet,"footer","color:"+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; border:"+Math.floor((Math.random() * 30) + 1)+"px "+borderstyle[Math.floor(Math.random() * borderstyle.length)]+" "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; font-size:"+Math.floor((Math.random() * 30) + 1)+"!important; font-family:'"+families[Math.floor(Math.random() * families.length)]+"'!important"+"; background: "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; padding:"+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important; margin: "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important;",0);
		
		addCSSRule(sheet,"#content div","color:"+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; border:"+Math.floor((Math.random() * 30) + 1)+"px "+borderstyle[Math.floor(Math.random() * borderstyle.length)]+" "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; font-size:"+Math.floor((Math.random() * 30) + 1)+"!important; font-family:'"+families[Math.floor(Math.random() * families.length)]+"'!important"+"; background: "+'#'+Math.floor(Math.random()*16777215).toString(16)+"!important; padding:"+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important; margin: "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px "+Math.floor((Math.random() *50) + 1)+"px !important;",0);
		
		
		
    });
});
function addCSSRule(sheet, selector, rules, index) {
	if("insertRule" in sheet) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else if("addRule" in sheet) {
		sheet.addRule(selector, rules, index);
	}
}