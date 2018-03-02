import React from 'react';


class Weather extends React.Component {
  constructor(props) {
    super(props)

  }
  render(){

    return(
      <div>
      <ul>Current temp: {this.props.data.currently.temperature}&#176;F</ul>

      <ul>Daily Summary: {this.props.data.hourly.summary}</ul>
      <ul>Forecast: {this.props.data.daily.summary}</ul>
      <button onClick={()=> {this.props.addFavorite()}}>Like</button>


      </div>
    )
  }
}
export default Weather;
