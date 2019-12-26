import React, { Component } from 'react';
// import logo from './logo.svg';
import { Line } from 'react-chartjs-2';
import './App.css';
import Loading from './Loading.gif'


class App extends Component {

  state = {
    data: undefined,
    labels: undefined,
    loaded: true
  };

  earthquake = async (e) => {
    e.preventDefault();
    const day = e.target.elements.day.value;
    const response = await fetch(`API`);
    const data = await response.json();
    this.setState({
      data: [],
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
              <label foror="city">Enter Day Name:</label>
              <input type="text" class="form-control" name="day" placeholder="Enter Day" />
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
