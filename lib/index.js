import scrapeIt from "scrape-it";

/**
 * macedonianSdaHymnal
 * Scrapes the Macedonian SDA Hymnal website for a given song number and returns the song data.
 * The returned data includes the song number, title, verses, and refrain (if any).
 * 
 * @name macedonianSdaHymnal
 * @function
 * @param {number} songNumber - The number of the song to scrape.
 * @returns {Promise<{songNumber: number, title: string, verses: string[][], refrain?: string[]}>} - The scraped song data.
 */
export default async function macedonianSdaHymnal(songNumber) {
    const { data } = await scrapeIt(`https://www.hristijanskipesni.com/%D0%9F%D0%B5%D1%81%D0%BD%D0%B0?no=${songNumber}`, {
        songNumber: {
            selector: ".wedding-heading h2 span.color",
            convert: x => parseInt(x, 10),
        },
        title: {
            selector: ".block-heading-four .wedding-heading h3 strong",
        },
        verses: {
            listItem: ".block-heading-five h3",
            data: {
                content: {
                    how: "html",
                    convert: (x, $c) => {
                        return {
                            lines: x.replace(/<br>/g, "\n").trim().split("\n").map(line => line.trim()).filter(line => line.length > 0),
                            refrain: $c.css("font-style") === "italic",
                        };
                    }
                }
            }
        },
    });

    return data;
}


//<div class="content">
            


//<div class="wedding-heading align-center">
    //<span class="float-left">
        //<a href="/%D0%9F%D0%B5%D1%81%D0%BD%D0%B0?no=1" class="btn btn-xs square-3 btn-lblue rounded-2 bgcolor white fontsize1">–</a>
    //</span>
    //<span class="float-right">
        //<a href="/%D0%9F%D0%B5%D1%81%D0%BD%D0%B0?no=2" class="btn btn-xs square-3 btn-lblue rounded-2 bgcolor white fontsize1">+</a>
    //</span>
    //<h2><span class="color">1</span></h2>
    //<br style="clear:both;">
    //<img src="img/wedding/crown-up.png" class="img-responsive" alt="---">
//</div>
//<div class="block-heading-four">
        //<div class="wedding-heading">
            //<h3><strong style="color:#666">Дојдете пред Творецот</strong></h3>
        //</div>
//</div>


    //<div class="block-heading-three">
         //<h3 style="font-style: normal">
             //1
             
         //</h3>
    //</div>
    //<div class="block-heading-five">
        //<h3 style="font-style: normal">
            //О, дојдете пред Творецот<br>И славете го с песни, пој,<br>Тој ни е Бог и Господ наш<br>Од века и во векови.
            


        //</h3>
    //</div>
    //<div class="block-heading-three">
         //<h3 style="font-style: normal">
             //2
             
         //</h3>
    //</div>
    //<div class="block-heading-five">
        //<h3 style="font-style: normal">
            //О, пејте му на Творецот,<br>Од љубов Тој нè створи нас,<br>Тој нам ни даде видело<br>И блажен мир и вечен спас.
            


        //</h3>
    //</div>
    //<div class="block-heading-three">
         //<h3 style="font-style: normal">
             //3
             
         //</h3>
    //</div>
    //<div class="block-heading-five">
        //<h3 style="font-style: normal">
            //И негов народ ние сме,<br>Гревојте ни ги прости Тој,<br>Сегде нека се ори пој<br>За дарот негов милоста.
            


        //</h3>
    //</div>





//<div class="wedding-heading">
    //<img src="img/wedding/crown-down.png" alt="" class="img-responsive">    
    //<span style="display: none;">
        //© Оваа песна е заштитена со авторско право.
    //</span>
//</div>


//<div id="popOpeningHymn_PW-1" class="dxpcLite_Moderno dxpclW" style="width:200px;z-index:10000;display:none;visibility:hidden;">
	//<div class="dxpc-mainDiv dxpc-shadow">
		//<div class="dxpc-header drag" style="-webkit-user-select:none;" id="popOpeningHymn_PWH-1">
			//<div class="dxpc-headerContent">
				//<img class="dxpc-headerImg dx-vam dxIcon_scheduling_recurrence_16x16" src="/DXR.axd?r=1_87-NtSUv" alt="" id="popOpeningHymn_PWH-1I"><span class="dxpc-headerText dx-vam" id="popOpeningHymn_PWH-1T">Отвараме</span>
			//</div><b class="dx-clear"></b>
		//</div><div class="dxpc-contentWrapper">
			//<div class="dxpc-content" id="popOpeningHymn_PWC-1">
				//Ја отвараме песната.<br>Ве молиме почекајте...
			//</div>
		//</div>
	//</div>
//</div><div id="popOpeningHymn_DXPWMB-1" class="dxpcModalBackLite_Moderno" style="z-index:9999;">

//</div><script id="dxss_1215597246" data-executed="true">
//<!--
//ASPx.FillDocumentElementDXThemeCssClassName("Moderno");
//ASPx.createControl(MVCxClientPopupControl,'popOpeningHymn','',{'encodeHtml':false,'popupAnimationType':'fade','allowResize':true,'closeAction':'None','popupHorizontalAlign':'WindowCenter','popupVerticalAlign':'WindowCenter','allowDragging':true,'modal':true});

////-->
//</script>


//<div id="popMessageBox0_PW-1" class="dxpcLite_Moderno dxpclW" style="width:350px;z-index:10000;display:none;visibility:hidden;">
	//<div class="dxpc-mainDiv dxpc-shadow">
		//<div class="dxpc-header drag" style="-webkit-user-select:none;" id="popMessageBox0_PWH-1">
			//<div class="dxpc-headerContent">
				//<span class="dxpc-headerText dx-vam" id="popMessageBox0_PWH-1T">Предупредување!</span>
			//</div><b class="dx-clear"></b>
		//</div><div class="dxpc-contentWrapper">
			//<div class="dxpc-content" id="popMessageBox0_PWC-1">
				
    //<label class="dxeBase_Moderno" id="dxLabelForMessageText" for="MessageText_I">Грешка</label><script id="dxss_339096848" data-executed="true">
//<!--
//ASPx.createControl(MVCxClientLabel,'dxLabelForMessageText','',{'uniqueID':null,'associatedControlName':'MessageText'});

////-->
//</script>


    //<br>
    //<br>
    //<span class="float-right">





    

        //<a href="/%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82" class="btn btn-color">
            //ОК
        //</a>
        //<a href="/" class="btn btn-color">
            //Поништи
        //</a>

  //</span>

			//</div>
		//</div>
	//</div>
//</div><div id="popMessageBox0_DXPWMB-1" class="dxpcModalBackLite_Moderno" style="z-index:9999;">

//</div><script id="dxss_919360629" data-executed="true">
//<!--
//ASPx.createControl(MVCxClientPopupControl,'popMessageBox0','',{'popupAnimationType':'fade','allowResize':true,'closeAction':'None','popupHorizontalAlign':'WindowCenter','popupVerticalAlign':'WindowCenter','allowDragging':true,'modal':true,'width':350,'widthFromServer':true});

////-->
//</script>


        //</div>