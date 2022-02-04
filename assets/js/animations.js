// Animations for events will go in here

var tasks = document.getElementById('tasks');
var taskClass = $('.task');
var tasksOpen = $('#open')
var tasksClose = document.getElementById('close');

tasksOpen.on('click', function(){

    var task1 = $(this).parent().parent().parent().find('div:nth-child(2)');
    var task2 = $(this).parent().parent().parent().find('div:nth-child(3)');
    var task3 = $(this).parent().parent().parent().find('div:nth-child(4)');
    var task4 = $(this).parent().parent().parent().find('div:nth-child(5)');
    var task5 = $(this).parent().parent().parent().find('div:nth-child(6)');

    var task1p = task1.find('p');
    var task2p = task2.find('p');
    var task3p = task3.find('p');
    var task4p = task4.find('p');
    var task5p = task5.find('p');

    console.log(task1);

    TweenMax.to(task1, 0, { height: 0, display: 'flex' });
    TweenMax.to(task2, 0, { height: 0, display: 'flex' });
    TweenMax.to(task3, 0, { height: 0, display: 'flex' });
    TweenMax.to(task4, 0, { height: 0, display: 'flex' });
    TweenMax.to(task5, 0, { height: 0, display: 'flex' });

    TweenMax.to(task1p, 0, { opacity: 0 });
    TweenMax.to(task2p, 0, { opacity: 0 });
    TweenMax.to(task3p, 0, { opacity: 0 });
    TweenMax.to(task4p, 0, { opacity: 0 });
    TweenMax.to(task5p, 0, { opacity: 0 });

    TweenMax.to(task1, 0.2, { height: 100, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(task1p, 0.2, { opacity: 1, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    TweenMax.to(task2, 0.2, { delay: 0.2, height: 100, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(task2p, 0.2, { delay: 0.2, opacity: 1, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    TweenMax.to(task3, 0.2, { delay: 0.4, height: 100, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(task3p, 0.2, { delay: 0.4, opacity: 1, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    TweenMax.to(task4, 0.2, { delay: 0.6, height: 100, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(task4p, 0.2, { delay: 0.6, opacity: 1, transformOrigin:"0% 50%", ease:Power1.easeInOut });

    TweenMax.to(task5, 0.2, { delay: 0.8, height: 100, transformOrigin:"0% 50%", ease:Power1.easeInOut });
    TweenMax.to(task5p, 0.2, { delay: 0.8, opacity: 1, transformOrigin:"0% 50%", ease:Power1.easeInOut });


});

tasksClose.addEventListener('click', function(){

    tasks.style.display = "none";

});