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



  //local storage
  var storage = JSON.parse(localStorage.getItem('saveCal')) || []

  var currentHour = dayjs().format('HH');
  console.log(currentHour)
  function updateTime() {

  }
  //onclick event to set the local storage
  var saveButtonEl = $('.saveBtn');
  saveButtonEl.on('click', function () {
    var value = $(this).siblings('.description').val()
    var hour = $(this).parent().attr('id')
    
    localStorage.setItem(hour, value)

  })

  localStorage.setItem('saveCal', JSON.stringify (storage));
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  
  //displays current day
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


  //function to set color to coencide with the time
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



    })

  }
  colorChange()
});
