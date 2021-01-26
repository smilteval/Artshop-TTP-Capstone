import React, { Component } from "react";
import { FormControl, Input, Button } from "@material-ui/core";

import axios from "axios"

export default class FileUpload extends Component {
  state = {
    file: null,
  };

  handleChange = (event) => {
    console.log(event.target.files);
    this.setState({ file: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.file);

    this.uploadData()
  };

  uploadData = async () => {
    const data = new FormData()
    data.append("files", this.state.file)

    const upload_res = await axios({
      method: "POST",
      url: "https://ttp-art-store.herokuapp.com/upload",
      data
    })

    console.log(upload_res)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
