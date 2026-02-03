 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-car').owlCarousel({
			center: true,
			loop: true,
			autoplay: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


	$('#book_pick_date,#book_off_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#time_pick').timepicker();

	// fetch('././data.json')
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		console.log('Dữ liệu JSON:', data);

	// 		// Ví dụ: lấy tất cả tuyến
	// 		const routes = data.data;
	// 		console.log(routes);

	// 		// Ví dụ: lọc tuyến Sài Gòn -> Vũng Tàu
	// 		const sgVt = routes.filter(item =>
	// 		item.from === 'Sài Gòn' && item.to === 'Vũng Tàu'
	// 		);

	// 		console.log('Sài Gòn → Vũng Tàu:', sgVt);
	// 	})
	// 	.catch(error => {
	// 		console.error('Lỗi load JSON:', error);
	// 	});
 	
let ALL_ROUTES = [];
let CURRENT_DATA = [];
let CURRENT_PAGE = 1;

const PAGE_SIZE = 3;

fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    ALL_ROUTES = data.data;

    initSelectOptions(ALL_ROUTES);

    // 👉 hiển thị 5 card đầu (chưa phân trang)
    buildCurrentData(ALL_ROUTES.slice(0, 5));
    renderPage();
  })
  .catch(err => console.error(err));

/* =========================
   ĐỔ DATA VÀO SELECT
========================= */
function initSelectOptions(routes) {
  const fromSet = new Set();
  const toSet = new Set();

  routes.forEach(item => {
    fromSet.add(item.from);
    toSet.add(item.to);
  });

  fromSet.forEach(from =>
    $('#search_from').append(`<option value="${from}">${from}</option>`)
  );

  toSet.forEach(to =>
    $('#search_to').append(`<option value="${to}">${to}</option>`)
  );
}

/* =========================
   SUBMIT FORM
========================= */
$('#form-tim-chuyen').on('submit', function (e) {
  e.preventDefault();

  const from = $('#search_from').val();
  const to = $('#search_to').val();
  const seat = $('#search_seat').val();

  const services = [];
  $('.service-checkbox input:checked').each(function () {
    services.push($(this).val());
  });

  let result = [...ALL_ROUTES];

  if (from) result = result.filter(i => i.from === from);
  if (to) result = result.filter(i => i.to === to);
  if (services.length)
    result = result.filter(i => services.includes(i.serviceType));

  buildCurrentData(result, seat);
  CURRENT_PAGE = 1;
  renderPage();
});

/* =======================
   RENDER TÁCH CARD
======================= */
function buildCurrentData(routes, seatFilter = '') {
  CURRENT_DATA = [];

  routes.forEach(item => {
    Object.entries(item.prices).forEach(([seat, price]) => {
      if (seatFilter && seat !== seatFilter) return;

      CURRENT_DATA.push({
        from: item.from,
        to: item.to,
        service: item.serviceType,
        days: item.days,
        seat,
        price
      });
    });
  });
}

function renderPage() {
  const start = (CURRENT_PAGE - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pageData = CURRENT_DATA.slice(start, end);

  renderCards(pageData);
  renderPagination();
}

/* =======================
   HIỆU ỨNG TRƯỢT
======================= */
function renderCards(data) {
  let html = '';

  data.forEach(item => {
    html += `
      <div class="route-card-mini">
        <div class="route-info">
          <h5>${item.from} → ${item.to}</h5>
          <small>
            ${item.service}${item.days ? ` (${item.days} ngày)` : ''} • Xe ${item.seat} chỗ
          </small>
        </div>
        <div class="route-price">
          <span>${item.price.toLocaleString()} đ</span>
        </div>
      </div>
    `;
  });

  $('#route-result').html(html || '<p>Không có kết quả</p>');
  animateCards();
}
function animateCards() {
  $('.route-card-mini').removeClass('show');

  $('.route-card-mini').each(function (index) {
    setTimeout(() => {
      $(this).addClass('show');
    }, index * 120);
  });
}
// =======================
// PAGINATION
function renderPagination() {
  const totalPage = Math.ceil(CURRENT_DATA.length / PAGE_SIZE);
  if (totalPage <= 1) {
    $('#pagination').html('');
    return;
  }

  let html = '';

  html += `<button class="page-btn" ${CURRENT_PAGE === 1 ? 'disabled' : ''} onclick="gotoPage(${CURRENT_PAGE - 1})">‹</button>`;

  for (let i = 1; i <= totalPage; i++) {
    html += `
      <button class="page-btn ${i === CURRENT_PAGE ? 'active' : ''}"
        onclick="gotoPage(${i})">${i}</button>
    `;
  }

  html += `<button class="page-btn" ${CURRENT_PAGE === totalPage ? 'disabled' : ''} onclick="gotoPage(${CURRENT_PAGE + 1})">›</button>`;

  $('#pagination').html(html);
}

function gotoPage(page) {
  CURRENT_PAGE = page;
  renderPage();
}

window.gotoPage = gotoPage;



document
  .getElementById("form-dat-xe")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const bookingData = {
      fullname: fullname.value,
      phone: phone.value,
      email: email.value,
      pickup_location: pickup_location.value,
      dropoff_location: dropoff_location.value,
      pickup_date: book_pick_date.value,
      pickup_time: time_pick.value,
      car_type:
        document.querySelector("input[name='car_type']:checked")?.value || "",
    };

    fetch("https://car-booking-server-hakd.onrender.com/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("✅ Đặt xe thành công!");
        document.getElementById("form-dat-xe").reset();
      })
      .catch(() => alert("❌ Gửi đơn thất bại"));
  });



})(jQuery);

