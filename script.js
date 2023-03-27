// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

var hour9El = $('#hour-9');
var hour10El = $('#hour-10');
var hour11El = $('#hour-11');
var hour12El = $('hour-12');
var hour1El = $('hour-1');
var hour2El = $('hour-2');
var hour3El = $('hour-3');
var hour4El = $('hour-4');
var hour5El = $('hour-5');
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



var storage = Jason.parse(localStorage.getItem ('saveCal')) || []
  //Current time variable
  var currentHour = dayjs().format('HH');
  // male loop that loops over each time-block and sets its .value to storage [i]

  //need an onclick event to set the local storage, so when save button is clicked it saves to local storage

  var saveButtonEl = $('.saveBtn');
  saveButtonEl.on('click', function ()) {

    storage = []

    $('.time-block').each(function()) {
      var thisNote = $(this)[0].children[1].value
      storage.push(thisNote)
    }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?


    // TODO: Add code to display the current date in the header of the page.
    //Variable to display current date
    var day = dayjs().format('MMM DD, YYYY');
    $('#currentDay').text(day);


    function colorChange() {
      $('.time-block').each(function () {

        var blockHour = parseInt($(this).attr('id').split('-')[1])
        console.log(blockHour)
        if (blockHour < currentHour) {
          $(this).addClass('past')
        } else if (blockHour == currentHour) {
          $(this).addClass('present')
        } else if (blockHour > currentHour) {
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

    

    colorChange()

    //use jquery selectors to get the save data from local storage

  }
  
});
