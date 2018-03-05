import React from 'react';
import {ReactBootstrap, Grid, Row, Col, code} from 'react-bootstrap'


class Weather extends React.Component {
  constructor(props) {
    super(props)

  }
  render(){

    return(
      <div>
        <Grid>
  <Row className="show-grid">
    <Col xs={12} md={12}>
      <code>
        <ul>Current temp: {this.props.data.currently.temperature}&#176;F</ul>
        <ul>Daily Summary: {this.props.data.hourly.summary}</ul>
        <ul>Forecast: {this.props.data.daily.summary}</ul>
      </code>
    </Col>
  </Row>
</Grid>
    <button onClick={()=> {this.props.addFavorite()}}>Like</button>

      </div>
    )
  }
}
export default Weather;
