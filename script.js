
$(document).ready(function () {
 

   //local storage
  var storage = JSON.parse(localStorage.getItem('saveCal')) || []

  
  //function to set time
  function updateTime() {
  var currentHour = dayjs().format('HH');
  console.log(currentHour)
  $('.time-block').each(function () {
  //function to set color to coincide with the time
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
  updateTime();
  setInterval(updateTime, 10000)
  //onclick event to set the local storage
  var saveButtonEl = $('.saveBtn');
  saveButtonEl.on('click', function () {
    var value = $(this).siblings('.description').val()
    var hour = $(this).parent().attr('id')
    
    localStorage.setItem(hour, value)

  })

  localStorage.setItem('saveCal', JSON.stringify (storage));
  

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

});
