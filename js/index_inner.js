$.noConflict();
const jQ = jQuery;


const musicPlay05_url = "./res/music/003.mp3"
const musicPlay05 = new Audio(musicPlay05_url);
const sePlay02_url = "./res/se/SE_Spinning.mp3"
const sePlay02 = new Audio(sePlay02_url);
const sePlay03_url = "./res/se/SE_landing.mp3"
const sePlay03 = new Audio(sePlay03_url);
const sePlay04_url = "./res/se/SE_clicking.mp3"
const sePlay04 = new Audio(sePlay04_url);
const sePlay05_url = "./res/se/SE_defaulting.mp3"
const sePlay05 = new Audio(sePlay05_url);
const sePlay06_url = "./res/se/SE_opening.mp3"
const sePlay06 = new Audio(sePlay06_url);
var musicPlayInner = -1;
const initialCrawSPosition = jQ('#mainInnerBox_Claw_Shadow').position();
const initialCrawPosition = jQ('#mainInnerBox_Claw').position();
const initialCrawPositionOff = jQ('#mainInnerBox_Claw').offset()
const initialBoxBodyPosition = jQ('#mainInnerBox_Box_Body').position();
const initialBoxBodyWidth = jQ('#mainInnerBox_Box_Body').width();
var initialMainPosition = jQ('#mainInnerBox').offset();
var initialAreaPosition = jQ('#mainInnerBox_Content_Area').offset();
var initialContentsLocations = [];



const ipAddress = sessionStorage.getItem('ipA');
function SiteData(callback) {
    fetch('https://raw.githubusercontent.com/jillina1004/imagebox/main/siteList.json')
        .then(Response => Response.json())
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.log('Error loading JSON:', error);
        });
};
let siteData;
SiteData(data => {
    siteData = data;
    jQ(document).ready(function () {
        makeJsonList(siteData);

    })
    function makeJsonList(objs) {
        let tempText = "";
        let tempText2 = "";
        objs.forEach((item, index) => {
            tempText = "<div class='mainInnerBox_Content_Area_Items' id='mainInnerBox_Content_Area_Item_"
            tempText += index
            tempText += "' data-url='"
            if (item.theme == "git") {
                tempText += item.url;
            } else if (item.theme == "live") {
                tempText += "http://"
                tempText += ipAddress
                tempText += ""
                tempText += item.url;
                var serverAddress = 'http://' + ipAddress + item.url;
                var test = "";
                jQ.ajax({
                    url: test + serverAddress,
                    type: 'HEAD',

                    success: function () {

                        tempText2 = "<div class='serverEach serverEach_on'><div class='serverEach_back'></div><div class='serverEach_text'>"
                        tempText2 += item.sitename;
                        tempText2 += "</div></div>"
                        jQ('#serverStatus').append(tempText2)
                    },
                    error: function () {

                        tempText2 = "<div class='serverEach serverEach_off'><div class='serverEach_back'></div><div class='serverEach_text'>"
                        tempText2 += item.sitename;
                        tempText2 += "</div></div>"
                        jQ('#serverStatus').append(tempText2)
                    }
                });

            }
            tempText += "' data-sitename='"
            tempText += item.sitename;
            tempText += "'><img src='"
            tempText += `${item.image}' onerror="this.src='./css/img/light/light.png'"/></div>"`;
            console.log(tempText2)
            jQ('#mainInnerBox_Content_Area').after(tempText);

        })
    }



    let initialAreaWidth = jQ('#mainInnerBox_Content_Area').width();
    let initialAreaHeight = jQ('#mainInnerBox_Content_Area').height();
    let initialAreaTop = jQ('#mainInnerBox_Content_Area').position().top;
    let initialAreaLeft = jQ('#mainInnerBox_Content_Area').position().left;
    let initialNumber = 1;
    let initialNumber2 = 1;
    jQ('.mainInnerBox_Content_Area_Items').each(function (index) {
        let randomNum1 = anyway02_RandNumberXYZ(15, 19, 100) / 100;
        let randomNum2 = anyway02_RandNumberXYZ(15, 19, 100) / 100;
        let randomNum3 = anyway02_RandNumberXYZ(1, 100, 100);
        let randomNum4 = anyway02_RandNumberXYZ(1, 100, 100);
        if (randomNum3 > 60) {
            initialNumber++;
        }
        if (randomNum4 > 90) {
            initialNumber++;
        }
        if ((initialNumber + 1) * (initialAreaWidth * 0.15) < initialAreaHeight) {

            jQ(this).css({
                width: `${initialAreaWidth * 0.15}`,
                top: `${initialAreaTop + (initialNumber) * (initialAreaWidth * randomNum1)}px`,
                left: `${initialAreaLeft + 40 + (initialNumber2) * (initialAreaWidth * 0.15)}px`

            })
            initialNumber++;
        } else {
            initialNumber2++;
            initialNumber = 0;
            if (randomNum3 > 60) {
                initialNumber = 1;
            }
            jQ(this).css({
                width: `${initialAreaWidth * 0.15}`,
                top: `${initialAreaTop + (initialNumber) * (initialAreaWidth * randomNum2)}px`,
                left: `${initialAreaLeft + 40 + (initialNumber2) * (initialAreaWidth * 0.15)}px`

            })
            initialNumber++;
        }
        console.log(index + "index " + randomNum1 + " n1 " + randomNum2 + " n2 " + randomNum3 + " n 3   " + initialNumber + " i1   " + initialNumber2 + " i2")
        let currentA = [];
        let currentX = jQ(this).offset().left + jQ(this).width() / 2;
        let currentY = jQ(this).offset().top + jQ(this).height() / 2;
        currentA.push(currentX);
        currentA.push(currentY);
        initialContentsLocations.push(currentA)
    });






})
jQ(document).on('click', '#mainInnerBox_Front_Menu_undo', function () {
    sePlay05.volume = 0.5;
    sePlay05.loop = false;
    sePlay05.play();
    jQ('#mainInnerBox_Claw_Shadow').css({
        left: initialCrawSPosition.left,
        top: initialCrawSPosition.top,
        opacity: 1
    })
    jQ('#mainInnerBox_Claw').css({
        left: initialCrawPosition.left,
        top: initialCrawPosition.top,

    });
    jQ('#mainInnerBox_Box_Head').removeClass('BoxHead_Acchonburike');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_one').addClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_right').addClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_one').removeClass('button_unactive');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_right').removeClass('button_unactive');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_two').removeClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_bottom').removeClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_two').addClass('button_unactive');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_bottom').addClass('button_unactive');
    jQ('#mainInnerBox_Front_Menu_check').removeClass('button_focusing');
})
jQ(document).on('mousedown', '#mainInnerBox_Wall_Left_Front_Menu_right.button_focusing', function () {
    let currentCrawPosition = jQ('#mainInnerBox_Claw_Shadow').position();
    let currentCrawPosition_left = currentCrawPosition.left;
    let currentCrawRPosition_left = jQ('#mainInnerBox_Claw').position().left;
    intervalClaw = setInterval(function () {
        currentCrawPosition = jQ('#mainInnerBox_Claw_Shadow').position();
        currentCrawPosition_left = currentCrawPosition.left;
        currentCrawRPosition_left = jQ('#mainInnerBox_Claw').position().left;
        if (currentCrawPosition_left <= 670) {
            currentCrawPosition_left += 30;
            currentCrawRPosition_left += 30;
        }
        jQ('#mainInnerBox_Claw_Shadow').css({
            left: currentCrawPosition_left
        })
        jQ('#mainInnerBox_Claw').css({
            left: currentCrawRPosition_left
        })
        sePlay02.volume = 0.5;
        sePlay02.loop = true;
        sePlay02.play();
    }, 10)



}).on('mouseup', '#mainInnerBox_Wall_Left_Front_Menu_right.button_focusing', function () {
    let currentCrawPosition = jQ('#mainInnerBox_Claw_Shadow').position();
    let currentCrawPosition_left = currentCrawPosition.left;
    let currentCrawRPosition_left = jQ('#mainInnerBox_Claw').position().left;
    clearInterval(intervalClaw);
    jQ('#mainInnerBox_Claw_Shadow').css({
        left: currentCrawPosition_left
    });
    jQ('#mainInnerBox_Claw').css({
        left: currentCrawRPosition_left
    })
    jQ('#mainInnerBox_Wall_Left_Front_Menu_one').removeClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_right').removeClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_one').addClass('button_unactive');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_right').addClass('button_unactive');

    jQ('#mainInnerBox_Wall_Left_Front_Menu_two').toggleClass('button_unactive').toggleClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_bottom').toggleClass('button_unactive').toggleClass('button_focusing');
    sePlay02.pause();

});

jQ(document).on('mousedown', '#mainInnerBox_Wall_Left_Front_Menu_bottom.button_focusing', function () {
    let currentCrawPosition = jQ('#mainInnerBox_Claw_Shadow').position();

    let currentCrawPosition_top = currentCrawPosition.top;
    intervalClaw = setInterval(function () {
        currentCrawPosition = jQ('#mainInnerBox_Claw_Shadow').position();
        currentCrawPosition_top = currentCrawPosition.top;
        if (currentCrawPosition_top <= 230) {
            currentCrawPosition_top += 15;
        }
        jQ('#mainInnerBox_Claw_Shadow').css({
            top: currentCrawPosition_top
        });
        sePlay02.volume = 0.5;
        sePlay02.loop = true;
        sePlay02.play();
    }, 10)



}).on('mouseup', '#mainInnerBox_Wall_Left_Front_Menu_bottom.button_focusing', function () {
    let currentCrawPosition = jQ('#mainInnerBox_Claw_Shadow').position();
    let currentCrawPosition_top = currentCrawPosition.top;

    clearInterval(intervalClaw);
    jQ('#mainInnerBox_Claw_Shadow').css({
        top: currentCrawPosition_top
    });
    jQ('#mainInnerBox_Wall_Left_Front_Menu_two').toggleClass('button_unactive').toggleClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_bottom').toggleClass('button_unactive').toggleClass('button_focusing');
    jQ('#mainInnerBox_Front_Menu_check').toggleClass('button_focusing');
    sePlay02.pause();
});
jQ(document).on('mousedown', '#mainInnerBox_Front_Menu_check.button_focusing', function () {
    sePlay04.volume = 0.5;
    sePlay04.loop = false;
    sePlay04.play();
    let currentCrawSPosition = jQ('#mainInnerBox_Claw_Shadow').position();
    let currentCrawSPosition_top = currentCrawSPosition.top;
    let currentCrawSPosition_left = currentCrawSPosition.left;
    let sizeOfClaw = jQ('#mainInnerBox_Claw').height();
    let currentCrawPosition_top_goal = currentCrawSPosition_top - sizeOfClaw * 0.8;

    let intervalClaw = setInterval(function () {
        let currentCrawPosition = jQ('#mainInnerBox_Claw').position();
        let currentCrawPosition_top = currentCrawPosition.top;
        if (currentCrawPosition_top <= currentCrawPosition_top_goal) {
            currentCrawPosition_top += 20;
            jQ('#mainInnerBox_Claw').css({
                top: currentCrawPosition_top
            })
        } else {
            clearInterval(intervalClaw);
            whereClawHere();
        }
        sePlay03.volume = 0.5;
        sePlay03.loop = false;
        sePlay03.play();
    }, 10);
});
function whereClawHere() {
    sePlay03.pause();
    let currentX = jQ('#mainInnerBox_Claw_Shadow').offset().left + jQ('#mainInnerBox_Claw_Shadow').width() / 2;
    let currentY = jQ('#mainInnerBox_Claw_Shadow').offset().top + jQ('#mainInnerBox_Claw_Shadow').height() / 2;
    let currented = false;
    let currentIndex = 0;
    initialContentsLocations.forEach((value, index) => {
        console.log(value[0])
        console.log(currentX)
        if (
            (value[0] * 1.05 >= currentX && value[0] * 0.95 <= currentX) &&
            (value[1] * 1.05 >= currentY && value[1] * 0.95 <= currentY)
        ) {
            currentIndex = index;
            currented = true;
            return;
        }
    })

    if (currented) {
        let intervalCurItem2
        let curItem = jQ('.mainInnerBox_Content_Area_Items').eq(currentIndex).position();
        jQ('#mainInnerBox_Claw_Shadow').css({
            opacity: 0
        })
        let curItem_Left = curItem.left;
        let curItem_Top = curItem.top;
        let intervalCurItem = setInterval(function () {
            if (curItem_Left >= (initialBoxBodyPosition.left + initialBoxBodyWidth / 4) && curItem_Top > initialCrawPosition.top) {
                curItem_Top -= 10
                let tempTop = curItem_Top;
                jQ('.mainInnerBox_Content_Area_Items').eq(currentIndex).css({
                    top: `${tempTop + Math.abs(curItem_Top) * 0.15}px`
                });
                jQ('#mainInnerBox_Claw').css({
                    top: curItem_Top
                })
            } else if (curItem_Left >= (initialBoxBodyPosition.left + initialBoxBodyWidth / 4) && curItem_Top <= initialCrawPosition.top) {
                curItem_Left -= 10
                let tempLeft = curItem_Left
                jQ('.mainInnerBox_Content_Area_Items').eq(currentIndex).css({
                    left: curItem_Left
                });
                jQ('#mainInnerBox_Claw').css({
                    left: `${tempLeft * 0.80}px`
                })
            } else {
                clearInterval(intervalCurItem);
                intervalCurItem2 = setInterval(DownItem, 100);
            }
        }, 30);
        function DownItem() {
            let curItem = jQ('.mainInnerBox_Content_Area_Items').eq(currentIndex).position();
            let curItem_Left = curItem.left;
            let curItem_Top = curItem.top;
            if (curItem_Top <= initialBoxBodyPosition.top) {
                curItem_Top += 10
                let tempTop = curItem_Top;
                jQ('.mainInnerBox_Content_Area_Items').eq(currentIndex).addClass('items_Acchonburike')
                jQ('#mainInnerBox_Box_Head').addClass('BoxHead_Acchonburike');
                jQ('.mainInnerBox_Content_Area_Items').eq(currentIndex).css({
                    top: `${tempTop + Math.abs(curItem_Top) * 0.15}px`
                });

            } else {

                jQ('#messageBox_TextArea_Direction').text(jQ('.mainInnerBox_Content_Area_Items').eq(currentIndex).data('sitename'))
                jQ('#messageBox_Yes').attr('data-url', jQ('.mainInnerBox_Content_Area_Items').eq(currentIndex).data('url'))
                jQ('#messageBox').addClass('msgShowUp')
                sePlay06.volume = 0.7;
                sePlay06.loop = false;
                sePlay06.play();
                clearInterval(intervalCurItem2);

            }
        }
    } else {

        jQ('#mainInnerBox_Claw_Shadow').css({
            left: initialCrawSPosition.left,
            top: initialCrawSPosition.top,
            opacity: 1
        })
        jQ('#mainInnerBox_Claw').css({
            left: initialCrawPosition.left,
            top: initialCrawPosition.top
        });
        jQ('#mainInnerBox_Box_Head').removeClass('BoxHead_Acchonburike');
        jQ('#mainInnerBox_Wall_Left_Front_Menu_one').addClass('button_focusing');
        jQ('#mainInnerBox_Wall_Left_Front_Menu_right').addClass('button_focusing');
        jQ('#mainInnerBox_Wall_Left_Front_Menu_one').removeClass('button_unactive');
        jQ('#mainInnerBox_Wall_Left_Front_Menu_right').removeClass('button_unactive');
        jQ('#mainInnerBox_Wall_Left_Front_Menu_two').removeClass('button_focusing');
        jQ('#mainInnerBox_Wall_Left_Front_Menu_bottom').removeClass('button_focusing');
        jQ('#mainInnerBox_Wall_Left_Front_Menu_two').addClass('button_unactive');
        jQ('#mainInnerBox_Wall_Left_Front_Menu_bottom').addClass('button_unactive');
        jQ('#mainInnerBox_Front_Menu_check').removeClass('button_focusing');
    }
}

jQ(document).on('click', '#messageBox_No', function () {
    sePlay04.volume = 0.5;
    sePlay04.loop = false;
    sePlay04.play();
    jQ('#mainInnerBox_Claw_Shadow').css({
        left: initialCrawSPosition.left,
        top: initialCrawSPosition.top,
        opacity: 1
    })
    jQ('#mainInnerBox_Claw').css({
        left: initialCrawPosition.left,
        top: initialCrawPosition.top
    });
    jQ('#mainInnerBox_Box_Head').removeClass('BoxHead_Acchonburike');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_one').addClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_right').addClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_one').removeClass('button_unactive');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_right').removeClass('button_unactive');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_two').removeClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_bottom').removeClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_two').addClass('button_unactive');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_bottom').addClass('button_unactive');
    jQ('#mainInnerBox_Front_Menu_check').removeClass('button_focusing');
    jQ('#messageBox').removeClass('msgShowUp')
})

jQ(document).on('click', '#messageBox_Yes', function () {
    sePlay04.volume = 0.5;
    sePlay04.loop = false;
    sePlay04.play();
    musicPlay05.pause();
    jQ('#mainInnerBox_musicOption').toggleClass('mainInnerBox_musicOption_off');
    jQ('#mainInnerBox_musicOption').toggleClass('mainInnerBox_musicOption_on');
    musicPlayInner = musicPlayInner * -1
    window.open(jQ(this).data('url'), '_blank');
})

jQ(document).on('click', "#mainInnerBox_musicOption", function () {
    sePlay04.volume = 0.5;
    sePlay04.loop = false;
    sePlay04.play();
    jQ(this).toggleClass('mainInnerBox_musicOption_off');
    jQ(this).toggleClass('mainInnerBox_musicOption_on');
    let musicPlayMA = musicPlay05

    if (musicPlayInner < 0) {

        musicPlayMA.loop = true;
        musicPlayMA.play();
    } else {
        musicPlay05.pause();

        musicPlay05.currentTime = 0;

    }
    // if(musicPlay < 0 ){
    //     musicPlay02.play();
    // }else{
    //     musicPlay02.pause();
    // }
    musicPlayInner = musicPlayInner * -1

})
jQ('#mainInnerBox_musicOption_volum_button').draggable({

    containment: "#mainInnerBox_musicOption_volum_bar",
    drag: function (event, ui) {
        var position = ui.position;
        var leftPercentage = (position.left / jQ('#mainInnerBox_musicOption_volum').width()) * 100;
        //33 middle
        var topPercentage = (position.top / jQ('#mainInnerBox_musicOption_volum').height()) * 100;


        musicPlay05.volume = (Math.abs(leftPercentage) / 83);

        jQ('#mainInnerBox_musicOption_volum_bar').css({
            clipPath: `polygon(0% 0%, ${leftPercentage + 8}% 0%, ${leftPercentage + 8}% 100%, 0% 100%`

        });


    }
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