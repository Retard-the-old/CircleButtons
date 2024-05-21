import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

const CircularButtons = ({ downBoyFun, navigation }) => {
  const radius = 100;
  const numOfButtons = 6;
  const angle = 2 * Math.PI / numOfButtons;
  const [minimized, setMinimized] = useState(false);

  const buttonFunctions = [
    () => navigation.navigate('Screen1'),
    () => navigation.navigate('Screen1'),
    () => navigation.navigate('Screen1'),
    () => navigation.navigate('Screen1'),
    // () => Alert.alert('butt 5 in the hive'),navigation.navigate('Screen1'),
    // () => navigation.navigate('Screen1'),
  ];

  const handleButtonPress = (index) => {

    buttonFunctions[index]();
  };


  return (
    <View style={styles.container}>

      <View>
        <Text>Anything really</Text>
      </View>

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
        {/* <TouchableOpacity onPress={() => downBoyFun()}>
          {/* <Text style={styles.buttonText}>{minimized ? 'Open' : 'Close'}</Text> */}
        {/* </TouchableOpacity>   */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 2 * 100,
    height: 2 * 100,
    borderRadius: 100,
    position: 'relative',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#007000',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default CircularButtons;
