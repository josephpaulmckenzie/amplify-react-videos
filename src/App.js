import React from "react";
import Amplify from "aws-amplify";
import { Storage } from 'aws-amplify'

import { withAuthenticator } from "aws-amplify-react";
import config from "./aws-exports";
Amplify.configure(config);

class App extends React.Component {
  
  constructor(props, context) {
    super(props, context);
  }

  onChange(e) {
    const file = e.target.files[0];
    const filename = e.target.files[0].name;
    console.log("filename",filename)
    Storage.put(filename, file, {
        contentType: 'video/mkv'
    })
    .then (result => console.log(result))
    .catch(err => console.log(err));
}

render() {
    return (
        <input
            type="file" accept='video/mkv'
            onChange={(e) => this.onChange(e)}
        />
    )
}
}

export default withAuthenticator(App, true);