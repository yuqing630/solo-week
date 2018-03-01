import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      data: {
        currently: {
          temperture: ''
        },
        hourly: {
          summary: ''
        },
        daily: {
          summary: ''
        }
      }

    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
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
    console.log('this', response.data)
    this.setState({
      data: response.data
    })
  }).catch((err) =>{
    console.log("cant get data from server")
  })
  this.setState({
    location: ''
  })

  }
  render(){
    return(
      <div> Search Location:
      <input type='text' value = {this.state.location} placeholder='location' onChange={(e)=>{this.handleLocation(e)}}></input>
      <button onClick={()=> {this.handleSearch()}}>Search</button>

      <Weather data={this.state.data} />

      </div>
    )
  }

}

export default Search
