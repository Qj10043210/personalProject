$.noConflict();
const jQ = jQuery;

setTimeout(function () {
    jQ('#weregoing').fadeOut(2000)
}, 2000);
const initialCrawSPosition = jQ('#mainInnerBox_Claw_Shadow').position();
const initialCrawPosition = jQ('#mainInnerBox_Claw').position();
const initialCrawPositionOff = jQ('#mainInnerBox_Claw').offset()

var initialMainPosition = jQ('#mainInnerBox').offset();
var initialAreaPosition = jQ('#mainInnerBox_Content_Area').offset();
var initialContentsLocations = [];
jQ(document).ready(function () {


    jQ('.mainInnerBox_Content_Area_Items').each(function () {
        let currentA = [];
        let currentX = jQ(this).offset().left + jQ(this).width() / 2;
        let currentY = jQ(this).offset().top + jQ(this).height() / 2;
        currentA.push(currentX);
        currentA.push(currentY);
        initialContentsLocations.push(currentA)
    })
    console.log(initialContentsLocations)
})
jQ(document).on('click', '#mainInnerBox_Front_Menu_undo', function () {
    jQ('#mainInnerBox_Claw_Shadow').css({
        left: initialCrawSPosition.left,
        top: initialCrawSPosition.top
    })
    jQ('#mainInnerBox_Claw').css({
        left: initialCrawPosition.left,
        top: initialCrawPosition.top
    });
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
    console.log("??")
    jQ('#mainInnerBox_Wall_Left_Front_Menu_two').toggleClass('button_unactive').toggleClass('button_focusing');
    jQ('#mainInnerBox_Wall_Left_Front_Menu_bottom').toggleClass('button_unactive').toggleClass('button_focusing');


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
        })
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

});
jQ(document).on('mousedown', '#mainInnerBox_Front_Menu_check.button_focusing', function () {
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

    }, 10);
});
function whereClawHere() {
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
        console.log("why")
        let curruntElm = jQ('.mainInnerBox_Content_Area_Items').eq(currentIndex);
        let currentElmPosition = jQ('.mainInnerBox_Content_Area_Items').eq(currentIndex).position();
        let cet = currentElmPosition.top;
        let cel = currentElmPosition.left;
        let intervalClaw = setInterval(function () {
        
        currentElmPosition = jQ('.mainInnerBox_Content_Area_Items').eq(currentIndex).position();
        cet = currentElmPosition.top;
        cel = currentElmPosition.left;
        console.log(cet)
        console.log(cel)
        console.log(initialCrawPosition.top)
        console.log(initialCrawPosition.left)
        if (cet >= initialCrawPosition.top && cel >= initialCrawPosition.left) {
            cet -= 10;
            curruntElm.css({
                top : cet
            })
        }else if(cet <= initialCrawPosition.top && cel >= initialCrawPosition.left){
            cel -=10;
            curruntElm.css({
                cel : cel
            })
        }else if(cet <= initialCrawPosition.top && cel <= initialCrawPosition.left){
            clearInterval(intervalClaw);
            
        }

    }, 10);
    } else {
        console.log("ttss")
        jQ('#mainInnerBox_Claw_Shadow').css({
            left: initialCrawSPosition.left,
            top: initialCrawSPosition.top
        })
        jQ('#mainInnerBox_Claw').css({
            left: initialCrawPosition.left,
            top: initialCrawPosition.top
        });
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