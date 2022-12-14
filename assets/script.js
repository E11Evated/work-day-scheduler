
var timeNow = moment().hour();
var todayDate = moment().format('dddd, MMM Do YYYY, h:mm:ss a');
$("#currentDay").html(todayDate);

$(document).ready(function () {
     
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

       
        localStorage.setItem(time, text);
    });
   
    $('.notification').addClass('show');

    setTimeout(function () {
        $('.notification').addClass('show');
    }, 5000);


    function timeTracker() {
        
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);
            console.log("timeNow " + timeNow)
            console.log("blockTime " + blockTime)
        
            if (blockTime < timeNow) {
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");

            }
        })
    };

    
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    timeTracker();
})

$('.notification').addClass('show');
setTimeout(function () {
$('.notification').addClass('show');
}, 5000);
  