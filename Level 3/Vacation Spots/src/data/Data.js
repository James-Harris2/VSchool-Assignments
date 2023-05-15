let vacationSpots = [
  {
    place: "Las Vegas, Nevada",
    price: 75,
    timeToGo: "Spring",
  },
  {
    place: "Cancun",
    price: 900,
    timeToGo: "Winter",
  },
  {
    place: "China",
    price: 1200,
    timeToGo: "Fall",
  },
  {
    place: "Russia",
    price: 1100,
    timeToGo: "Summer",
  },
  {
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring",
  },
];

const MyVacationSpots = vacationSpots.map(function(vacationSpots){
    return vacationSpots("place", "price", "timeToGo")});

export default MyVacationSpots;

