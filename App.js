import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, TouchableOpacity, StyleSheet, Image, StatusBar, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import CircleButtons from './screens/CircleButtons';
import Aboutus from './screens/pages/aboutus';
import Appointment from './screens/pages/appointment';
import Blogs from './screens/pages/blogs';
import Services from './screens/pages/services';

const Stack = createStackNavigator();

function App() {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        
        <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#6a51ae"
            hidden={false}
          />

          <Stack.Navigator
            initialRouteName="Appointment" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Appointment" component={Appointment} />
            <Stack.Screen name="Blogs" component={Blogs} />
            <Stack.Screen name="Services" component={Services} />
            <Stack.Screen name="Aboutus" component={Aboutus} />
          </Stack.Navigator>

          {showButtons && <CircleButtons downBoyFun={toggleButtons} />}

          <View style={styles.circleCont}>
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
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '80%',
    height: 100,
  },
  circleCont: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#6a51ae',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default App;
