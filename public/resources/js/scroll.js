const inf = document.querySelector(".info-icon");
const boxx = document.querySelector(".boxx");

inf.addEventListener("click", () =>{
  boxx.classList.add("active");
});

boxx.addEventListener('click', ()=>{
  boxx.classList.remove('active');
});
let userAgentString = navigator.userAgent;

 // Detect Safari 
    let safariAgent =  
    userAgentString.indexOf("Safari") > -1; 

    // Detect Chrome 
    let chromeAgent =  
    userAgentString.indexOf("Chrome") > -1; 

// Discard Safari since it also matches Chrome 
    if ((chromeAgent) && (safariAgent))  
    safariAgent = false;

    if(safariAgent === true){
  alert("We are not supporting current browser please use other browser");
 }



console.log(safariAgent)





