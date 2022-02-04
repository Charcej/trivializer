// // Animations for events will go in here

// var tasks = document.getElementById('tasks');
// var taskClass = $('.task');
// var tasksOpen = $('#open')
// var tasksClose = document.getElementById('close');

// tasksOpen.on('click', function(){

//     var task1 = $(this).parent().parent().parent().find('div:nth-child(2)');
//     var task2 = $(this).parent().parent().parent().find('div:nth-child(3)');
//     var task3 = $(this).parent().parent().parent().find('div:nth-child(4)');
//     var task4 = $(this).parent().parent().parent().find('div:nth-child(5)');
//     var task5 = $(this).parent().parent().parent().find('div:nth-child(6)');

//     var task1p = task1.find('p');
//     var task2p = task2.find('p');
//     var task3p = task3.find('p');
//     var task4p = task4.find('p');
//     var task5p = task5.find('p');

//     console.log(task1);

//     TweenMax.to(task1, 0, { height: 0, display: 'flex' });
//     TweenMax.to(task2, 0, { height: 0, display: 'flex' });
//     TweenMax.to(task3, 0, { height: 0, display: 'flex' });
//     TweenMax.to(task4, 0, { height: 0, display: 'flex' });
//     TweenMax.to(task5, 0, { height: 0, display: 'flex' });

//     TweenMax.to(task1p, 0, { opacity: 0 });
//     TweenMax.to(task2p, 0, { opacity: 0 });
//     TweenMax.to(task3p, 0, { opacity: 0 });
//     TweenMax.to(task4p, 0, { opacity: 0 });
//     TweenMax.to(task5p, 0, { opacity: 0 });

//     TweenMax.to(task1, 0.2, { height: 100, transformOrigin:"0% 50%", ease:Power1.easeInOut });
//     TweenMax.to(task1p, 0.2, { opacity: 1, transformOrigin:"0% 50%", ease:Power1.easeInOut });

//     TweenMax.to(task2, 0.2, { delay: 0.2, height: 100, transformOrigin:"0% 50%", ease:Power1.easeInOut });
//     TweenMax.to(task2p, 0.2, { delay: 0.2, opacity: 1, transformOrigin:"0% 50%", ease:Power1.easeInOut });

//     TweenMax.to(task3, 0.2, { delay: 0.4, height: 100, transformOrigin:"0% 50%", ease:Power1.easeInOut });
//     TweenMax.to(task3p, 0.2, { delay: 0.4, opacity: 1, transformOrigin:"0% 50%", ease:Power1.easeInOut });

//     TweenMax.to(task4, 0.2, { delay: 0.6, height: 100, transformOrigin:"0% 50%", ease:Power1.easeInOut });
//     TweenMax.to(task4p, 0.2, { delay: 0.6, opacity: 1, transformOrigin:"0% 50%", ease:Power1.easeInOut });

//     TweenMax.to(task5, 0.2, { delay: 0.8, height: 100, transformOrigin:"0% 50%", ease:Power1.easeInOut });
//     TweenMax.to(task5p, 0.2, { delay: 0.8, opacity: 1, transformOrigin:"0% 50%", ease:Power1.easeInOut });


// });

// tasksClose.addEventListener('click', function(){

//     tasks.style.display = "none";

// });

$(document).ready(function() {

    $('#sticky-1').hover(over,out);

        function over(){
        
            TweenMax.to($(this), 0.3, { right: -40, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }

        function out(){
        
            TweenMax.to($(this), 0.3, { right: -150, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }

        $('#sticky-2').hover(over,out);

        function over(){
        
            TweenMax.to($(this), 0.3, { right: -40, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }

        function out(){
        
            TweenMax.to($(this), 0.3, { right: -150, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }

        $('#sticky-3').hover(over,out);

        function over(){
        
            TweenMax.to($(this), 0.3, { right: -40, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }

        function out(){
        
            TweenMax.to($(this), 0.3, { right: -150, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }

        $('#sticky-4').hover(over,out);

        function over(){
        
            TweenMax.to($(this), 0.3, { right: -40, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }

        function out(){
        
            TweenMax.to($(this), 0.3, { right: -150, transformOrigin:"50% 50%", ease:Power1.easeInOut });
        }
    
});

$('#sticky-1').on('click', function(){

    var guide = document.getElementById('guide');
    var selection = document.getElementById('selection');

    guide.style.display = "none";
    selection.style.display = "none";

    var quiz = document.getElementById('quiz');

    quiz.style.display = "flex";

});

$('header ul li').on('click', function(){

    var span = $(this).find('span');

    TweenMax.to(span, 0, { opacity: 0 });
    TweenMax.to(span, 0.4, { top: 8, opacity: 1, transformOrigin:"50% 50%", ease:Power1.easeInOut });

});

$('#genre-label1').on('click', function(){

    if (document.getElementById('genre-1').checked){
        console.log('works-1');
    }

});

$('#genre-label2').on('click', function(){

    if (document.getElementById('genre-2').checked){
        console.log('works-2');
    }

});

$('#genre-label3').on('click', function(){

    if (document.getElementById('genre-3').checked){
        console.log('works-3');
    }

});

$('#genre-label4').on('click', function(){

    if (document.getElementById('genre-4').checked){
        console.log('works-4');
    }

});

$('#genre-label5').on('click', function(){

    if (document.getElementById('genre-5').checked){
        console.log('works-5');
    }

});

$('#genre-label6').on('click', function(){

    if (document.getElementById('genre-6').checked){
        console.log('works-6');
    }

});

$('#genre-label7').on('click', function(){

    if (document.getElementById('genre-7').checked){
        console.log('works-7');
    }

});

$('#genre-label8').on('click', function(){

    if (document.getElementById('genre-8').checked){
        console.log('works-8');
    }

});
