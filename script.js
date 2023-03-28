// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

var hour9El = $('#hour-9');
var hour10El = $('#hour-10');
var hour11El = $('#hour-11');
var hour12El = $('hour-12');
var hour1El = $('hour-13');
var hour2El = $('hour-14');
var hour3El = $('hour-15');
var hour4El = $('hour-16');
var hour5El = $('hour-17');
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //



var storage = JSON.parse(localStorage.getItem ('saveCal')) || []
  //Current time variable
  var currentHour = dayjs().format('HH');
  console.log(currentHour)
  function updateTime(){

  }
  // make loop that loops over each time-block and sets its .value to storage [i]

  //need an onclick event to set the local storage, so when save button is clicked it saves to local storage

  var saveButtonEl = $('.saveBtn');
  saveButtonEl.on('click', function () {
    var value = $(this).siblings('.description').val()
    var hour = $(this).parent().attr('id')
    console.log(hour)
    localStorage.setItem(hour, value)

  })
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?


    // TODO: Add code to display the current date in the header of the page.
    //Variable to display current date
    var day = dayjs().format('MMM DD, YYYY');
    $('#currentDay').text(day);
    $('#hour-9 .description').val(localStorage.getItem('hour-9'))
    $('#hour-10 .description').val(localStorage.getItem('hour-10'))
    $('#hour-11 .description').val(localStorage.getItem('hour-11'))
    $('#hour-12 .description').val(localStorage.getItem('hour-12'))
    $('#hour-13 .description').val(localStorage.getItem('hour-13'))
    $('#hour-14 .description').val(localStorage.getItem('hour-14'))
    $('#hour-15 .description').val(localStorage.getItem('hour-15'))
    $('#hour-16 .description').val(localStorage.getItem('hour-16'))
    $('#hour-17 .description').val(localStorage.getItem('hour-17'))



    function colorChange() {
      $('.time-block').each(function () {

        var blockHour = parseInt($(this).attr('id').split('-')[1])
        console.log(blockHour)
        if (blockHour < currentHour) {
          $(this).addClass('past')
        } else if (blockHour == currentHour) {
          $(this).removeClass('past')
          $(this).addClass('present')
        } else {
          $(this).removeClass('past')
          $(this).removeClass('present')
          $(this).addClass('future')
        }
        //else if, the block hour is equal to the current hour then we need to remove the past class and add the class of present
        //else remove the class past remove class present remove class future

        // TODO: Add code to apply the past, present, or future class to each time
        // block by comparing the id to the current hour. HINTS: How can the id
        // attribute of each time-block be used to conditionally add or remove the
        // past, present, and future classes? How can Day.js be used to get the
        // current hour in 24-hour time?


      })

    

    

    //use jquery selectors to get the save data from local storage

  }
  colorChange()
});
