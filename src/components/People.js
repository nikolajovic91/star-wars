import React from 'react';
import axios from '../api';

class People extends React.Component {
  state = {
    data: ''
  }

  getNames = async () => {
    const response = await axios.get("/people/");
    this.setState({
      data: response.data.results.map(res => {
        return <div className="card" key={res.created}>
          <h1>{res.name}</h1>
          <h3>Birth: {res.birth_year}</h3>
          <p>Gender: {res.gender}</p>
          <p>Eye color: {res.eye_color}</p>
          <p>Skin color: {res.skin_color}</p>
        </div>
      })
    });
    console.log(response.data.results);
  }

  next = async () => {
    const response = await axios.get("/people/");
    this.setState({
      data: response.data.next
    })
  }

  componentDidMount() {
    this.getNames()
  }

  render() {
    const names = this.state.data
    return (
      <div className="container">
        {names}
        {/* <button onClick={this.next}>Klik</button> */}
      </div>
    );
  }

}

export default People;
