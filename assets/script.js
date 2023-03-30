//calling all variables by their id so I can compare to the dayjs current time
var nineAm = $('#09').attr('id');
var tenAm = $('#10').attr('id');
var elevenAm = $('#11').attr('id');
var twelvePm = $('#12').attr('id');
var onePm = $('#13').attr('id');
var twoPm = $('#14').attr('id');
var threePm = $('#15').attr('id');
var fourPm = $('#16').attr('id');
var fivePm = $('#17').attr('id');


//running function to save the value of the text area to the keyed value of the parent id (time)
$(function () {
    $('.saveBtn').on('click',function(event){
        event.preventDefault();
        var id = $(this).parent().attr('id');
        var text = $(this).prev().val();
        localStorage.setItem(id,text);
    })
});

//setting current time variable equal to the hour of day using day js
    var currentTime = dayjs().hour();

//setting past/present/future classes to each time-block based on the comparison of the time (id) to the current time
    $('.time-block').each(function (){
        var timeLabel = $(this).attr('id')
        if ($(this).attr('id')==currentTime){
            $(this).addClass('present');
        } else if ($(this).attr('id') > currentTime){
            $(this).addClass('future');
        } else {
            $(this).addClass('past');
        }
    //using local storage to get the value of anything saved in a text area to store within the id of the div it belongs in
    $(this).children('textarea').val(localStorage.getItem(timeLabel))


 //using dayjs to set todays date 
    var todayDate= dayjs();
    $('#currentDay').text(todayDate.format('dddd MMMM D, YYYY'));
    

  });
  
    timeInterval=setInterval(function(){
        var timeNow=dayjs();
        $('#timeNow').text(timeNow.format('hh : mm ss a'));
    }, 1000);
  
