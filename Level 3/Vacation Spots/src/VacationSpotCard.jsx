

 export default function VacationSpotCard () {
  return (
    <div className="vacationspot">
      <img src="{props.imageURL}" alt="vacation spot" />
      <h2> {this.props.place}</h2>
      <p> {this.props.timeToGo} </p>
      <ul>
        <li>
          <span>Price:</span> {this.props.price}
        </li>
        <li>
          <span>Best time to go:</span> {this.props.timeToGo}

        </li>
      </ul>
    </div>
  );
}
