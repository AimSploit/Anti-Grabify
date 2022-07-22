let targetUrl = "https://pacsoft.xyz/antigrabify";
let count = 0;
let url = browser.runtime.getURL('popup2.html');
function redirect(requestDetails) {
	if (requestDetails.url === targetUrl) {
		return;
	}
	return {
		redirectUrl: targetUrl
	};   
}


browser.webRequest.onBeforeRequest.addListener(
	redirect, {
		urls: [
           "https://grabify.link/*", "http://grabify.link/*",
           "https://screenshare.pics/*", "http://screenshare.pics/*",
           "https://noodshare.pics/*", "http://noodshare.pics/*",
           "https://cheapcinema.club/*", "http://cheapcinema.club/*",
           "https://shhh.lol/*", "http://shhh.lol/*",
           "https://partpicker.shop/*", "http://partpicker.shop/*",
           "https://sportshub.bar/*", "http://sportshub.bar/*",
           "https://locations.quest/*", "http://locations.quest/*",
           "https://lovebird.guru/*", "http://lovebird.guru/*",
           "https://truelove.guru/*", "http://truelove.guru/*",
           "https://dateing.club/*", "http://dateing.club/*",
           "https://sherkis.life/*", "http://sherkis.life/*",
           "https://headshot.monster/*", "http://headshot.monster/*",
           "https://gaming-at-my.best/*", "http://gaming-at-my.best/*",
           "https://programming.monster/*", "http://programming.monster/*",
           "https://yourmy.monster/*", "http://yourmy.monster/*",
           "https://imageshare.best/*", "http://imageshare.best/*",
           "https://screenshot.best/*", "http://screenshot.best/*",
           "https://gamingfun.me/*", "http://gamingfun.me/*",
           "https://catsnthings.fun/*", "http://catsnthings.fun/*",
           "https://joinmy.site/*", "http://joinmy.site/*",
           "https://fortnitechat.site/*", "http://fortnitechat.site/*",
           "https://fortnight.space/*", "http://fortnight.space/*",
           "https://freegiftcards.co/*", "http://freegiftcards.co/*",
           "https://stopify.co/*", "http://stopify.co/*",
           "https://leancoding.co/*", "http://leancoding.co/*",
           "https://iplogger.org/*", "http://iplogger.org/*",
           "https://iplogger.com/*", "http://iplogger.com/*",
           "https://maper.info/*", "http://maper.info/*",
           "https://iplogger.ru/*", "http://iplogger.ru/*",
           "https://iplogger.co/*", "http://iplogger.co/*",
           "https://2no.co/*", "http://2no.co/*",
           "https://yip.su/*", "http://yip.su/*",
           "https://iplogger.info/*", "http://iplogger.info/*",
           "https://ipgrabber.ru/*", "http://ipgrabber.ru/*",
           "https://ipgraber.ru/*", "http://ipgraber.ru/*",
           "https://iplis.ru/*", "http://iplis.ru/*",
           "https://02ip.ru/*", "http://ezstat.ru/*",
           "https://ps3cfw.com/*", "http://ps3cfw.com/*",
           "https://ythingy.com/*","http://ythingy.com/*",
           "https://www.yȯutube.com/*","http://www.yȯutube.com/*",
           "https://www.gyazo.nl/*", "https://www.gyazo.nl/*",
           "https://www.xn--yutube-iqc.com/*","https://www.xn--yutube-iqc.com/*",
           "https://www.webresolver.nl/*","https://www.webresolver.nl/*",
           "https://roblox.com.lv/*","http://roblox.com.lv/*",
           "https://tracker.iplocation.net/*","http://tracker.iplocation.net/"
          ],
		types: ["main_frame"]
	},
	["blocking"]
);  
