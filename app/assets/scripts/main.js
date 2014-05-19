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

//            var screenCarousel = [
//                {
//                    "imgSrc":"http://www.zendesk.com/public/assets/images/p-helpcenter/screen-portal.png",
//                    "imgTitle":"Knowledge Base",
//                    "imgDesc":"Faster answers means happier customers. Deflect costly, repetitive inquiries and drive support efficiencies with a knowledge base. Organize your content—in 40+ languages—so everything is easy to find.",
//                    "imgPosTop":"199px",
//                    "imgPosLeft":"255px"
//                },
//                {
//                    "imgSrc":"http://www.zendesk.com/public/assets/images/p-helpcenter/screen-community.png",
//                    "imgTitle":"Community",
//                    "imgDesc":"Grow deeper roots in your business community by opening a dialogue and building relationships outside of the support ticket. Start a community discussion to gather feedback and crowdsource ideas. Your customers can also post a question and get answers from their peers.",
//                    "imgPosTop":"80px",
//                    "imgPosLeft":"145px"
//                },
//                {
//                    "imgSrc":"http://www.zendesk.com/public/assets/images/p-helpcenter/screen-knowledge-base.png",
//                    "imgTitle":"Customer Portal",
//                    "imgDesc":"Did you know customers actually prefer self-service? Give your customers a single destination for everything they need. One click on My Activities brings up their entire support history. A single search surfaces content from both the knowledge base and community.",
//                    "imgPosTop":"270px",
//                    "imgPosLeft":"450px"
//                }
//            ]


        });


    $( ".right" ).click(function() {
        $(".rightFlick").show();
            setTimeout(function() {
                $(".rightFlick").hide();
                        },225);

        $(".right").hide();
        setTimeout(function() {
            $(".right").show();
        },225);
        setTimeout(function() {
        $(".firstSlide").css('background-image', "url('http://www.zendesk.com/public/assets/images/p-helpcenter/screen-knowledge-base.png')");
        },0);


    });
    $( ".left" ).click(function() {
        $(".leftFlick").show();
        setTimeout(function() {
            $(".leftFlick").hide();
        },225);
        $(".left").hide();
        setTimeout(function() {
            $(".left").show();
        },225);
        $(".firstSlide").css('background-image', "url('http://www.zendesk.com/public/assets/images/p-helpcenter/screen-community.png')");
    });


//        var url = '../scripts/carouselData.js';
//
//        $.get(url, function (data) {
//            // can use 'data' in here...
//                        console.log(data);
//
//        });

})



