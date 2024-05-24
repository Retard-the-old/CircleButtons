import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CircularButtons() {
  const navigation = useNavigation();
  const radius = 100;
  const numOfButtons = 6;
  const angle = 2 * Math.PI / numOfButtons;
  const [minimized] = useState(false);

  const buttonFunctions = [
    () => navigation.navigate('Home Screen'),
    () => navigation.navigate('Services'),
    () => navigation.navigate('Contact us'),
    () => navigation.navigate('Blogs'),
    () => navigation.navigate('About us'),
    () => navigation.navigate('Screen6'),
  ];

  const handleButtonPress = (index) => {
    const func = buttonFunctions[index];
    if (typeof func === 'function') {
      func();
      console.log(`Navigating to screen at index ${index}`);
    } else {
      console.warn(`No function defined for button at index ${index}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {!minimized && (
          <>
            {Array.from({ length: numOfButtons }).map((_, index) => {
              const x = radius * Math.cos(index * angle);
              const y = radius * Math.sin(index * angle);
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleButtonPress(index)}
                  style={[
                    styles.button,
                    {
                      left: radius + x - 20,
                      top: radius - y - 20,
                    },
                  ]}
                >
                  <Text style={styles.buttonText}>{index + 1}</Text>
                </TouchableOpacity>
              );
            })}
          </>
        )}
        {/* <TouchableOpacity onPress={downBoyFun} style={styles.toggleButton}>
          <Text style={styles.buttonText}>{minimized ? 'Open' : 'Close'}</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  button: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  toggleButton: {
    position: 'absolute',
    bottom: 20,
  },
});


