import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  viewStyle: {
    flex : 1,
  },
  slideStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
  },
  buttonStyle: {
    backgroundColor: 'green',
  }
});

class Slides extends Component {

  renderSlides = () => {
    return this.props.data.map((slide, i) => {
      return (
        <View key={slide.text} style={[styles.slideStyle, {backgroundColor : slide.color}]}>
          <Text style={styles.textStyle}>{slide.text}</Text>
          {i === this.props.data.length - 1 ? 
            <View style={{marginTop: 20}}> 
              <Button onPress={this.props.onComplete} buttonStyle={styles.buttonStyle} title="Log me in!" raised /> 
            </View> 
          : null}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={styles.viewStyle}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

export default Slides;
