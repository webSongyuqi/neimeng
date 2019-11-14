$(function () {
    resizeLoad();
    $(window).resize(function(){
        resizeLoad();
    });
    function resizeLoad(){
        //var width = $("body").get(0).offsetWidth;
        var width = $(window).width();

        //var fontSize =30* (width/720).toFixed(2);
        var fontSize =(width/100).toFixed(2);

        //if(width<720)
        //{
        $("html").css("font-size",""+fontSize+"px");
        // }

    }
});
