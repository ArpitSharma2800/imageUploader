import React, { Component } from 'react'
export class Form2 extends Component {
    render() {
        return (
            <center>
                <div className="container main">
                    <div className="card bhai">
                        <form className="form" onSubmit={this.props.getWeather2} >
                            <div className="input-field">
                                <label foror="city">Enter City Name:</label>
                                <input type="text" class="form-control" name="city" placeholder="Enter City Name" />
                            </div>
                            <button type="submit" className="button">Submit</button>


                        </form>
                    </div >
                </div >
            </center>


        )
    }
}
export default Form2