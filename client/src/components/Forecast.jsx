import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class Forecast extends React.Component{
  constructor(props){
    super(props)
    this.state={
      show: true
    }
    this.clickChange = this.clickChange.bind(this)
  }
    clickChange(){
      this.setState({
        show: !this.state.show
      })
    }
  render(){
    // console.log(this.props.data)
    const tempHigh = this.props.data.daily.data.map((temp, i)=>{
      return(temp.apparentTemperatureHigh)
    })
    const tempLow = this.props.data.daily.data.map((temp, i)=>{
      return(temp.apparentTemperatureLow)
    })
    const temp = this.props.data.hourly.data.map((temp, i)=>{
      return(temp.apparentTemperature)
    })
    const newTemp = temp.slice(0,11)
    const LineChart = ({data}) =>
    <C3Chart data={{json:data}}/>
    const chartData = {
      line: {
        tempHigh: tempHigh,
        tempLow: tempLow
      }
    }
    const chartHourly = {
      line: {
        newTemp: newTemp
      }
    }
   return(


    <div>
      {this.state.show === false
        ? <div onClick={()=>{this.clickChange()}}>
          7 Days Forecast
          <LineChart data={chartData.line} />
         </div>
        :
        <div onClick={()=>{this.clickChange()}} >
          10 Hours Forecast
          <LineChart data={chartHourly.line} />
        </div>}
    </div>
  )
  }
}
export default Forecast;
