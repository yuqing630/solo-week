import React from 'react';
import axios from 'axios';
import Weather from './Weather.jsx'

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
          temp: [],
          summary: ''
        }
      }

    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
    this.handleZipCode = this.handleZipCode.bind(this)
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

  render(){
    return(
      <div> Search by location:
      <input type='text' value = {this.state.location} placeholder='location' onChange={(e)=>{this.handleLocation(e)}}></input>
      <button onClick={()=> {this.handleSearch()}}>Search</button>
      <div> Search by zipcode:
      <input type='number' value = {this.state.zipcode} placeholder='zipcode' onChange={(e)=>{this.handleZipCode(e)}}></input>
      <button onClick={()=> {this.handleSearchZipCode()}}>Search</button>
      </div>
      <Weather data={this.state.data} />

      </div>
    )
  }

}

export default Search
