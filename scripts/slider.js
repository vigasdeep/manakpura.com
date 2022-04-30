/* This file is property of Globe Technologies. All Rights Reserved. Developed by Globe Technologies. */

var initDelay = 700				// Initial delay (ms)
var slideSpeed = oldSpeed = 2	// Slider speed (ms)
var topMargin = "295px"			// Top margin in pixels
var timeOut = 35				// Time used for timeout (ms)


/* Add Event Listener */
if ( window.addEventListener )
	window.addEventListener("load", InitSlider, false)
else if ( window.attachEvent )
	window.attachEvent("onload", InitSlider)
else
	window.onload = InitSlider

/* Initialize Slider */
function InitSlider()
{
	sliderContent = document.all ? document.all.contentarea : document.getElementById("contentarea")
	sliderContent.style.top = topMargin
	setTimeout("SliderContentHeight()", initDelay)
}

/* Slide content holder */
function SlideContent()
{
	sliderContent.style.top = parseInt(sliderContent.style.top) - slideSpeed + "px"
	if ( parseInt(sliderContent.style.top) < (contentHeight * (-1)) )
		sliderContent.style.top = topMargin
	setTimeout("SlideContent()", timeOut)
}

/* Gets content height */
function SliderContentHeight()
{
	contentHeight = sliderContent.offsetHeight
	if ( contentHeight > 0 )
		SlideContent()
}