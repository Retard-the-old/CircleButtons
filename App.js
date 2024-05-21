import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, TouchableOpacity, StyleSheet, Alert, Image, StatusBar, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CircleButtons from './screens/CircleButtons';

import Aboutus from './screens/pages/aboutus';
import Appointment from './screens/pages/appointment';
import Blogs from './screens/pages/blogs';
import Services from './screens/pages/services';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


function App() {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => { setShowButtons(!showButtons) };


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>

          <StatusBar
            barStyle="light-content" // Options: 'default', 'light-content', 'dark-content'
            backgroundColor="#6a51ae" // Background color for Android
            hidden={false} // Set to true to hide the status bar
          />

          <Stack.Navigator initialRouteName='Home'>
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="Screen1" component={Appointment} />
            <Stack.Screen name="Screen2" component={Blogs} />
            <Stack.Screen name="Screen3" component={Services} />
            <Stack.Screen name="Screen4" component={Aboutus} />
            {/* <Stack.Screen name="Screen5" component={} />
            <Stack.Screen name="Screen6" component={} /> */}
          </Stack.Navigator>

          <View >
            <Image
              source={require('./assets/logo.png')}
              style={styles.image}
              resizeMode='cover' />
          </View>

          {showButtons && <CircleButtons downBoyFun={toggleButtons} />}

          <View style={[styles.circleCont]}>
            <TouchableOpacity onPress={toggleButtons} style={styles.button}>
              <Text style={styles.buttonText}>Show/Hide Circular Buttons</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </NavigationContainer>

    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  circleCont: {
    flex: 1,
    flexDirection: 'row',
    bottom: 30
  },
  button: {
    width: 180,
    height: 40,
    padding: 10,
    backgroundColor: '#007600',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
