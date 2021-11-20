$(() => {
	// Основной слайдер на главной
	if ($('.main_slider .swiper-container').length) {
		new Swiper('.main_slider .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Товары
	if ($('.products .swiper-container').length) {
		let sliders = [],
			breakpoints = {
				0: {
					spaceBetween: 12,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 16,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 16,
					slidesPerView: 5
				}
			},
			contentBreakpoints = {
				0: {
					spaceBetween: 12,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 16,
					slidesPerView: 4
				}
			}

		$('.main > .products .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: breakpoints,
					on: {
						init: swiper => {
							setTimeout(() => {
								productHeight($(swiper.$el), $(swiper.$el).find('.product').length)
							})
						},
						resize: swiper => {
							setTimeout(() => {
								productHeight($(swiper.$el), $(swiper.$el).find('.product').length)
							})
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})

		$('.content .products .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: contentBreakpoints,
					on: {
						init: swiper => {
							setTimeout(() => {
								productHeight($(swiper.$el), $(swiper.$el).find('.product').length)
							})
						},
						resize: swiper => {
							setTimeout(() => {
								productHeight($(swiper.$el), $(swiper.$el).find('.product').length)
							})
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Товар в/из избранное
	$('.product .favorite .btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Товар в/из корзину
	$('.product .buy_btn, .product_info .buy .buy_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Изменение веса товара
	$('body').on('click', '.weight .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.weight'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.weight .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.weight'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.weight .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Слайдер в тексте
	if ($('.text_block .slider_block .swiper-container').length) {
		let sliders = []

		$('.text_block .slider_block .swiper-container').each(function (i) {
			let slides = $(this).find('.slide').length,
				this_ID = $(this).attr('id'),
				options = {
					loop: false,
					speed: 500,
					watchSlidesVisibility: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					breakpoints: {
						0: {
							spaceBetween: 16,
							slidesPerView: 1
						},
						480: {
							spaceBetween: 16,
							slidesPerView: 2
						},
						768: {
							spaceBetween: 16,
							slidesPerView: 3
						},
						1024: {
							spaceBetween: 24,
							slidesPerView: 3
						},
						1280: {
							spaceBetween: 32,
							slidesPerView: 4
						}
					}
				}

			sliders[i] = new Swiper('#' + this_ID, options)

			if (slides > sliders[i].params.slidesPerView) {
				options.loop = true
				sliders[i].destroy(true, true)
				sliders[i] = new Swiper('#' + this_ID, options)
			}
		})
	}


	// Страница товара
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 3
				},
				480: {
					spaceBetween: 12,
					slidesPerView: 4
				},
				768: {
					spaceBetween: 16,
					slidesPerView: 3
				}
			}
		})

		new Swiper('.product_info .big .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			thumbs: {
				swiper: productThumbs
			}
		})
	}


	// Отправка форм
	$('body').on('submit', 'form.custom_submit', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#success_modal',
			type: 'inline'
		}])
	})
})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})
})



$(window).resize(() => {
	// Выравнивание элементов в сетке
	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})
})



// Выравнивание товаров
function productHeight(context, step) {
	let start = 0,
		finish = step,
		$products = context.find('.product')

	$products.find('.name').height('auto')

	$products.each(function () {
		setHeight($products.slice(start, finish).find('.name'))

		start = start + step
		finish = finish + step
	})
}