$(document).ready(function() {

// Sticky Hover Animations

    $('#sticky-1').hover(over,out);

        function over(){
        
            TweenMax.to($(this), 0.3, { right: -40, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }

        function out(){
        
            TweenMax.to($(this), 0.3, { right: -175, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }

        $('#sticky-2').hover(over,out);

        function over(){
        
            TweenMax.to($(this), 0.3, { right: -40, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }

        function out(){
        
            TweenMax.to($(this), 0.3, { right: -175, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }

        $('#sticky-3').hover(over,out);

        function over(){
        
            TweenMax.to($(this), 0.3, { right: -40, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }

        function out(){
        
            TweenMax.to($(this), 0.3, { right: -175, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }
    
});

// Sticky - Displays

$('#sticky-1').on('click', function(){

    var page1 = document.getElementById('page-1');
    var page2 = document.getElementById('page-2');

    page1.style.display = "none";

    page2.style.display = "block";

});

$('#sticky-2').on('click', function(){

    var page1 = document.getElementById('page-1');
    var page2 = document.getElementById('page-2');

    page1.style.display = "none";

    page2.style.display = "block";

});

$('#sticky-3').on('click', function(){

    var page1 = document.getElementById('page-1');
    var page2 = document.getElementById('page-2');

    page1.style.display = "none";

    page2.style.display = "block";

});


// Header + Footer Animations

$('header ul li').on('click', function(){

    var span = $(this).find('span');

    var other = $('header ul li').find('span');
    var footerSpans = $('footer ul li').find('span');

    TweenMax.to(span, 0, { opacity: 0 });
    TweenMax.to(other, 0.4, { top: 50, opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    TweenMax.to(span, 0.4, { top: 0, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    TweenMax.to(footerSpans, 0.4, { bottom: 50, opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    

});

$('footer ul li').on('click', function(){

    var span = $(this).find('span');

    var other = $('footer ul li').find('span');
    var headerSpans = $('header ul li').find('span');

    TweenMax.to(span, 0, { opacity: 0 });
    TweenMax.to(other, 0.4, { bottom: 50, opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    TweenMax.to(span, 0.4, { bottom: 0, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    TweenMax.to(headerSpans, 0.4, { top: 50, opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    

});

// On Click Label animations

$('#genre-label1').on('click', function(){

    // if (document.getElementById('genre-1').checked){
    //     console.log('works-1');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

});

$('#genre-label2').on('click', function(){

    // if (document.getElementById('genre-2').checked){
    //     console.log('works-2');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

});

$('#genre-label3').on('click', function(){

    // if (document.getElementById('genre-3').checked){
    //     console.log('works-3');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

});

$('#genre-label4').on('click', function(){

    // if (document.getElementById('genre-4').checked){
    //     console.log('works-4');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

});

$('#genre-label5').on('click', function(){

    // if (document.getElementById('genre-5').checked){
    //     console.log('works-5');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

});

$('#genre-label6').on('click', function(){

    // if (document.getElementById('genre-6').checked){
    //     console.log('works-6');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

});

$('#genre-label7').on('click', function(){

    // if (document.getElementById('genre-7').checked){
    //     console.log('works-7');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

});

$('#genre-label8').on('click', function(){

    // if (document.getElementById('genre-8').checked){
    //     console.log('works-8');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

});
