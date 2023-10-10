// app.js
function initDashboard() {
  // Clock and Date
  setInterval(updateClock, 1000);
  updateClock();
  updateDate();
  // Google Calendar Integration
  const scheduleIcalUrl = 'your_schedule_ical_url';
  const sumativesIcalUrl = 'your_sumatives_ical_url';
  fetchAndDisplayEvents(scheduleIcalUrl, 'classes');
  fetchAndDisplayEvents(sumativesIcalUrl, 'evaluations');

  // Weather
  // You can use a weather API here

  // Pomodoro Timer
  // Initialize Pomofocus
  const pomodoro = new Pomofocus();
  pomodoro.init();

  // Google Calendar Integration
  // Fetch and display events from Google Calendar
  // You'll need the Google Calendar API for this

  // Week Counter
  updateWeekCounter();
}

function fetchAndDisplayEvents(icalUrl, containerId) {
  // Fetch iCal data
  $.ajax({
    url: icalUrl,
    dataType: 'text',
    success: function (icalData) {
      // Parse iCal data
      const jcalData = ICAL.parse(icalData);
      const comp = new ICAL.Component(jcalData);
      const vevents = comp.getAllProperties('vevent');

      // Display events on the dashboard
      const eventsContainer = document.getElementById(containerId);
      eventsContainer.innerHTML = ''; // Clear existing events

      vevents.forEach((vevent) => {
        const summary = vevent.getFirstPropertyValue('summary');
        const startDate = vevent.getFirstPropertyValue('dtstart').toString();
        
        // Customize the display as needed
        const eventItem = document.createElement('li');
        eventItem.textContent = `${summary} - ${startDate}`;
        eventsContainer.appendChild(eventItem);
      });
    },
    error: function (error) {
      console.error('Error fetching iCal data:', error);
    }
  });
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
}

function updateDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);
  document.getElementById("date").innerHTML = formattedDate;
}

function updateWeekCounter() {
  // Calculate week count based on a specific start date
  // Display the result in the 'week-counter' div
}
