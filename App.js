import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
} from 'react-native';

const remote = '/assets/indah.png';

export default class BackgroundImage extends Component {
  render() {
    const resizeMode = 'center';

    return (
      <Image
        style={{
          flex: 1,
          resizeMode,
        }}
        source={{ uri: remote }}
      />
    );
  }
}

AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
