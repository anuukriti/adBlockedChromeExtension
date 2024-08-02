// Function to clear cookies  
function clearCookies() {  
  chrome.cookies.getAll({}, function(cookies) {  
    for (let cookie of cookies) {  
      const url = `http${cookie.secure ? 's' : ''}://${cookie.domain}${cookie.path}`;  
      chrome.cookies.remove({ url: url, name: cookie.name }, function(details) {  
        if (details) {  
          console.log(`Cookie cleared: ${cookie.name}`);  
        } else {  
          console.log(`Failed to clear cookie: ${cookie.name}`);  
        }  
      });  
    }  
    console.log("All cookies cleared.");  
  });  
}  

// Clear cookies every hour  
setInterval(clearCookies, 60 * 60 * 1000); // 1 hour interval  

// Clear cookies when the extension is installed  
chrome.runtime.onInstalled.addListener(function() {  
  clearCookies();  
});
