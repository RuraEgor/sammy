'use strict';

//----- VARRIAL GLOBAL ----

$('.js-bl-slide__item').on('click', function () {

	var thisEl = $(this);

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

    let con = $('.bl-city__item').addClass('pen');
	thisEl.addClass('zm');
	thisEl.removeClass('pen');

	if( thisEl.hasClass('act')) {
        thisEl.removeClass('act');
	} else {
        thisEl.addClass('act');
    }

    thisEl.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        if (!$(this).hasClass('act')) {
            thisEl.removeClass('zm');
            $('.bl-city .bl-city__item').removeClass('pen');
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
setInterval(()=>{
	// perioClip();
}, 5000);



//===========
// $('.characters-modal-descr__charact-descr').slimscroll({
// 	height: '220px',
// 	alwaysVisible: true,
// 	color: 'yellow',
// 	size: '3px',
// 	opacity: 0.8
// });


$(function(){
    setTimeout(moveSize, 2000);
    setTimeout(moveWind, 3500);
    setTimeout(chTrans, 15000);
});

function moveWind() {
	$('#main-bl').removeClass('start').addClass('begTrans');
}

function moveSize() {
    $('#main-bl').removeClass('begSize');
}

function chTrans() {
    $('#main-bl').removeClass('begTrans');
}

