import React, { Component } from 'react';
import { View, Button } from 'react-native';

class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Button
            onPress={onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default  LoginScreen;