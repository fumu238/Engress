$(function () {
	
    // spメニュー
    $('.burger-btn').click(function() {

        $('.sp-nav').toggleClass('sp-nav--open'); // メニューオープン
        $('.burger-btn').toggleClass('burger-btn--cross'); // ボタン変形
		
	});

	// faqアコーディオンメニュー
	$('.faq__question').click(function() {

		// クリックされた要素の次の要素をスライドで出したり消したり
		var findElm = $(this).next(".faq__answer");
		$(findElm).slideToggle();
		
		// アコーディオンのバッテン
		$(this).toggleClass("faq__question--rotate");
		
	});
    

});
