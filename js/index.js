$.noConflict();
const jQ = jQuery;
const bigbox_brickConstQty = 9;
const bigbox_brickColorTables = ["#A5A9B4", "#A0A5A9", "#635F61", "#6C6E68", "#9BA19D", "#D4D5C9", "#958A73", "#E0E0E0", "#D9D9D9"];
const bigbox_brickColorTabless = ["#B67B50", "#FBE890", "#FCB76D", "#f5cd2f", "#f0d588", "#F8BB3D", "#FA9C1C", "#FECCCF", "#FEBABD"]
const bigbox_brickColorTablesss = ["#B67B50", "#B67B50", "#B67B50", "#f5cd2f", "#f5cd2f", "#f5cd2f", "#FA9C1C", "#FA9C1C", "#FA9C1C"];
const bigbox_brickColorTable = ["#FCFCFC", "#FCFCFC", "#FCFCFC", "#F2F3F2", "#F2F3F2", "#F2F3F2", "#f7f9f8", "#f7f9f8", "#f7f9f8"];
const musicPlay01_url = "./res/music/Internet Cafe.mp3"
const musicPlay01 = new Audio(musicPlay01_url);
const musicPlay02_url = "./res/music/imgood.mp3"
const musicPlay02 = new Audio(musicPlay02_url);
const musicPlay03_url = "./res/music/001.mp3"
const musicPlay03 = new Audio(musicPlay03_url);
const musicPlay04_url = "./res/music/002.mp3"
const musicPlay04 = new Audio(musicPlay04_url);

const sePlay01_url = "./res/se/SE_book.mp3"
const sePlay01 = new Audio(sePlay01_url);

const sePlay03_url = "./res/se/SE_Zip.mp3"
const sePlay03 = new Audio(sePlay03_url);

var musicPlay = -1;
jQ(document).ready(function () {
    if (true) {
        let bigboxWidth = jQ('#bigbox').width();
        let bigboxHeight = jQ('#bigbox').height();
        let bigbox_brickWidth = 1 / bigbox_brickConstQty; //0.0625
        let bigbox_brickHeight = ((bigboxWidth * bigbox_brickWidth) / 4) * 3
        let bigbox_brickQty = Math.floor(bigboxHeight / bigbox_brickHeight)

        for (let i = 1; i <= bigbox_brickQty; i++) {
            if (i % 2 == 1) {//odd
                for (let o = 1; o <= bigbox_brickConstQty; o++) {
                    let tempNum = anyway02_RandNumberXYZ(0, 8, 10);

                    let tempText = `<div class='bigbox_brick bigbox_brick_normal bigbox_brick_odd' style='background-color:${bigbox_brickColorTable[tempNum]}'></div>`
                    jQ('#bigbox').prepend(tempText)
                }
            } else {//even
                for (let o = 1; o <= (bigbox_brickConstQty + 1); o++) {
                    let tempText = "";
                    let tempNum = anyway02_RandNumberXYZ(0, 8, 10);
                    if (o == 1 || o == bigbox_brickConstQty + 1) {
                        tempText = `<div class='bigbox_brick bigbox_brick_half bigbox_brick_even' style='background-color:${bigbox_brickColorTable[tempNum]}'></div>`
                    } else {
                        tempText = `<div class='bigbox_brick bigbox_brick_normal bigbox_brick_even' style='background-color:${bigbox_brickColorTable[tempNum]}'></div>`
                    }
                    jQ('#bigbox').prepend(tempText)
                }
            }
        }
        jQ('.bigbox_brick_normal').css({
            width: `${100 / bigbox_brickConstQty}%`,

        })
        jQ('.bigbox_brick_half').css({
            width: `${(100 / bigbox_brickConstQty) / 2}%`,

        })
    }
    const initialHeadPosition = jQ('#consolebox-bar-body-head').position();
    const initialStringTipPosition = jQ('#lightBox_String_tip').position();
    const initialCraneBoxPosition = jQ('#crane-box').position();
    const initialCraneBottomPosition = jQ('#crane-hand-bottom-bottom').position();
    const initialvolumButtonPosition = jQ('#lightBeam_musicOption_volum_button').position();
    var areaMouseInConsoleBoxHead = false;
    var areaMouseInLightString = false;
    var locationOfLightString;

    jQ('#consolebox-bar-body-head').on('mousedown', function () {
        // Handle mouseenter event
        areaMouseInConsoleBoxHead = true;
        jQ('#consolebox-bar-body-head').draggable({

            containment: "#consolebox-bar-body-head-area",
            drag: function (event, ui) {
                var position = ui.position;
                var leftPercentage = (position.left / jQ('#bigbox').width()) * 100;
                //33 middle
                var topPercentage = (position.top / jQ('#bigbox').height()) * 100;

                jQ('#consolebox-bar-body').css({
                    clipPath: `polygon(${leftPercentage + 1}% ${topPercentage + 1}%, ${leftPercentage + 1 + 2}% ${topPercentage + 1}%, 36% 56%, 34% 56%)`

                });


            }
        })
    }).on('mouseout', function () {
        jQ('#consolebox-bar-body-head').css({
            top: `${initialHeadPosition.top}px`,
            left: `${initialHeadPosition.left}px`
        });
        jQ('#consolebox-bar-body').css({
            clipPath: `polygon(34% 50%, 36% 50%, 36% 56%, 36% 56%, 34% 56%)`
        });

    }).on('mouseup', function () {
        jQ('#consolebox-bar-body-head').css({
            top: `${initialHeadPosition.top}px`,
            left: `${initialHeadPosition.left}px`
        });
        jQ('#consolebox-bar-body').css({
            clipPath: `polygon(34% 50%, 36% 50%, 36% 56%, 36% 56%, 34% 56%)`
        });

    });
    jQ('#lightBox_String_tip').on('mousedown', function () {
        // Handle mouseenter event
        areaMouseInLightString = true;

        jQ('#lightBox_String_tip').draggable({

            containment: "#lightBox_String",
            drag: function (event, ui) {
                var position = ui.position;
                var leftPercentage = (position.left / jQ('#lightBox').width()) * 100;
                var topPercentage = (position.top / jQ('#lightBox').height()) * 100;
                locationOfLightString = topPercentage;
                jQ('#lightBox_String').css({
                    clipPath: `polygon(0% 0%, 100% 7%,${100}% ${topPercentage + 5}%, ${0}% ${topPercentage + 5}%)`

                });
                sePlay03.volume = 0.5;
                sePlay03.loop = true;
                sePlay03.play();

            }
        })
    });
    jQ('#lightBox.lightBox_off').on('click', function () {
        jQ('#lightBox_String_tip').css({
            top: `${initialStringTipPosition.top}px`,
            left: `${initialStringTipPosition.left}px`
        });
    })


    jQ(document).on('mouseup', function () {
        if (areaMouseInConsoleBoxHead) {
            jQ('#consolebox-bar-body-head').css({
                top: `${initialHeadPosition.top}px`,
                left: `${initialHeadPosition.left}px`
            });
            jQ('#consolebox-bar-body').css({
                clipPath: `polygon(34% 50%, 36% 50%, 36% 56%, 36% 56%, 34% 56%)`
            });
            jQ('#insertCoin').fadeIn(300);
            jQ('#insertCoin').fadeOut(800);

            areaMouseInConsoleBoxHead = false;
        };
        if (areaMouseInLightString) {
            sePlay03.pause();
            if (locationOfLightString > 50) {
                sePlay03.pause();
                sePlay01.play();
                jQ('#lightBox.lightBox_off').addClass("light_Acchonburike");
                setTimeout(function () {
                    jQ('#lightBox.lightBox_off').css({
                        backgroundImage: `url('./css/img/light/popper_empty.png')`,
                        top: `-10%`,
                        transform: `rotate(135deg)`

                    });
                    const ipAddress = jQ('#inputA').val()+"."+jQ('#inputB').val()+"."+jQ('#inputC').val()+"."+jQ('#inputD').val();
                    sessionStorage.setItem('ipA',ipAddress);
                    setTimeout(function () {
                        jQ(this).toggleClass('lightBox_on');
                        jQ(this).toggleClass('lightBox_off');
                        jQ("#inputBox").removeClass('lightBox_off');
                        jQ("#lightBeam_cover").toggleClass('lightBox_on');
                        jQ("#lightBeam_cover").toggleClass('lightBox_off');
                        jQ("#lightBeam_body").toggleClass('lightBox_on');
                        jQ("#lightBeam_body").toggleClass('lightBox_off');
                        jQ("#lightBeam_bottom").toggleClass('lightBox_on');
                        jQ("#lightBeam_bottom").toggleClass('lightBox_off');
                        jQ("#lightBeam_bottom_shadow").toggleClass('lightBox_on');
                        jQ("#lightBeam_bottom_shadow").toggleClass('lightBox_off');
                        jQ("#lightBeam_animateOption").toggleClass('lightBox_on');
                        jQ("#lightBeam_animateOption").toggleClass('lightBox_off');
                        jQ("#lightBeam_musicOption").toggleClass('lightBox_on');
                        jQ("#lightBeam_musicOption").toggleClass('lightBox_off');
                        jQ('#scrawlMachine').toggleClass('scrawlMachine_off');
                        jQ('#scrawlMachine').toggleClass('scrawlMachine_on');
                        jQ("#lightBeam_musicOptionBack").toggleClass('lightBox_on');
                        jQ("#lightBeam_musicOptionBack").toggleClass('lightBox_off');
                        jQ("#lightBeam_animateOptionBack").toggleClass('lightBox_on');
                        jQ("#lightBeam_animateOptionBack").toggleClass('lightBox_off');
                        setTimeout(function () {
                            jQ('#lightBeam_bottom_shadow.lightBox_on').css({
                                backgroundColor: `#4141419a`
                            })
                        }, 500)
                    }, 2500);
                }, 1000);
                jQ('#lightBox_String_tip').css({
                    top: `${initialStringTipPosition.top}px`,
                    left: `${initialStringTipPosition.left}px`
                });

                jQ('#lightBox.lightBox_on').css({
                    backgroundImage: `url('./css/img/light/popper_empty.png')`,
                    top: `-10%`,
                    transform: `rotate(135deg)`
                });


            }
            jQ('#lightBox_String_tip').css({
                top: `${initialStringTipPosition.top}px`,
                left: `${initialStringTipPosition.left}px`
            });
            jQ('#lightBox_String').css({
                clipPath: `polygon(0% 0%, 100% 7%, 100% 18%, 0% 18%)`
            });
            areaMouseInLightString = false;
        }
    })








    // jQ(document).on('mousehover', '#consolebox-bar-body-head-area', function () {
    //     areaMouseIn = true;
    // });

    // jQ(document).on('mouseleave', '#consolebox-bar-body-head-area', function () {
    //     jQ('#consolebox-bar-body-head').css({
    //         top: `${initialHeadPosition.top}px`,
    //         left: `${initialHeadPosition.left}px`

    //     })
    //     jQ('#consolebox-bar-body').css({
    //         clipPath: `polygon(34% 50%, 36% 50%, 36% 56%, 36% 56%, 34% 56%)`

    //     })
    // });
    jQ('#lightBeam_musicOption_volum_button').draggable({

        containment: "#lightBeam_musicOption_volum_bar",
        drag: function (event, ui) {
            var position = ui.position;
            var leftPercentage = (position.left / jQ('#lightBeam_musicOption_volum').width()) * 100;
            //33 middle
            var topPercentage = (position.top / jQ('#lightBeam_musicOption_volum').height()) * 100;
            console.log(leftPercentage)

            musicPlay03.volume = (Math.abs(leftPercentage) / 83);
            musicPlay04.volume = (Math.abs(leftPercentage) / 83);
            jQ('#lightBeam_musicOption_volum_bar').css({
                clipPath: `polygon(0% 0%, ${leftPercentage + 8}% 0%, ${leftPercentage + 8}% 100%, 0% 100%`

            });


        }
    });
    jQ('.inputBoxClass').on('focus', function () {
        if (jQ(this).val() === "000") {
            jQ(this).val("");
        }
    })
    jQ('.inputBoxClass').on('blur', function () {
        if (jQ(this).val() == "") {
            jQ(this).val("0");
        }
    })
    
    jQ('.inputBoxClass').on('input', function () {

        var maxLength = parseInt(jQ(this).attr('maxlength'));
        var currentLength = jQ(this).val().length;

        // If the character count reaches the limit, focus on the next input
        if (currentLength === maxLength) {
            jQ(this).next('.inputBoxClass').focus();
        }

        // Set the default value to "000" if the input is empty
        if (jQ(this).val() == "") {
            jQ(this).val("0");
        }
    });
    jQ('.inputBoxClass').on('keydown', function (e) {
        if (e.which === 9) { // Tab key
            
            
            if(jQ(this).hasClass('inputBoxClass_last')){
                jQ(this).blur();
            }else{jQ(this).next('.inputBoxClass').focus();}
            
            
            e.preventDefault();
        }
    });

})

jQ(document).on('click', '#coinslot-hole', function () {
    console.log("test")
});

jQ(document).on('mousedown', '.consolebox-button', function () {
    jQ('#consolebox-button-body').css({
        clipPath: `polygon(62.5% 56.5%, 67.5% 56.5%, 67.5% 57%, 62.5% 57%)`

    })
    jQ('#consolebox-button-head').css({
        clipPath: `ellipse(2.5% 0.5% at 65% 56.5%)`

    });
    jQ('#crane-body').css({
        clipPath: `polygon(21% 5%, 22% 5%, 22% 37%, 21% 37%)`

    });
    jQ('#crane-hand-top').css({
        clipPath: `circle(3% at 21.5% 37%)`

    });
    jQ('#crane-hand-bottom').css({
        clipPath: `circle(2% at 21.5% 37%)`

    });
    jQ('#crane-hand-bottom-bottom').css({
        clipPath: `circle(2% at 21.5% 39%)`

    });
    jQ('#insertCoin').fadeIn(300);


}).on('mouseup mouseleave', '.consolebox-button', function () {
    setTimeout(function () {

        jQ('#consolebox-button-body').css({
            clipPath: `polygon(62.5% 55%, 67.5% 55%, 67.5% 57%, 62.5% 57%)`

        });
        jQ('#consolebox-button-head').css({
            clipPath: `ellipse(2.5% 0.5% at 65% 55%)`

        });
        jQ('#crane-body').css({
            clipPath: `polygon(21% 5%, 22% 5%, 22% 25%, 21% 25%)`

        });
        jQ('#crane-hand-top').css({
            clipPath: `circle(3% at 21.5% 25%)`

        });
        jQ('#crane-hand-bottom').css({
            clipPath: `circle(2% at 21.5% 25%)`

        });
        jQ('#crane-hand-bottom-bottom').css({
            clipPath: `circle(2% at 21.5% 27%)`

        });

        jQ('#insertCoin').fadeOut(800);
    }, 200);
});

jQ(document).on("mouseenter", "#animationBox_bubble", function () {
    jQ('.bubble').each(function () {
        jQ(this).removeClass('animating')
    })

});
jQ(document).on("mouseleave", "#animationBox_bubble", function () {
    jQ('.bubble').each(function () {
        jQ(this).addClass('animating')
    })

});
jQ(document).on('click', "#lightBeam_animateOption", function () {
    jQ(this).toggleClass('lightBeam_animateOption_off');
    jQ(this).toggleClass('lightBeam_animateOption_on');
    jQ('#lightBeam_action_body').toggleClass('lightBeam_body_Acchonburike');
    jQ('#lightBeam_action_bottom').toggleClass('lightBeam_body_Acchonburike');
    jQ('#scrawlMachine').toggleClass('scrawlMachine_Acchonburike');

})

jQ(document).on('click', "#lightBeam_musicOption", function () {
    jQ(this).toggleClass('lightBeam_musicOption_off');
    jQ(this).toggleClass('lightBeam_musicOption_on');
    let randomNum = anyway02_RandNumberXYZ(3, 4, 10);
    let musicPlayMA = null;
    if (randomNum == 3) {
        musicPlayMA = musicPlay03;
    } else {
        musicPlayMA = musicPlay04;
    }
    if (musicPlay < 0) {

        musicPlayMA.loop = true;
        musicPlayMA.play();
    } else {
        musicPlay03.pause();
        musicPlay04.pause();
        musicPlay03.currentTime = 0;
        musicPlay04.currentTime = 0;
    }
    // if(musicPlay < 0 ){
    //     musicPlay02.play();
    // }else{
    //     musicPlay02.pause();
    // }
    musicPlay = musicPlay * -1

})

jQ(document).on('click', "#coinslot-hole", function () {
    window.location.href = './inner.html';
})











function anyway02_RandNumberXYZ(x, y, z) {
    let a = Math.random()
    let b = Math.floor(a * z);
    let c = true;
    while (c) {
        if (b >= x && b <= y) {
            c = false;
        }
        else {
            a = Math.random()
            b = Math.floor(a * z);
        }
    }
    return b;
}

