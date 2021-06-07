    const puppeteer=require("puppeteer");
     require('dotenv').config();
     let instLogin=process.env.InstaLoginId;
     let instaPasswd=process.env.InstaLoginPasswd;
    let link="https://www.instagram.com/";


   async function instaLogin() {
   
    let browser=await puppeteer.launch({headless:false,
        defaultViewport:null,
        args:["--start-maximized"]
    })
    let pages=await browser.pages();
    let tab=await pages[0];
    await tab.goto(link);
    await tab.waitForSelector('[aria-label="Phone number, username, or email"]',{visible:true});
    await tab.type('[aria-label="Phone number, username, or email"]', instLogin);
    await tab.type('[aria-label="Password"]', instaPasswd);
    await tab.click('.sqdOP.L3NKy.y3zKF');
    tab.waitForTimeout(10000);
    await tab.waitForSelector('.cmbtv [type="button"]',{visible:true});
    await tab.click('.cmbtv [type="button"]');
    await tab.waitForSelector('.aOOlW.HoLwm',{ visible:true});
    await tab.click('.aOOlW.HoLwm');
    // await tab.waitForSelector('._7UhW9.PIoXz.qyrsm.KV-D4.uL8Hv',{visible:true});
    // await tab.click('._7UhW9.PIoXz.qyrsm.KV-D4.uL8Hv');
    //selectorsfor suggestion list 
    // let listRecomended=await tab.$$('.Igw0E.rBNOH.eGOV_.ybXk5._4EzTm.XfCBB.HVWg4');
    // await console.log(listRecomended.length);
    // let oneFollow=await listRecomended[0];
    //  await oneFollow.click();
    await tab.waitForSelector(".Igw0E.IwRSH.eGOV_.ybXk5.vwCYk.n4cjz",{visible:true});
//    let prevProfile=await tab.$$(".Igw0E.IwRSH.eGOV_.ybXk5.vwCYk.n4cjz");
//    await console.log(prevProfile.length);
//    tab.waitForTimeout(5000);
   await tab.click(".Igw0E.IwRSH.eGOV_.ybXk5.vwCYk.n4cjz");
   tab.waitForTimeout(4000);
   await tab.waitForSelector(".k9GMp",{visible:true});

   let prefllwr=await tab.$(".k9GMp");
     let fllwr=await prefllwr[prefllwr.length-1];
     await tab.waitForTimeout(5000);
    await tab.click(fllwr);




   };
   instaLogin();
    