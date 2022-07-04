import React from 'react';
import styles from './styles';
import {Text, TouchableOpacity, View} from 'react-native';

function Screen() {
  return (
    <View style={styles.root}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Welcome!</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={1}
          onPress={() => {
            alert('Button clicked.');
          }}>
          <Text style={styles.buttonText}>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Screen;
