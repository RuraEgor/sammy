'use strict';

//----- VARRIAL GLOBAL ----

let stateElem = {
    actPage: false,
    actPageNum: false
}


$(function () {
    $('.js-menu__item').hover(
        function () {
            const numSect = $(this).attr('data-sect');
            $(`.bl-city__item.clip_${numSect}`).addClass('hover-act');
        },
        function () {
            $('.bl-city__item').removeClass('hover-act');
        }
    );


    $('.js-bl-slide__item-h').hover(
        function () {
            const numSect = $(this).attr('data-sect');
            $(`.menu__item_${numSect}`).addClass('menu_h');
        },
        function () {
            $('.menu__item').removeClass('menu_h');
        }
    );


    $('.js-menu__item').on('click', function () {
        const $thisEl = $(this);

        if ($thisEl.hasClass('act-link')) {
            retAllPageElem();
            return false;
        }

        $thisEl.toggleClass('act-link');
        const numSect = $thisEl.attr('data-sect');
        $(`.bl-city__item.clip_${numSect}`).click();
    });

});


$('.js-bl-slide__item').on('click', function () {

    let thisEl = $(this);

    const numSect = thisEl.attr('data-sect');
    $(`.menu__item_${numSect}`).addClass('menu_act');

    if (thisEl.hasClass('act')) return false;

    if (stateElem.actPage) {
        stateElem.actPageNum = $('.bl-city__item.act');
        stateElem.actPageNum.addClass('zm_next');
        setTimeout(retElemPage, 2100)
    }

    stateElem.actPage = true;

    // let clip = '20px';
    // let hor3 = '80%';
    // let vert3 = '50%';
    //
    //
    // let clipFun = `polygon(calc(${hor3} - ${clip}) ${vert3},
    //        calc(${hor3} - ${clip} / 2) calc(${vert3} - ${clip} / 2),
    //        ${hor3} calc(${vert3} - ${clip}),
    //        calc(${hor3} + ${clip} / 2) calc(${vert3} - ${clip} / 2),
    //        calc(${hor3} + ${clip}) ${vert3},
    //        calc(${hor3} + ${clip} / 2) calc(${vert3} + ${clip} / 2),
    //        ${hor3} calc(${vert3} + ${clip}),
    //        calc(${hor3} - ${clip} / 2) calc(${vert3} + ${clip} / 2))`;
    //
    //
    // thisEl.css({'clip-path': clipFun});


    // $('.bl-city__item').css('z-index', 10);
    // $(this).css('z-index', 100);

    // let con = $('.bl-city__item').addClass('pen');
    thisEl.addClass('zm');
    // thisEl.removeClass('pen');

    if (thisEl.hasClass('act')) {
        thisEl.removeClass('act');
    } else {
        thisEl.addClass('act');
    }

    thisEl.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        if (!$(this).hasClass('act')) {
            thisEl.removeClass('zm');
            // $('.bl-city .bl-city__item').removeClass('pen');
        }
    });

});


function clipRend(hor3 = '50%', vert3='50%', clip = '80px', ii = 2) {

    let clipFun = `polygon(calc(${hor3} - ${clip}) ${vert3},
           calc(${hor3} - ${clip} / 2) calc(${vert3} - ${clip} / 2),
           ${hor3} calc(${vert3} - ${clip}),
           calc(${hor3} + ${clip} / 2) calc(${vert3} - ${clip} / 2),
           calc(${hor3} + ${clip}) ${vert3},
           calc(${hor3} + ${clip} / 2) calc(${vert3} + ${clip} / 2),
           ${hor3} calc(${vert3} + ${clip}),
           calc(${hor3} - ${clip} / 2) calc(${vert3} + ${clip} / 2))`;


    $('.clip_' + ii).css({'clip-path': clipFun});
}


//====  RANDOM COORDINAT
function perioClip() {

    for (let y = 2; y < 6; y++) {

        let hor = Math.round(Math.random() * (80 - 20) + 20) + '%';
        let vert = Math.round(Math.random() * (80 - 20) + 20) + '%';
        let pad = '70px'; //===  max-size

        clipRend(hor, vert, pad, y);
    }

}


//=====  time change
setInterval( () => {
    // perioClip();
}, 5000);


//===========
$('.scroll-main').slimscroll({
    height: '100vh',
    // alwaysVisible: true,
    color: 'yellow',
    size: '4px',
    opacity: 0.8
});


$(function () {
    setTimeout(moveSize, 2000);
    setTimeout(moveWind, 3500);
    setTimeout(chTrans, 6000);
});


function moveSize() {
    $('#main-bl').removeClass('begSize');
}

function moveWind() {
    $('#main-bl').removeClass('start').addClass('begTrans');
    $('.menu').removeClass('menu_start');
}

function chTrans() {
    $('#main-bl').removeClass('begTrans');
    $('.bl-decor__clip').removeClass('dn');
}


function showOpacElem() {
    stateElem.actPageNum.removeClass('op_z zm_next')
}

function retElemPage() {
    stateElem.actPageNum.addClass('op_z').removeClass('zm act');
    setTimeout(showOpacElem, 100)
}

function retAllPageElem() {
    stateElem.actPage = false;
    stateElem.actPageNum = false;
    $('.bl-city__item').removeClass('zm act op_z zm_next');
    $('.menu__item').removeClass('menu_act');
}