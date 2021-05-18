
    let nseLink="https://www.moneycontrol.com/markets/indian-indices/top-nsecommodities-companies-list/48?classic=true";

    const cheerio=require("cheerio");
    const request=require("request");

    request(nseLink, function(error,response, data){
        processData(data);
    })

    function processData(data)
    {
        let Document=cheerio.load(data);
        let Nifty50=Document("#collapse2 .accordion_list");
        // let allTrs=Document(Nifty50).find("thead tr th");
        console.log(Nifty50);
        // for(let i=0;i<allTrs.length;i++)
        // {

        // }
    }