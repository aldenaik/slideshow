$(document).ready(function() {


//    JSON.parse(screenCarousel);
//    alert(screenCarousel.count);


//
//    document.getElementById("placeholder").innerHTML=screenCarousel[0];
//    console.log(placeholder);




//    function load() {
//        var mydata = JSON.parse(carouselData);
//        console.log(mydata[0])    }


        $.getJSON("../scripts/carouselData.js", function(screenCarousel) {
            console.log(screenCarousel);
            // data is a JavaScript object now. Handle it as such

        });


//        var url = '../scripts/carouselData.js';
//
//        $.get(url, function (data) {
//            // can use 'data' in here...
//                        console.log(data);
//
//        });




})