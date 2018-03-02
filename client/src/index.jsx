import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import Weather from './components/Weather.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }



  render(){
    return(
      <div>
      <Search />

      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
