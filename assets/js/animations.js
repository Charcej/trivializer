// Sticky Hover Animations

var guidePointer = new TimelineMax({repeat:-1});

var guideSpan1 = $('#guide-buttons').find('.red');
var guideSpan2 = $('#guide-sticky').find('.green');

var sticky = document.getElementById('stick-buttons');
var page1 = document.getElementById('page-1');
var page2 = document.getElementById('page-2');
var page3 = document.getElementById('page-dashboard');
var page4 = document.getElementById('page-about');
var page5 = document.getElementById('page-contact');


guidePointer
.to($('#pointer'), 0, { opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut }, 0)
.to($('#pointer'), 0.4, { opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut }, 0)
.to($('#pointer'), 1.4, { y: 110, x: -35, transformOrigin:"50% 50%", ease:Power1.easeInOut }, 0)
.to(guideSpan1, 0.4, { delay: 1.4, opacity: 0.7, transformOrigin:"50% 50%", ease:Power1.easeInOut }, 0)
.to($('#pointer'), 0.4, { delay: 1.4, opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut }, 0)
.to(guideSpan1, 0.4, { delay: 1.8, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut }, 0)
.to($('#pointer'), 0.4, { delay: 1.8, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut }, 0)
.to($('#pointer'), 1.2, { delay: 2.2, y: -135, x: 90, transformOrigin:"50% 50%", ease:Power1.easeInOut }, 0)
.to(guideSpan2, 0.4, { delay: 3.4, width: 70, transformOrigin:"50% 100%", ease:Power1.easeInOut }, 0)
.to($('#pointer'), 0.4, { delay: 3.4, opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut }, 0)
.to($('#pointer'), 0.4, { delay: 3.8, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut }, 0)
.to(guideSpan2, 1, { delay: 5, width: 40, transformOrigin:"50% 100%", ease:Power1.easeInOut }, 0)
.to($('#pointer'), 1, { delay: 5, opacity: 0, transformOrigin:"50% 50%", ease:Power1.easeInOut }, 0)
.to($('#pointer'), 1, { delay: 6, x:0, y:0, transformOrigin:"50% 50%", ease:Power1.easeInOut }, 0);

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

// Sticky - Displays

$('#sticky-1').on('click', function(){

    sticky.style.display = "none";

    page1.style.display = "none";

    page2.style.display = "block";

    page3.style.display = "none";

    page4.style.display = "none";

    page5.style.display = "none";

    // $('#sticky-1').off();
    // $('#sticky-2').off();
    // $('#sticky-3').off();

    // TweenMax.to($('#sticky-1'), 0.3, { right: -260, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    // TweenMax.to($('#sticky-2'), 0.3, { delay: 0.3, right: -260, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    // TweenMax.to($('#sticky-3'), 0.3, { delay: 0.6, right: -260, transformOrigin:"50% 50%", ease:Power1.easeInOut });


});

$('#sticky-2').on('click', function(){

    sticky.style.display = "none";

    page1.style.display = "none";

    page2.style.display = "block";

    page3.style.display = "none";

    page4.style.display = "none";

    page5.style.display = "none";

    // $('#sticky-1').off();
    // $('#sticky-2').off();
    // $('#sticky-3').off();

    // TweenMax.to($('#sticky-1'), 0.3, { delay: 0.6, right: -260, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    // TweenMax.to($('#sticky-2'), 0.3, { right: -260, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    // TweenMax.to($('#sticky-3'), 0.3, { delay: 0.3, right: -260, transformOrigin:"50% 50%", ease:Power1.easeInOut });

});

$('#sticky-3').on('click', function(){

    sticky.style.display = "none";

    page1.style.display = "none";

    page2.style.display = "block";

    page3.style.display = "none";

    page4.style.display = "none";

    page5.style.display = "none";

    // $('#sticky-1').off();
    // $('#sticky-2').off();
    // $('#sticky-3').off();

    // TweenMax.to($('#sticky-1'), 0.3, { delay: 0.3, right: -260, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    // TweenMax.to($('#sticky-2'), 0.3, { delay: 0.6, right: -260, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    // TweenMax.to($('#sticky-3'), 0.3, { right: -260, transformOrigin:"50% 50%", ease:Power1.easeInOut });

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

link1.on('click', function(){

    sticky.style.display = "flex";

    page1.style.display = "block";

    page2.style.display = "none";

    page3.style.display = "none";

    page4.style.display = "none";

    page5.style.display = "none";

    // $('#sticky-1').on();
    // $('#sticky-2').on();
    // $('#sticky-3').on();

    // TweenMax.to($('#sticky-1'), 0.3, { right: -40, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    // TweenMax.to($('#sticky-2'), 0.3, { delay: 0.3, right: -40, transformOrigin:"50% 50%", ease:Power1.easeInOut });
    // TweenMax.to($('#sticky-3'), 0.3, { delay: 0.6, right: -40, transformOrigin:"50% 50%", ease:Power1.easeInOut });

});

link2.on('click', function(){

    sticky.style.display = "none";

    page1.style.display = "none";

    page2.style.display = "none";

    page3.style.display = "none";

    page4.style.display = "block";

    page5.style.display = "none";

    var bar1 = $('.code-bar').find('.orange');
    var bar2 = $('.code-bar').find('.purple');
    var bar3 = $('.code-bar').find('.yellow');

    var per1 = bar1.parent().find('.code-per');
    var per2 = bar2.parent().find('.code-per');
    var per3 = bar3.parent().find('.code-per');

    TweenMax.to(bar1, 0, { width: 0 });
    TweenMax.to(bar2, 0, { width: 0 });
    TweenMax.to(bar3, 0, { width: 0 });
    TweenMax.to(bar1, 0.5, { width: 156, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(bar2, 0.5, { delay: 0.4, width: 92, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(bar3, 0.5, { delay: 0.8, width: 152, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    var target1 = 39;
    var target2 = 23;
    var target3 = 38;

    var number1 = per1.text();
    var number2 = per2.text();
    var number3 = per3.text();
    
    var interval1 = setInterval(function() {
        per1.text(number1 + ' %');
        if (number1 >= target1) clearInterval(interval1);
        number1++;
    }, 20);

    var interval2 = setInterval(function() {
        per2.text(number2 + ' %');
        if (number2 >= target2) clearInterval(interval2);
        number2++;
    }, 20);

    var interval3 = setInterval(function() {
        per3.text(number3 + ' %');
        if (number3 >= target3) clearInterval(interval3);
        number3++;
    }, 20);

});

link3.on('click', function(){

    callDashboardPage();

});

function callDashboardPage(){

    sticky.style.display = "none";

    page1.style.display = "none";

    page2.style.display = "none";

    page3.style.display = "block";

    page4.style.display = "none";

    page5.style.display = "none";

    console.log(totalScore);

    circleNumber = (totalScore / 15) * 100;

    circleValue = Math.round(circleNumber);

    new Circlebar({
        element : "#progressBar",
        type : "progress",
        size : "150px",
        dialWidth: 18,
        fontSize:"24px",
        fontColor:"rgb(255, 255, 255)",
        maxValue : circleValue,
    });
}

link4.on('click', function(){

    sticky.style.display = "none";

    page1.style.display = "none";

    page2.style.display = "none";

    page3.style.display = "none";

    page4.style.display = "none";

    page5.style.display = "block";

});


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