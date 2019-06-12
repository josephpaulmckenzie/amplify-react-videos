// import React from "react";
import Amplify from "aws-amplify";
import { Storage } from 'aws-amplify'
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { withAuthenticator } from "aws-amplify-react";
import config from "./aws-exports";
Amplify.configure(config);

class App extends React.Component {
  
  // constructor(props, context) {
  //   super(props, context);
  // }

  onChange(e) {
    const file = e.target.files[0];
    const filename = e.target.files[0].name;
    console.log("filename",filename)
    Storage.put(filename, file, {
        contentType: 'video/mp4'
    })
    .then (result => console.log(result))
    .catch(err => console.log(err));
}

render() {
  
    return (
      // <ReactPlayer url='https://amplifywebapp67a75a721c3148d59efbc99aedbc93f5.s3.amazonaws.com/public/dolbycanyon.m4v' playing />

        <input
            type="file" accept='video/mp4'
            onChange={(e) => this.onChange(e)}
        />
    )
}
}

export default withAuthenticator(App, true);