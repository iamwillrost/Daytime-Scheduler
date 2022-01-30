// display current date
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// save button clicked
$('.saveBtn').click(function() {
    // get values
    let taskTime = $(this).parent().attr('id');
    let taskText = $(this).siblings('.description').val();

    // save to local storage
    localStorage.setItem(taskTime, taskText)
})

// today's time variable
let currentTime = moment().hour();

function timeAudit() {
    // loop through each time block
    $('.time-block').each(function() {
        // get numerical value from each hour id using parse(returns integer)) and replace(turn hour into empty string)
        //could also use .split('hour')[1] instead of .replace
        let blockTime = parseInt($(this).attr('id').replace('hour', ''));
        // compare times to determine background color
        if (blockTime > currentTime) {
            $(this).addClass("future");
        } else if (blockTime === currentTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past")
        }
    })     
};

// run timeAudit function
timeAudit();

//load stored tasks
$('#hour9 .description').text(localStorage.getItem('hour9'));
$('#hour10 .description').text(localStorage.getItem('hour10'));
$('#hour11 .description').text(localStorage.getItem('hou11'));
$('#hour12 .description').text(localStorage.getItem('hour12'));
$('#hour13 .description').text(localStorage.getItem('hour13'));
$('#hour14 .description').text(localStorage.getItem('hour14'));
$('#hour15 .description').text(localStorage.getItem('hour15'));
$('#hour16 .description').text(localStorage.getItem('hour16'));
$('#hour17 .description').text(localStorage.getItem('hour17'));


