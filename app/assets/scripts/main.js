$(document).ready(function() {
    //pull out titles from screenCarousel objects and put in id for markup
    document.getElementById("leftTitle").innerHTML = screenCarousel[0].imgTitle;
    document.getElementById("middleTitle").innerHTML = screenCarousel[1].imgTitle;
    document.getElementById("rightTitle").innerHTML = screenCarousel[2].imgTitle;

                          //Control Slideshow to the Right

    $( ".right, #rightTitle" ).mouseup(function(e) {
        $("#rightPlacement").css("-webkit-animation","none");  //turns off opening animation of hands
        $("#rightPlacement").css("-moz-animation","none");  //turns off opening animation of hands
        $(".cloudExplain").css("-webkit-animation","none");  //turns off opening animation of cloud
        $(".cloudExplain").css("-moz-animation","none");  //turns off opening animation of cloud

        $(".rightFlick").show();               //control snapping fingers
        setTimeout(function() {
            $(".rightFlick").hide();
        },175);

        $(".right").hide();
        setTimeout(function() {
            $(".right").show();
        },175);                                 //end snapping fingers

                                                //control appear/disappear of thought cloud
        $(".cloudRight").hide();
        setTimeout(function() {
            $(".cloudRight").fadeIn(1000);
        },500);
                                                //end appear/disappear of thought cloud

                                                //if else helps determine the order of objects being pulled from array
            if(($(window.lastClickedElement).attr('class')) == "left"){  //if yes, it means you just clicked left hand before right

                var active = screenCarousel.pop();                 //pops off the last object in screenCarousel and makes it active
                screenCarousel.unshift(active)
                var active = screenCarousel.pop();                //second shift so that it gets the correctly ordered object from array

                                                 //pull out info from active screenCarousel object
                document.getElementById('imageActive').src = active.imgSrc;
                                                //controls putting css3 transition animation on image
                document.getElementById('imageActive').className = "";
                setTimeout(function() {
                    var delayImage = document.getElementById('imageActive').className = "activeR";
                    delayImage;
                },1);

                document.getElementById("middleTitle").innerHTML = active.imgTitle;
                document.getElementById("cloudTitle").innerHTML = active.imgTitle;
                document.getElementById("leftTitle").innerHTML = screenCarousel[0].imgTitle;
                document.getElementById("rightTitle").innerHTML = screenCarousel[1].imgTitle;
                document.getElementById("cloudDescription").innerHTML = active.imgDesc;
                document.getElementById("cloud").style.top=active.imgPosTop;
                document.getElementById("cloud").style.left=active.imgPosLeft;

                                        //put active screenCarousel object at the end beginning of the array
                screenCarousel.unshift(active)
            }

            else{                          //else yes, it means you did not click left hand before right

                var active = screenCarousel.pop();                  //pops off the last object in screenCarousel and makes it active
                                       //pull out info from screenCarousel array and integrates into markup
                document.getElementById('imageActive').src = active.imgSrc;
                document.getElementById("cloudDescription").innerHTML = active.imgDesc;
                document.getElementById("cloud").style.top=active.imgPosTop;
                document.getElementById("cloud").style.left=active.imgPosLeft;
                document.getElementById("cloudTitle").innerHTML = active.imgTitle;

                                        //Adds Removes active class for css transitions main image
                document.getElementById('imageActive').className = "";
                setTimeout(function() {
                    var delayImage = document.getElementById('imageActive').className = "activeR";
                    delayImage;
                },1);

                                    //Adds Removes active class for css transitions middleTitle
                document.getElementById("middleTitle").innerHTML = active.imgTitle;
                document.getElementById('middleTitle').className = "";
                setTimeout(function() {
                    var delayMTitle = document.getElementById('middleTitle').className = "active";
                    delayMTitle;
                },130);

                                     //Adds Removes active class for css transitions leftTitle
                document.getElementById("leftTitle").innerHTML = screenCarousel[0].imgTitle;
                document.getElementById('leftTitle').className = "";
                setTimeout(function() {
                    var delayMTitle = document.getElementById('leftTitle').className = "active";
                    delayMTitle;

                },130);

                                    //Adds Removes active class for css transitions rightTitle
                document.getElementById("rightTitle").innerHTML = screenCarousel[1].imgTitle;
                document.getElementById('rightTitle').className = "";
                setTimeout(function() {
                    var delayMTitle = document.getElementById('rightTitle').className = "active";
                    delayMTitle;
                },130);

                                        //put active screenCarousel object at the beginning of the array
                screenCarousel.unshift(active)
            }
                                        //this event helps to keep track of which hand was last clicked
            e = e || event;
            $.lastClicked = e.target || e.srcElement;
            var lastClickedElement = $.lastClicked;
            window.lastClickedElement=lastClickedElement;

    })     ;                                     //end right direction controller

                //The following is exactly the same as above, with only changes to direction, pop (shift), unshift (shift) etc.

    $( ".left,#leftTitle" ).mouseup(function(e) {        //Left Click

        $("#leftPlacement").css("-webkit-animation","none");  //turns off opening animation of hands
        $("#leftPlacement").css("-moz-animation","none");  //turns off opening animation of hands
        $(".cloudExplain").css("-webkit-animation","none");  //turns off opening animation of cloud
        $(".cloudExplain").css("-moz-animation","none");  //turns off opening animation of cloud

        $(".leftFlick").show();             //control snapping fingers
        setTimeout(function() {
            $(".leftFlick").hide();
        },175);
        $(".left").hide();
        setTimeout(function() {
            $(".left").show();
        },175);
                                            //end snapping fingers
                                            //control appear/disappear of thought cloud
        $(".cloudRight").hide();
        setTimeout(function() {
            $(".cloudRight").fadeIn(1000);
        },500);
                                            //end appear/disappear of thought cloud

                               //if else helps determine the order of objects being pulled from array
            if(($(window.lastClickedElement).attr('class')) == "right"){   //if yes, it means you just clicked right hand before left

                var active = screenCarousel.shift();         //shifts off the first object in screenCarousel and makes it active
                screenCarousel.push(active)
                var active = screenCarousel.shift();         //second shift so that it gets the correctly ordered object from array


                                                             //pull out info from active object and put in id for markup
                document.getElementById('imageActive').src = active.imgSrc; //active image

                                                             //controls putting css3 transition animation on image
                document.getElementById('imageActive').className = "";
                setTimeout(function() {
                    var delayImage = document.getElementById('imageActive').className = "activeL";
                    delayImage;
                },175);

                                                              //pull out info from screenCarousel array and integrates into markup

                document.getElementById("cloudTitle").innerHTML = active.imgTitle;
                document.getElementById("middleTitle").innerHTML = active.imgTitle;  //active title
                document.getElementById("leftTitle").innerHTML = screenCarousel[0].imgTitle; //left Title
                document.getElementById("rightTitle").innerHTML = screenCarousel[1].imgTitle; //right Title
                document.getElementById("cloudDescription").innerHTML = active.imgDesc; //Active Description
                document.getElementById("cloud").style.top=active.imgPosTop;     //Cloud positioning
                document.getElementById("cloud").style.left=active.imgPosLeft;   //Description positioning

                                                            //put active object at the end of the array
                screenCarousel.push(active)

            }
            else{                           //else yes, it means you did not click right hand before left

                var active = screenCarousel.shift();        //shifts off the first object in screenCarousel and makes it active

                                            //pulls out info from JSON file for Markup
                document.getElementById('imageActive').src = active.imgSrc;
                document.getElementById("cloudDescription").innerHTML = active.imgDesc;
                document.getElementById("cloud").style.top=active.imgPosTop;
                document.getElementById("cloud").style.left=active.imgPosLeft;
                document.getElementById("cloudTitle").innerHTML = active.imgTitle;

                                            //Adds Removes active class for css transitions main image
                document.getElementById('imageActive').className = "";
                setTimeout(function() {
                    var delayImage = document.getElementById('imageActive').className = "activeL";
                    delayImage;
                },1);

                                            //Adds Removes active class for css transitions middleTitle
                document.getElementById("middleTitle").innerHTML = active.imgTitle;
                document.getElementById('middleTitle').className = "";
                setTimeout(function() {
                    var delayMTitle = document.getElementById('middleTitle').className = "active";
                    delayMTitle;
                },175);


                                             //Adds Removes active class for css transitions leftTitle
                document.getElementById("leftTitle").innerHTML = screenCarousel[0].imgTitle;
                document.getElementById('leftTitle').className = "";
                setTimeout(function() {
                    var delayMTitle = document.getElementById('leftTitle').className = "active";
                    delayMTitle;

                },175);

                                            //Adds Removes active class for css transitions rightTitle
                document.getElementById("rightTitle").innerHTML = screenCarousel[1].imgTitle;
                document.getElementById('rightTitle').className = "";
                setTimeout(function() {
                    var delayMTitle = document.getElementById('rightTitle').className = "active";
                    delayMTitle;
                },175);

                                             //put active object at the end of the array
                screenCarousel.push(active)
            }                              //end else

                                 //this event helps to keep track of which hand was last clicked
        e = e || event;
        $.lastClicked = e.target || e.srcElement;
        var lastClickedElement = $.lastClicked;
        window.lastClickedElement=lastClickedElement;

    });                     //end left hand



});                                     //end document ready






//this following code creates variables I can then call in my HTML
//    document.getElementById('imageOne').src = screenCarousel[0].imgSrc;
//    document.getElementById('imageTwo').src = screenCarousel[1].imgSrc;
//    document.getElementById('imageThree').src = screenCarousel[2].imgSrc;

//


//        });


//    $( ".right" ).click(function() {
//        $(".rightFlick").show();
//            setTimeout(function() {
//                $(".rightFlick").hide();
//                        },175);
//
//        $(".right").hide();
//        setTimeout(function() {
//            $(".right").show();
//        },175);
//        $("#imageOne, #imageTwo").hide()
//
//        $("#imageThree").show()
//
//
//    });
//    $( ".left" ).click(function() {
//        $(".leftFlick").show();
//        setTimeout(function() {
//            $(".leftFlick").hide();
//        },175);
//        $(".left").hide();
//        setTimeout(function() {
//            $(".left").show();
//        },175);
//        $("#imageTwo, #imageThree").hide()
//        $("#imageOne").show()
//
//
//
//    });




//$( ".right" ).click(function(e) {
//    //control snapping fingers
//    $(".rightFlick").show();
//    setTimeout(function() {
//        $(".rightFlick").hide();
//    },175);
//
//    $(".right").hide();
//    setTimeout(function() {
//        $(".right").show();
//    },175);
//    //end snapping fingers
//    //keep track if the right hand has been flicked
//    e = e || event;
//    $.lastClicked = e.target || e.srcElement;
//    var lastClickedElement = $.lastClicked;
//    window.lastClickedElement=lastClickedElement;
//    console.log(window.lastMousedownElement);
//    //end right hand has been flicked
//    //make the current [0] object in array the active object
//    var activeRight = screenCarousel.shift();
//    //pull out info from active object
//    document.getElementById('imageActive').src = activeRight.imgSrc;
//    console.log(activeRight.imgSrc);
//    //put active object at the end of the array
//    screenCarousel.push(activeRight)
//    console.log(screenCarousel);
//})                                      //end right Click
//
//
//
//$( ".left" ).click(function(e) {
//    //control snapping fingers
//    $(".leftFlick").show();
//    setTimeout(function() {
//        $(".leftFlick").hide();
//    },175);
//    $(".left").hide();
//    setTimeout(function() {
//        $(".left").show();
//    },175);
//    //end snapping fingers
//    //keep track if the right hand has been flicked
//    e = e || event;
//    $.lastMousedown = e.target || e.srcElement;
//
//    var lastMousedownElement = $.lastMousedown;
//    window.lastMousedownElement=lastMousedownElement;
//
//
//    console.log(window.lastClickedElement);
//
//    if($(".slider").attr){console.log("yoyo")}
//
//    //pull out info from active object
//    var activeLeft = screenCarousel.pop();
//    document.getElementById('imageActive').src = activeLeft.imgSrc;
//
//    console.log(activeLeft.imgSrc);
//
//    //puts active object at the end of the array
//    screenCarousel.unshift(activeLeft)
//    console.log(screenCarousel);
//
//})
