import React, { Component } from 'react';
import { View, Text, Scroll, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';
import _ from 'lodash';

const SLIDE_DATA = [
  { text: 'Welcome to the fam app', color: 'lightblue' },
  { text: 'Set your location then swipe away', color: 'lightgreen' },
  { text: 'I halp you get job yas', color: 'lightblue' },
];

class WelcomeScreen extends Component {
  state = { token : null }

  onComplete = () => {
    this.props.navigation.navigate('auth')
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.props.navigation.navigate('map')
      this.setState({ token })
    } else {
      this.setState({ token: false })
    }
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onComplete} />
    );
  }
}

export default WelcomeScreen;
