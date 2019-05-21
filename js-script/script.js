'use strict';

//----- VARRIAL GLOBAL ----

let stateElem = {
    actPage: false,
    actPageNum: false,
    bgPosit: false
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

        beginBgMoveClear();

        const $thisEl = $(this);

        if ($thisEl.hasClass('menu_act')) {
            retAllPageElem();
        } else {
            $('.menu__item').removeClass('menu_act');
            $thisEl.addClass('menu_act');
            const numSect = $thisEl.attr('data-sect');
            $(`.bl-city__item.clip_${numSect}`).click();
        }
    });

});


$('.js-bl-slide__item').on('click', function () {

    beginBgMoveClear();

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

    thisEl.addClass('zm');

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
// $('.scroll-main').slimscroll({
//     height: 'auto',
//     // alwaysVisible: true,
//     color: 'yellow',
//     size: '4px',
//     opacity: 0.8
// });


$(function () {
    setTimeout(moveSize, 1000);
    setTimeout(moveWind, 2500);
    setTimeout(chTrans, 4000);
    setTimeout(() => {
        stateElem.bgPosit = setInterval(chBgPos, 10000);
    }, 0);
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

function beginBgMove() {
    beginBgMoveClear();

    stateElem.bgPosit = setInterval(chBgPos, 10000);
}

function beginBgMoveClear() {
    clearInterval(stateElem.bgPosit);
    stateElem.bgPosit = false;
    $('.bl-city__bg').removeAttr('style');
}

function chBgPos() {

    let masTiming = ['linear', 'ease', 'ease-in', 'ease-out'];
    let masTrans = [3.5, 4, 4.5, 5];
    let masTimingDelay = [0, 0.5, 0.7, 1];

    masTiming.sort(compareRandom);
    masTrans.sort(compareRandom);
    masTimingDelay.sort(compareRandom);

    const znX_2 = Math.random() * 50 - 30;
    const znY_2 = Math.random() * 51 + 51;
    $('.bl-city__bg_2').css({
        'transform': `translate(${znX_2}%, -${znY_2}%)`,
        'transition-timing-function': masTiming[0],
        'transition': `all ${masTrans[0]}s`,
        'transition-delay': `${masTimingDelay[0]}s`
    });

    const znX_3 = Math.random() * 65 - 13;
    const znY_3 = Math.random() * 63 + 19;
    $('.bl-city__bg_3').css({
        'transform': `translate(${znX_3}%, -${znY_3}%)`,
        'transition-timing-function': masTiming[1],
        'transition': `all ${masTrans[1]}s`,
        'transition-delay': `${masTimingDelay[1]}s`
    });

    const znX_4 = Math.random() * 52 - 32;
    const znY_4 = Math.random() * 60;
    $('.bl-city__bg_4').css({
        'transform': `translate(${znX_4}%, -${znY_4}%)`,
        'transition-timing-function': masTiming[2],
        'transition': `all ${masTrans[2]}s`,
        'transition-delay': `${masTimingDelay[2]}s`
    });

    const znX_5 = Math.random() * 60 - 50;
    const znY_5 = Math.random() * 65 + 18;
    $('.bl-city__bg_5').css({
        'transform': `translate(${znX_5}%, -${znY_5}%)`,
        'transition-timing-function': masTiming[3],
        'transition': `all ${masTrans[3]}s`,
        'transition-delay': `${masTimingDelay[3]}s`
    });
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
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

    beginBgMove();
}


//===== TWIN-MAX

function anim(zn) {
    return new Promise (
        function (resolve, reject) {

            const tl = new TimelineMax();

            tl.add(TweenMax.from('.anim_text', 1, {opacity: 0, x: -100, delay: 2 }));
            tl.add(TweenMax.staggerFrom('.anim_main-link', 0.8, {opacity: 0, x: -100, delay: -0.3 }, 0.2 ));
            tl.add(TweenMax.staggerFrom('.anim_dop-link', 0.8, {opacity: 0, y: 100, delay: -0.3}, 0.2 ));
            tl.add(TweenMax.staggerFrom('.block-social__item', 0.5, {opacity: 0, y: 100, delay: -0.5, onComplete: resolve, }, 0.07 ));
        }
    );
}


$('.cont-main_vis').show();

anim();