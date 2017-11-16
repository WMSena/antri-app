import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      name: '',
      nomor: []
    }
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState();
  }

  

  componentWillMount(){
    this.getData()
    this.getNomor()
  }
  
  onSubmit = (e) => {
    const { name, status } = this.state;

    axios.post('/api/antrian', { name, status})
    .then(function(){

    })
    .catch(function(){
    })
  }
  
  render() {
    return (
      
      <div>
        <div class="form-control">
        <form onSubmit={this.onSubmit}>
          <input type="text" class="form" name="name" onChange={this.onChange} />
          <button type="submit" class="btn">Ambil Nomor</button>
          </form>
        </div>
        <div class="content">
          {this.state.nomor.map((d) => {
            return (
            
              <h3>Nomor Antrian Anda Adalah : {d.id} </h3>
            
            )
          })}
          {this.state.data.map((data) => {
            return (
            <ul>
              <li>{data.id}. {data.name} </li>
            </ul>
            )
          })}
          </div>
      </div>
    );
  }
  getData(){
    axios.get('/api/antrian')
    .then((data_antrian) => {
      this.setState({data: data_antrian.data})
    })
    .catch(() =>{
  
    })
  }
  getNomor(){
    axios.get('/api/nomor')
    .then((data_nomor) => {
      this.setState({nomor: data_nomor.data})
    })
    .catch(() =>{
  
    })
  }
  
   
}






export default App;
// export default Nomor;
