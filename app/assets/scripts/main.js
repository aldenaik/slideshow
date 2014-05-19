$(document).ready(function() {


//    JSON.parse(screenCarousel);
//    alert(screenCarousel.count);


//
//    document.getElementById("placeholder").innerHTML=screenCarousel[0];
//    console.log(placeholder);




//    function load() {
//        var mydata = JSON.parse(carouselData);
////        console.log(mydata[0])    }
//    $.ajax({
//
//        url: 'https://raw.githubusercontent.com/aldenaik/slideshow/aadevelopment/app/assets/scripts/carouselData.js',
//        type: 'GET',
////        crossDomain: true,
//        dataType: 'json',
//        success: function() { alert("Success"); },
//        error: function() { alert('Failed!'); },
////        beforeSend: "https://render.githubusercontent.com"
//    });


//    function requestJSON(url, callback) {
//        $.ajax({
//            url: "https://raw.githubusercontent.com/aldenaik/slideshow/aadevelopment/app/assets/scripts/carouselData.js",
//            complete: function(xhr) {
//                callback.call(null, xhr.responseJSON);
//            }
//        });
//    }



        $.getJSON("https://raw.githubusercontent.com/aldenaik/slideshow/aadevelopment/app/assets/scripts/carouselData.js", function(data) {   //inside the function and the console.log I have also tried inserting screenCarousel
            console.log(data);

        });


//        var url = '../scripts/carouselData.js';
//
//        $.get(url, function (data) {
//            // can use 'data' in here...
//                        console.log(data);
//
//        });




})