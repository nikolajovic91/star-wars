import React, { Component } from 'react'
import axios from '../api';


export default class Species extends Component {
  state = {
    data: ''
  }

  getSpecies = async () => {
    const response = await axios.get("/species/");
    this.setState({
      data: response.data.results.map(res => {
        return <div className="card" key={res.created}>
          <h1>{res.name}</h1>
          <h3>Classification: {res.classification}</h3>
          <p>Designation: {res.designation}</p>
          <p>Skin color: {res.skin_color}</p>
          <p>Language: {res.language}</p>
          <p>Average height: {res.average_height}</p>
        </div>
      })
    });
    console.log(response.data.results);
  }

  componentDidMount() {
    this.getSpecies()
  }

  render() {
    const species = this.state.data;
    return (
      <div className="container">
        {species}
      </div>
    );
  }
}
