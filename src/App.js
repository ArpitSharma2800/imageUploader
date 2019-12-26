import React, { Component } from 'react';
// import logo from './logo.svg';
import { Line } from 'react-chartjs-2';
import './App.css';
import Loading from './Loading.gif'
const Api_Key = "226ae47f7748dc58a10211435076a3c3"

class App extends Component {

  state = {
    data: undefined,
    labels: ['Temp', 'Humidity', 'pressure', 'Temp_Max', 'Temp_Min'],
    loaded: true
  };

  earthquake = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`);
    const data = await response.json();
    this.setState({
      data: [data.main.temp, data.main.humidity, data.main.pressure, data.main.temp_max, data.main.temp_min],
      loaded: true
    })
    console.log(data);
  }

  handleClick = (e) => {
    // e.preventDefault()
    this.setState({
      loaded: false
    })
  };

  render() {

    const data = {
      labels: this.state.labels,
      datasets: [
        {
          label: 'Graph',
          fill: true,
          lineTension: 0.2,
          backgroundColor: '#FBD2D4',
          borderColor: '#F45455',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgb(167,124,253)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgb(167,124,253)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 1,
          data: this.state.data
        }
      ]
    };
    return (
      <div className="App" >
        <div className="container">
          <form onSubmit={this.earthquake}>
            <div className="form-group">
              <label foror="city">Enter City Name:</label>
              <input type="text" class="form-control" name="city" placeholder="Enter City Name" />
            </div>
            <div className="form-group">
              <label foror="Time  ">Time</label>
              <input type="time" className="form-control" placeholder="Enter password" ></input>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
          </form>
          {this.state.loaded ? (
            <div className="graph">
              <Line data={data} />
            </div>
          ) : (
              <div className="gif"><img src={Loading} alt="Loading" /></div>
            )}

        </div>
      </div >
    );
  }
}

export default App;
