// import React, {useState, useEffect} from 'react'
// import axios from '../api';

// const Planets = () => {
//   const [planets, setPlanets] = useState('')
//   const getPlanets = async () => {
//     const response = await axios.get("/planets/");
//     setPlanets(
//       response.data.results.map(planets => {
//         console.log(response.data);
//         return <div className="card" key={planets.created}>
//           <h1>{planets.name}</h1>
//           <h3>Birth: {planets.population}</h3>
//           <p>Gender: {planets.climate}</p>
//           <p>Eye color: {planets.gravity}</p>
//           <p>Skin color: {planets.surface_water}</p>
//         </div>
        
//       })
//     );
//     console.log(response.data);
//   }

 
//   return (

//     <div>
//       {planets}
//     </div>
//   )
// }

// export default Planets


import React, { Component } from 'react'
import axios from '../api';


export default class Planets extends Component {
  state = {
    data: ''
  }

  getPlanets = async () => {
    const response = await axios.get("/planets/");
    this.setState({
      data: response.data.results.map(res => {
        return <div className="card" key={res.created}>
          <h1>{res.name}</h1>
          <h3>Population: {res.population}</h3>
          <p>Climate: {res.climate}</p>
          <p>Gravity: {res.gravity}</p>
          <p>Terrain: {res.terrain}</p>
          <p>Surface water: {res.surface_water}</p>
        </div>
      })
    });
    console.log(response.data.results);
  }

  componentDidMount() {
    this.getPlanets()
  }

  render() {
    const planets = this.state.data;
    return (
      <div className="container">
        {planets}
        {/* <button onClick={this.next}>Klik</button> */}
      </div>
    );
  }
}
