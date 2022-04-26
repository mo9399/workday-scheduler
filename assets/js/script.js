$(document).ready(function() {

    // current day is displayed
    $("#currentDay").text(moment().format("ddd, MMMM Do"));

    //asign saveBtn click listener
    $(".saveBtn").on("click", function() {

        //get nearby values
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save in localStorage
        localStorage.setItem(time, text);
    })

    //Load saved data from localStorage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function hourTracking() {
        //current number of hours
        var currentHour = moment().hour();

        //loop over blocks
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").spilt("hour")[1]);

            //check if we have moved past this time
            if(blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    //excute function
    hourTracking();
})