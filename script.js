// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

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

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //Current time variable
var currentHour = dayjs().hour();
console.log(currentHour)
//need an onclick event to set the local storage, so when save button is clicked it saves to local storage

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

//Variable to display current date
var day = dayjs().format('MMM DD, YYYY');
$('#currentDay').text(day);   


function colorChange() {
  $('.time-block').each(function(){
  
    var blockHour = parseInt($(this).attr('id').split('-')[1])
    console.log(blockHour)
    if (blockHour < currentHour){
      $(this).addClass('past')
    }//else if, the block hour is equal to the current hour then we need to remove the past class and add the class of present
    //else remove the class past remove class present remove class future
    

  })

}

colorChange()

//use jquery selectors to get the save data from local storage

//
});
