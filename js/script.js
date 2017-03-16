var btnContactMe = document.querySelector('.contact_me_btn'),
	modal = document.querySelector('.contact_me_modal'),
	closeBtn = document.querySelector('.close_me'),
	contactForm = document.querySelector('.contact_form');

btnContactMe.addEventListener('click', function() {
	document.body.classList = 'modal_opened';
}, false);

closeBtn.addEventListener('click', function() {
	document.body.classList = "";
});

document.addEventListener('keyup', function(e) {
	if(e.keyCode === 27) {
		document.body.classList = "";
	}

}, false);

contactForm.addEventListener('submit', function(e) {
	e.preventDefault();
	window.setTimeout(function() {
		document.body.classList = "";
	}, 2000);
}, false);

