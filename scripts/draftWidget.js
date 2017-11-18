$(document).ready(function() {
  $('#calendar').fullCalendar({
      // put your options and callbacks here
      defaultDate: "1/5/2015",
      header:
      {
        left:false,
        center:false,
        right:false,

      },
      defaultView: 'agendaWeek',
      weekends: false,
      minTime: "07:00:00",
      maxTime: "21:00:00",
      allDaySlot: false,

      events: [
              {
                title: 'STAT 1000 A03',
                start: 'Mon, 5 Jan 2015 10:30:00',
                end: 'Mon, 5 Jan 2015 11:20:00',
                color: 'red',
                textColor: 'black',
              },
              {
                title: 'STAT 1000 A03',
                start: 'Wed, 7 Jan 2015 10:30:00',
                end: 'Wed, 7 Jan 2015 11:20:00',
                color: 'red',
                textColor: 'black',
              },
              {
                title: 'STAT 1000 A03',
                start: 'Fri, 9 Jan 2015 10:30:00',
                end: 'Fri, 9 Jan 2015 11:20:00',
                color: 'red',
                textColor: 'black',
              },

              {
                title: 'COMP 2160 A01',
                start: 'Tues, 6 Jan 2015 9:30:00',
                end: 'Tues, 6 Jan 2015 10:45:00',
              },
              {
                title: 'COMP 2160 A01',
                start: 'Thurs, 8 Jan 2015 9:30:00',
                end: 'Thurs, 8 Jan 2015 10:45:00',
              },
              {
                title: 'COMP 2160 B08',
                start: 'Thurs, 8 Jan 2015 12:00:00',
                end: 'Thurs, 8 Jan 2015 13:00:00',
              },
            ],
            eventClick: function(event) {
              if (event.url) {
                window.open(event.url);
                return false;
              }
            }
});
  $(".fc-day-header.fc-mon").html("Mon");
  $(".fc-day-header.fc-tue").html("Tues");
  $(".fc-day-header.fc-wed").html("Wed");
  $(".fc-day-header.fc-thu").html("Thurs");
  $(".fc-day-header.fc-fri").html("Fri");
});
