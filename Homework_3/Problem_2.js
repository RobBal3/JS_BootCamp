// The following code does not work turn it into working code

const flights = {
  flights: [],

  priorityFlights: [],

  scheduleFlight(flight) {
    this.flights.push(flight);
  },

  removeFlight(flight) {
    this.flights = this.flights.filter(flightFilter.bind(this));
    function flightFilter(f) {
      if (flight === f) {
        return this.priorityFlights.includes(flight);
      }
      return true;
    }
  },

  makePriorityFlight(flight) {
    this.priorityFlights.push(flight);
  },
};

flights.scheduleFlight("1");

flights.makePriorityFlight("1");

flights.removeFlight("1");

console.log(flights.flights);
