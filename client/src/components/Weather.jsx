import React from 'react';


class Weather extends React.Component {
  constructor(props) {
    super(props)

  }
  render(){
    return(
      <div>
      {this.props.data.currently.temperture}
      {this.props.data.hourly.summary}
      {this.props.data.daily.summary}
      </div>
    )
  }
}
export default Weather;
