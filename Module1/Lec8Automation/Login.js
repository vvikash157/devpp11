    const puppeteer=require("puppeteer");
    let browserpromise=puppeteer.launch({headless:false});
    // puppeteer has promisfied functions

    // by default headless = true
    console.log(browserpromise);
    // browserpromise.then(function(browser){
    //     console.log("browser is opened");
    //     return browser.pages();
    // })
    // .then(function(pages){
    //     let tab=pages[0];
    //     return tab.goto("https://www.google.com");
    // })
    // .then(function(){
    //     console.log("we are on google homePage");
    // })
