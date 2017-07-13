import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
  state = { //ES2017 way of defining state
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
    mapLoaded: false,
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{flex : 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} region={this.state.region}/>
      </View>
    );
  }
}

export default MapScreen;
