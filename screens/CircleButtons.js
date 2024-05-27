import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CircularButtons() {
  const navigation = useNavigation();
  const radius = 100;
  const numOfButtons = 6;
  const angle = 2 * Math.PI / numOfButtons;
  const [overlayVisible, setOverlayVisible] = useState(true);

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
    <View style={{ flex: 1 }}>
      {/* Main Content */}
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Main Content Here</Text>
        <TouchableOpacity onPress={() => setOverlayVisible(true)} style={styles.toggleButton}>
          <Text style={styles.buttonText}>Show Circular Buttons</Text>
        </TouchableOpacity>
      </View> */}

      {/* Overlay */}
      {overlayVisible && (
        <View style={styles.overlay}>
          <View style={styles.circle}>
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
            {/* <TouchableOpacity onPress={() => setOverlayVisible(true)} style={styles.closeButton}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // overlay: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position:'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White background with transparency
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
    position:'absolute',
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    bottom: -30,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});
