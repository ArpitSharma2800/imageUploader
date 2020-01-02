import React from 'react';
import './App.css';
import { Component, Fragment } from 'react';
import Axios from 'axios';
import Progress from './Progress'

class App extends Component {

  state = {
    File: null,
    Filename: 'Choose File',
    selectedFile: null,
    uploadPercentage: 0
  }
  fielSelectorHandler = e => {
    this.setState({
      File: e.target.files[0],
      selectedFile: e.target.files[0],
      Filename: e.target.files[0].name
    })
  }
  onSubmit = async e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('image', this.state.selectedFile.name);
    Axios.post('URL....', fd, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          uploadPercentage: parseInt(Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total))
        })
      }
    })
      .then(res => {
        console.log(res);
      });

  }
  render() {
    return (
      <div className="container mt-4">
        <h4 className='display-4 text-center mb-4'>
          <i className='fas fa-code' /> Image
    </h4>
        <Fragment>
          <form onSubmit={this.onSubmit}>
            <div className='custom-file mt-5'>
              <input type='file'
                className='custom-file-input'
                id='customFile'
                onChange={this.fielSelectorHandler}
              />
              <label className='custom-file-label' htmlFor='customFile'>
                {this.state.Filename}
              </label>
            </div>
            <Progress percentage={this.uploadPercentage} className="mt-sm-4" />
            <input
              type='submit'
              value='Upload'
              className='btn btn-primary btn-block mt-4'
            />
          </form>
        </Fragment>
      </div>
    );
  }
}

export default App;
