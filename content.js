// Automatically skip YouTube ads
setInterval(function() {  
  const skipBtn = document.getElementsByClassName("ytp-skip-ad-button");  
  if (skipBtn.length > 0) {  
    console.log("Ad detected, clicking skip button...");  
    skipBtn[0].click();  
  } else {  
    console.log("No ad detected.");  
  }  
}, 3000);

// Generate Disposal Email
document.getElementById('generate-email').addEventListener('click', generateDisposableEmail);

function generateDisposableEmail() {
  fetch('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1')
    .then(response => response.json())
    .then(data => {
      alert(`Your disposable email is: ${data[0]}`);
    });
}