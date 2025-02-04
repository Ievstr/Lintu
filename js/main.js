/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/card/card.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/card/card.js ***!
  \*****************************************/
/***/ (() => {

$(function () {
  $('.js-card-pack-item').click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass('card__pack-item_active');
    $(this).addClass('card__pack-item_active');
  });
  $('.js-card-favorites').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('card__favorites_active');
  });
  $('.js-card-button').click(function (e) {
    e.preventDefault();
    $(this).parent().addClass('card__block_active');
  });
});

/***/ }),

/***/ "./src/blocks/modules/counter/counter.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/counter/counter.js ***!
  \***********************************************/
/***/ (() => {

$(function () {
  $('.js-counter-button').click(function () {
    var val = parseInt($(this).closest('.counter').find('.counter__number').val());
    var valMin = $(this).closest('.counter').find('.counter__number').attr('min');
    var valMax = $(this).closest('.counter').find('.counter__number').attr('max');
    if ($(this).hasClass('counter_minus')) {
      if ($(this).hasClass('disabled')) {
        return false;
      } else {
        val--;
        if (val == valMin) {
          $(this).addClass('disabled');
        }
        if (val < valMax) {
          $(this).closest('.counter').find('.counter_plus').removeClass('disabled');
        }
      }
    } else if ($(this).hasClass('counter_plus') && val < valMax) {
      val++;
      if ($(this).closest('.counter').find('.counter_minus').hasClass('disabled') && val > valMin) {
        $(this).closest('.counter').find('.counter_minus').removeClass('disabled');
      } else if (val == valMax) {
        $(this).addClass('disabled');
      }
    }
    $(this).closest('.counter').find('.counter__number').val(val);
  });
  $('.counter__number').on('input', function (e) {
    var valMin = $(this).attr('min');
    if (this.value <= valMin) {
      this.value = valMin;
      $(this).closest('.counter').find('.counter_minus').addClass('disabled');
    } else {
      $(this).closest('.counter').find('.counter_minus').removeClass('disabled');
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/faq/faq.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/faq/faq.js ***!
  \***************************************/
/***/ (() => {

$(function () {
  $('.js-faq-item').click(function () {
    $('.js-faq-item').not(this).removeClass('faq__item-heading_active').next().slideUp();
    $(this).toggleClass('faq__item-heading_active').next().slideToggle();
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  // let lastScroll;
  var header = $('.js-header');
  $(window).scroll(function () {
    var currentScroll = $(window).scrollTop();

    // if (currentScroll > 300) {
    //   header.addClass('header_white');
    // }

    // currentScroll > 1000 && lastScroll > currentScroll ? scrollTop.addClass('button_top_active') : scrollTop.removeClass('button_top_active');

    // portfolioSide && lastScroll > currentScroll ? portfolioSide.css('top', 180) : portfolioSide.css('top', '');

    // lastScroll > currentScroll ? header.addClass('header_scroll_up') : header.removeClass('header_scroll_up');
    currentScroll > 0 ? header.addClass('header_scroll') : header.removeClass('header_scroll');

    // lastScroll = currentScroll;
  });
  $('.js-header-search').click(function (e) {
    e.preventDefault();
    $(this).parent().addClass('header__search_active');
  });

  // $(document).mouseup(function (e) {
  //   let target = e.target;
  //   if (!target.closest('.search')) {
  //     $('.header__search').removeClass('header__search_active');
  //   }
  // });

  $('.js-burger').click(function () {
    $(this).toggleClass('burger_active');
    if ($(this).hasClass('burger_active')) {
      $('body').removeClass('o-hidden');
    } else {
      $('body').addClass('o-hidden');
    }
    header.toggleClass('header_active');
    $('.header__content').toggleClass('header__content_active');
    $('body').toggleClass('o-hidden');
  });
});

/***/ }),

/***/ "./src/blocks/modules/merch-card/merch-card.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/merch-card/merch-card.js ***!
  \*****************************************************/
/***/ (() => {

$(function () {
  $('.js-merch-card-favorites').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('merch-card__favorites_active');
  });
  $('.js-merch-card-button').click(function (e) {
    e.preventDefault();
    $(this).parent().addClass('merch-card__block_active');
  });
});

/***/ }),

/***/ "./src/blocks/modules/nav/nav.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/nav/nav.js ***!
  \***************************************/
/***/ (() => {

$(function () {
  $('.nav__link_dropdown').click(function (e) {
    e.preventDefault();
  });
  if ($(window).width() > 1279) {
    $('.js-nav-sublist').mouseover(function (e) {
      e.preventDefault();
      $('.js-nav-sublist').not(this).removeClass('nav__item_active').find('.nav__dropdown').slideUp(0);
      $(this).addClass('nav__item_active').find('.nav__dropdown').slideDown(0);
    });
    $('.nav__dropdown-list li a').mouseover(function () {
      $(this).parent().siblings().find('a').removeClass('active');
      $(this).addClass('active');
      var data = $(this).data('sublist');
      $(this).closest('.nav__dropdown-list').next().find('.nav__dropdown-item').removeClass('active');
      $(this).closest('.nav__dropdown-list').next().find('.nav__dropdown-item[data-sublist=' + data + ']').addClass('active');
    });
    $('.js-header').mouseleave(function () {
      $('.nav__dropdown').slideUp(0);
      $('.js-nav-sublist').removeClass('nav__item_active');
      $('.nav__dropdown-list li a').removeClass('active');
      $('.nav__dropdown-item').removeClass('active');
    });
    $('.nav__item:not(".js-nav-sublist")').mouseover(function () {
      $('.js-nav-sublist').removeClass('nav__item_active').find('.nav__dropdown').slideUp(0);
      $('.nav__dropdown-list li a').removeClass('active');
      $('.nav__dropdown-item').removeClass('active');
    });
    $(document).mouseover(function (e) {
      var target = e.target;
      if (!target.closest('.nav__item')) {
        $('.js-nav-sublist').removeClass('nav__item_active').find('.nav__dropdown').slideUp(0);
        $('.nav__dropdown-list li a').removeClass('active');
        $('.nav__dropdown-item').removeClass('active');
      }
    });
  } else if ($(window).width() <= 1279) {
    $('.js-nav-sublist').find('.nav__link_dropdown').click(function (e) {
      e.preventDefault();
      $(this).closest('.js-nav-sublist').siblings().removeClass('nav__item_active').find('.nav__dropdown').slideUp();
      $(this).closest('.js-nav-sublist').toggleClass('nav__item_active').find('.nav__dropdown').slideToggle();
    });
    $('.js-nav-sublink').click(function (e) {
      e.preventDefault();
      $('.js-nav-sublink').not(this).removeClass('active').next().slideUp();
      $(this).toggleClass('active').next().slideToggle();
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/product/product.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/product/product.js ***!
  \***********************************************/
/***/ (() => {

$(function () {
  $('.js-tab-item').click(function () {
    if ($(this).hasClass('tab__item_map')) {
      $('.product__content').addClass('product__content_wide');
      $('.product__info').addClass('product__info_static');
    } else {
      $('.product__content').removeClass('product__content_wide');
      $('.product__info').removeClass('product__info_static');
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/select2/select2.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/select2/select2.js ***!
  \***********************************************/
/***/ (() => {

$(function () {
  var $select2 = $('.js-select2');
  var $select2Search = $('.js-select2-search');
  $select2.select2({
    allowClear: true,
    width: '100%'
  });

  // $select2Search.select2({
  //   dropdownParent: $('.header__search')
  // });

  $.each($select2Search, function () {
    $(this).data().select2.$dropdown.addClass('select2-dropdown_search');
  });
  // $select2Search.data().select2.$dropdown.addClass('select2-dropdown_search');
});

/***/ }),

/***/ "./src/blocks/modules/slider/slider.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/slider/slider.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var preCatalogSlider = new Swiper('.js-pre-catalog-slider', {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 1200,
    simulateTouch: false,
    // nested: true,
    enabled: false,
    breakpoints: {
      768: {
        slidesPerView: 2,
        enabled: true
      },
      1280: {
        slidesPerView: 3,
        enabled: true
      }
    }
  });
  var productThumbs = new Swiper('.js-product-thumbs', {
    // direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 6,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        direction: 'vertical',
        spaceBetween: 10
      }
    }
  });
  var productSlider = new Swiper('.js-product-slider', {
    slidesPerView: 1,
    speed: 1200,
    // breakpoints: {
    // 	768: {
    // 		slidesPerView: 1.63,
    // 		spaceBetween: 24,
    // 	},
    // 	1280: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 0,
    // 	}
    // },
    thumbs: {
      swiper: productThumbs
    }
  });
  var blogDetailSlider = new Swiper('.js-blog-detail-slider', {
    slidesPerView: 1,
    spaceBetween: 4,
    speed: 1200,
    // mousewheel: {
    // 	enabled: true,
    // 	releaseOnEdges: true,
    // },
    // nested: true,

    simulateTouch: false,
    // touchStartForcePreventDefault: true,
    // threshold: '0',
    // touchStartPreventDefault: false,
    // touchMoveStopPropagation: true,
    // preventClicks: false,
    // preventClicksPropagation: false,
    // preventInteractionOnTransition: true,
    breakpoints: {
      768: {
        // slidesPerView: 2.06,
        slidesPerView: 2,
        spaceBetween: 12
      }
      // 1280: {
      // 	// slidesPerView: 1.89,
      // 	// slidesPerView: 2,
      // 	spaceBetween: 12,
      // }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/tab/tab.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/tab/tab.js ***!
  \***************************************/
/***/ (() => {

$(function () {
  $('.js-tab-item').click(function (e) {
    e.preventDefault();
    $('.js-tab-item').removeClass('tab__item_active');
    $(this).addClass('tab__item_active');
    var data = $(this).data('tab');
    $('.js-tab-content').removeClass('tab-content_active');
    $('.js-tab-content[data-tab=' + data + ']').addClass('tab-content_active');
  });
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_nav_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/nav/nav */ "./src/blocks/modules/nav/nav.js");
/* harmony import */ var _modules_nav_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_nav_nav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_select2_select2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/select2/select2 */ "./src/blocks/modules/select2/select2.js");
/* harmony import */ var _modules_select2_select2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_select2_select2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_card_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/card/card */ "./src/blocks/modules/card/card.js");
/* harmony import */ var _modules_card_card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_card_card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_merch_card_merch_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/merch-card/merch-card */ "./src/blocks/modules/merch-card/merch-card.js");
/* harmony import */ var _modules_merch_card_merch_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_merch_card_merch_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_counter_counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/counter/counter */ "./src/blocks/modules/counter/counter.js");
/* harmony import */ var _modules_counter_counter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_counter_counter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_tab_tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/tab/tab */ "./src/blocks/modules/tab/tab.js");
/* harmony import */ var _modules_tab_tab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_tab_tab__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/product/product */ "./src/blocks/modules/product/product.js");
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_product_product__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/faq/faq */ "./src/blocks/modules/faq/faq.js");
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_faq_faq__WEBPACK_IMPORTED_MODULE_9__);










// import "%modules%/info/info";
// import "%modules%/pre-catalog/pre-catalog";
// import "%modules%/about/about";
// import "%modules%/project-card/project-card";
// import "%modules%/form/form";
// import "%modules%/modal/modal";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map