# bdsmlr-ripping
A guide to ripping bdsmlr blogs

A wrote a tiny script ([prep.js](prep.js)) to expand all additional images and properly load videos for downloading.


Drag this to your hotbar for later use
<a class="bookmarklet" href="javascript:(function()%7Bdocument.querySelectorAll(%22.viewAll%22).forEach(function(c)%7Bc.click()%7D)document.querySelectorAll(%22.vjs-poster%22).forEach(function(c)%7Bc.click()%7D)document.querySelectorAll(%22.vjs-tech%22).forEach(function(c)%7Bc.click()%7D)%7D)()">prep</a>

The steps I follow:

1. Scroll down fully so all of the content
2. Hit the prep bookmarklet
3. Use an image / video downloader (See my reccomendations)

Reccomendations

#### Image downloader: 
https://github.com/hatai/image-downloader (Fork of the more widely used https://github.com/vdsabev/image-downloader)

#### Video downloader:

This is more complicated as it seems that 90% of the video downloaders on the chrome webstore are the same thing, reskinned, but none of those are FOSS.