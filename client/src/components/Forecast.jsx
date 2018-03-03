import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class Forecast extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const tempHigh = this.props.data.daily.data.map((temp, i)=>{
      // console.log('inside map',temp.apparentTemperatureHigh)
      return(temp.apparentTemperatureHigh)
    })
    const tempLow = this.props.data.daily.data.map((temp, i)=>{
      return(temp.apparentTemperatureLow)
    })
    // console.log('newdata',newData)
    const LineChart = ({data}) =>
    <C3Chart data={{json:data}}/>
    const chartData = {
      line: {
        tempHigh: tempHigh,
        tempLow: tempLow
      }
    }
   return(


    <div> 7 Days Forecast
       <LineChart data={chartData.line} />

    </div>
  )
  }
}
export default Forecast;
