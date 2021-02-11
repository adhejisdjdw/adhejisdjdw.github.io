
(() => {

	const aboutSection = document.querySelector('.aboutme');
	linkme = document.querySelector('.linkme');

	linkme.addEventListener('click', (event) => {
		if (event.target.classList.contains('tab-item') && !event.target.classList.contains('active')) {
			const target = event.target.getAttribute('data_target');
			linkme.querySelector('.active').classList.remove('active');
			event.target.classList.add('active');

			aboutSection.querySelector('.tab-content.active').classList.remove('active');
			aboutSection.querySelector(target).classList.add('active');
		}
	})

})();

document.querySelector('.navbar .menu-toggle').addEventListener('click', () => {
	document.querySelector('.navbar .links').classList.toggle('show');
})

window.addEventListener('scroll', () => {
	document.querySelector('.navbar').classList.toggle('sticky', window.scrollY > 0);
})

const position = document.querySelector('.parallax .parallax-content');

position.addEventListener('mousemove', event => {
		position.style.setProperty('--x', event.clientX + 'px');
})

$('.page-scroll').on('click', function(e) {
	var tujuan = $(this).attr('href');
	var elementTujuan = $(tujuan);
	$('body').animate({
		scrollTop: elementTujuan.offset().top - 50
	}, 1000, 'linear');

	e.preventDefault();
})
