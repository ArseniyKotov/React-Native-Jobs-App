import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  }
})

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
  
  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
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
        <MapView style={{ flex: 1 }} region={this.state.region} onRegionChangeComplete={this.onRegionChangeComplete}/>
        <View style={styles.buttonContainer}>
          <Button large title="Search" backgroundColor="green" icon={{ name: 'search' }} onPress={this.onButtonPress}/>
        </View>
      </View>
    );
  }
}

export default connect(null, actions)(MapScreen);
