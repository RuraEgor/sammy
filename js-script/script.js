'use strict';

//----- VARRIAL GLOBAL ----

$('.bl-city__item').on('click', function () {

	// $('.bl-city__item').removeClass('city__item');

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

function perioClip() {

    for (let y = 2; y < 6; y++) {

		let hor = Math.round(Math.random() * (80 - 20) + 20) + '%';
		let vert = Math.round(Math.random() * (80 - 20) + 20) + '%';
		let pad = '70px'; //===  max-size

    	clipRend(hor, vert, pad, y);
	}

}


$('#header').click(function () {
    perioClip();
});


//=====  time change
setInterval(()=>{
	perioClip();
}, 5000);



$(function(){
    setTimeout('moveSize()', 2000);
    setTimeout('moveWind()', 3500);
    setTimeout('chTrans()', 15000);
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

//-------------------------

$(function () {


	$(".obj-svg-path-style").on("click", function () {

		var $self = $(this);

		if ($self.hasClass("active")) {

			$(".sect-charact__bg").removeClass("active");
			$(".sect-charact .char path").removeClass("active");

		} else {

			$(".sect-charact__bg").addClass("active");
			$self.addClass("active");
		}

	});


	$(".sect-charact__bg").on("click", function () {

		var $self = $(this);

		if ($self.hasClass("active")) {

			$(".sect-charact__bg").removeClass("active");
			$(".sect-charact .char path").removeClass("active");
		}

		closeModalCharact();
	});

	//----------------

	$(".js-close-modal-char").on("click", function () {

		$(".sect-charact__bg").removeClass("active");
		$(".sect-charact .char path").removeClass("active");

		closeModalCharact();
	});


	//==== MODAL-WINDOW-CHARACTER
	//=======================================================================================================

	$(".js-characters-modal").on("click", function(){

		if( $(".characters-modal-descr").hasClass("active") ) {

			$(".characters-modal-descr").fadeOut(600, function(){

				$(this).removeClass("active");
			});

		} else {

			var chPosit = $(this).closest('div').position();

			var chWidthEl = $(this).closest('div').outerWidth();


			$(".characters-modal-descr").css({
				"top": chPosit.top - 330,
				"left": chWidthEl/2 + chPosit.left,
			});


			$(".characters-modal-descr").delay(800).fadeIn(600, function(){

				$(this).addClass("active");
			});
		}

		return false;

	});

	
});


// FUNCTIONS
// ===========================================



function closeModalCharact() {

	$(".characters-modal-descr").fadeOut(600, function(){
		$(this).removeClass("active");
	});
}

