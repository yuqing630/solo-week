import React from 'react';
import axios from 'axios';
import Weather from './Weather.jsx';
import Forecast from './Forecast.jsx';


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      zipcode: '',
      data: {
        currently: {
          temperature: ''
        },
        hourly: {
          summary: ''
        },
        daily: {
          data: [],
          summary: ''
        }
      }

    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
    this.handleZipCode = this.handleZipCode.bind(this)
    this.addFavorite = this.addFavorite.bind(this)
    this.favorite = this.favorite.bind(this)

  }

  handleLocation(e){
    this.setState({
      location: e.target.value
    })
  }

  handleSearch(){
    axios.get('/apiGet', {params:{
            location: this.state.location
    }})
    .then((response) => {
    // console.log('this', response.data)
      this.setState({
        data: response.data
      })
    })
    .catch((err) =>{
      console.log("cant get data from server")
    })
    this.setState({
      location: ''
    })
  }

  handleZipCode(e){
    this.setState({
      zipcode:e.target.value
    })
  }

  handleSearchZipCode(){
    axios.get('/apiZip', {params:{
              zipcode: this.state.zipcode
    }})
    .then((response)=>{
      // console.log(response.data)
      this.setState({
        data:response.data
      })
    })
    .catch((err)=>{
      console.log("err getting from api")
    })
    this.setState({
      zipcode: ''
    })
  }
  addFavorite(){
    // console.log('click')
    axios.post('/add', {
      data: this.state.data
    })
    .then((response)=>{
      console.log('add to sever')
    }).catch((err)=>{
      console.log('cant save to server')
    })
  }
  favorite(){
    axios.get('/getFav')
    .then((response)=>{
      console.log(response.data)
      this.setState({
        data: response.data
      })
    }).catch((err)=>{
      console.log('err getting from server')
    })
  }


  render(){
    return(
      <div>
      <button onClick={()=> {this.favorite()}}>favorite</button>
      <div>Search by location:
      <input type='text' value = {this.state.location} placeholder='location' onChange={(e)=>{this.handleLocation(e)}}></input>
      <button onClick={()=> {this.handleSearch()}}>Search</button>
      <div> Search by zipcode:
      <input type='number' value = {this.state.zipcode} placeholder='zipcode' onChange={(e)=>{this.handleZipCode(e)}}></input>
      <button onClick={()=> {this.handleSearchZipCode()}}>Search</button>
      </div>
      </div>

      <Weather data={this.state.data} addFavorite = {this.addFavorite}/>
      <div>
      <Forecast data={this.state.data}/>
      </div>



      </div>
    )
  }

}

export default Search
