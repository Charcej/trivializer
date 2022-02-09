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


// Header + Footer Displays

var header = $('header');
var headerUL = $('header ul');

var link1 = headerUL.find('li:nth-child(1)');
var link2 = headerUL.find('li:nth-child(2)');
var link3 = headerUL.find('li:nth-child(3)');
var link4 = headerUL.find('li:nth-child(4)');

link3.on('click', function(){

    callDashboardPage();

});

function callDashboardPage(){
    var page1 = document.getElementById('page-1');
    var page2 = document.getElementById('page-2');
    var page3 = document.getElementById('page-dashboard');

    page1.style.display = "none";

    page2.style.display = "none";

    page3.style.display = "block";

    new Circlebar({
        element : "#progressBar",
        type : "progress",
        size : "150px",
        dialWidth: 18,
        fontSize:"24px",
        fontColor:"rgb(255, 255, 255)",
        maxValue : 100,
    });
}


// On Click Label animations

var label1click = 0;
var label2click = 0;
var label3click = 0;
var label4click = 0;
var label5click = 0;
var label6click = 0;
var label7click = 0;
var label8click = 0;

$('#genre-label1').on('click', function(){

    // if (document.getElementById('genre-1').checked){
    //     console.log('works-1');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    var allLeft = $('.left-check');
    var allRight = $('.right-check');

    if (label1click == 1) {

        TweenMax.to(leftCheck, 0, { display: "none" });
        TweenMax.to(rightCheck, 0, { display: "none" });

        label1click--;
        return label1click;

    }

    if (label1click == 0){

    TweenMax.to(allLeft, 0, { display: "none" });
    TweenMax.to(allRight, 0, { display: "none" });
    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    label1click++;

    return label1click;

    }

});

$('#genre-label2').on('click', function(){

    // if (document.getElementById('genre-2').checked){
    //     console.log('works-2');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    var allLeft = $('.left-check');
    var allRight = $('.right-check');

    if (label2click == 1) {

        TweenMax.to(leftCheck, 0, { display: "none" });
        TweenMax.to(rightCheck, 0, { display: "none" });

        label2click--;
        return label2click;

    }

    if (label2click == 0){

    TweenMax.to(allLeft, 0, { display: "none" });
    TweenMax.to(allRight, 0, { display: "none" });
    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    label2click++;

    return label2click;

    }

});

$('#genre-label3').on('click', function(){

    // if (document.getElementById('genre-3').checked){
    //     console.log('works-3');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    var allLeft = $('.left-check');
    var allRight = $('.right-check');

    if (label3click == 1) {

        TweenMax.to(leftCheck, 0, { display: "none" });
        TweenMax.to(rightCheck, 0, { display: "none" });

        label3click--;
        return label3click;

    }

    if (label3click == 0){

    TweenMax.to(allLeft, 0, { display: "none" });
    TweenMax.to(allRight, 0, { display: "none" });
    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    label3click++;

    return label3click;

    }

});

$('#genre-label4').on('click', function(){

    // if (document.getElementById('genre-4').checked){
    //     console.log('works-4');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    var allLeft = $('.left-check');
    var allRight = $('.right-check');

    if (label4click == 1) {

        TweenMax.to(leftCheck, 0, { display: "none" });
        TweenMax.to(rightCheck, 0, { display: "none" });

        label4click--;
        return label4click;

    }

    if (label4click == 0){

    TweenMax.to(allLeft, 0, { display: "none" });
    TweenMax.to(allRight, 0, { display: "none" });
    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    label4click++;

    return label4click;

    }

});

$('#genre-label5').on('click', function(){

    // if (document.getElementById('genre-5').checked){
    //     console.log('works-5');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    var allLeft = $('.left-check');
    var allRight = $('.right-check');

    if (label5click == 1) {

        TweenMax.to(leftCheck, 0, { display: "none" });
        TweenMax.to(rightCheck, 0, { display: "none" });

        label5click--;
        return label5click;

    }

    if (label5click == 0){

    TweenMax.to(allLeft, 0, { display: "none" });
    TweenMax.to(allRight, 0, { display: "none" });
    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    label5click++;

    return label5click;

    }

});

$('#genre-label6').on('click', function(){

    // if (document.getElementById('genre-6').checked){
    //     console.log('works-6');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    var allLeft = $('.left-check');
    var allRight = $('.right-check');

    if (label6click == 1) {

        TweenMax.to(leftCheck, 0, { display: "none" });
        TweenMax.to(rightCheck, 0, { display: "none" });

        label6click--;
        return label6click;

    }

    if (label6click == 0){

    TweenMax.to(allLeft, 0, { display: "none" });
    TweenMax.to(allRight, 0, { display: "none" });
    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    label6click++;

    return label6click;

    }

});

$('#genre-label7').on('click', function(){

    // if (document.getElementById('genre-7').checked){
    //     console.log('works-7');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    var allLeft = $('.left-check');
    var allRight = $('.right-check');

    if (label7click == 1) {

        TweenMax.to(leftCheck, 0, { display: "none" });
        TweenMax.to(rightCheck, 0, { display: "none" });

        label7click--;
        return label7click;

    }

    if (label7click == 0){

    TweenMax.to(allLeft, 0, { display: "none" });
    TweenMax.to(allRight, 0, { display: "none" });
    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    label7click++;

    return label7click;

    }

});

$('#genre-label8').on('click', function(){

    // if (document.getElementById('genre-8').checked){
    //     console.log('works-8');
    // }

    var div = $(this).find('div');
    var leftCheck = div.find('.left-check');
    var rightCheck = div.find('.right-check');

    var allLeft = $('.left-check');
    var allRight = $('.right-check');

    if (label8click == 1) {

        TweenMax.to(leftCheck, 0, { display: "none" });
        TweenMax.to(rightCheck, 0, { display: "none" });

        label8click--;
        return label8click;

    }

    if (label8click == 0){

    TweenMax.to(allLeft, 0, { display: "none" });
    TweenMax.to(allRight, 0, { display: "none" });
    TweenMax.to(leftCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(rightCheck, 0, { display: "flex", width: 0 });
    TweenMax.to(leftCheck, 0.2, { width: 7, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(rightCheck, 0.2, { delay: 0.2, width: 21, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    label8click++;

    return label8click;

    }

});
