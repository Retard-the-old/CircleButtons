import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, TouchableOpacity, StyleSheet, Image, StatusBar, SafeAreaView, ImageBackground } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import CircleButtons from './screens/CircleButtons';
import Aboutus from './screens/pages/aboutus';
import Homescreen from './screens/pages/homeScreen';
import Blogs from './screens/pages/blogs';
import Services from './screens/pages/services';
import Contactus from './screens/pages/contactus';

const Stack = createStackNavigator();

const LogoTitle = () => (
  <View style={styles.logoContainer}>
    <Image
      style={styles.logo}
      source={require('./assets/logo.png')}
      resizeMode="center"
    />
  </View>
);




export default function App() {
  const [overlayVisible, setOverlayVisible] = useState(false);

  // const toggleButtons = () => {
  //   setShowButtons(!showButtons);
  // };

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="rgba(0, 0, 0, 0.5)"
      />
      {/* <ImageBackground source={require('./assets/background.png')} style={styles.imgbackground} resizeMode='cover' /> */}
      <View style={styles.pageContainer}>



        <NavigationContainer>

          <SafeAreaView style={styles.container}>



            <Stack.Navigator
              initialRouteName="App"
              // screenOptions={{ headerShown: true }}
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight: () => <LogoTitle />,
              }}
            >
              <Stack.Screen name="Home Screen" component={Homescreen} />
              <Stack.Screen name="Blogs" component={Blogs} />
              <Stack.Screen name="Services" component={Services} />
              <Stack.Screen name="About us" component={Aboutus} />
              <Stack.Screen name='Contact us' component={Contactus} />
            </Stack.Navigator>

            {/* {showButtons && <CircleButtons downBoyFun={toggleButtons} />} */}

            {overlayVisible && <CircleButtons downBoyFun={toggleOverlay} />}

            <View style={styles.circleCont}>
              <TouchableOpacity onPress={toggleOverlay} style={styles.button}>
                <Text style={styles.buttonText}>Show/Hide Circular Buttons</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </NavigationContainer>
      </View>

    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  // imgbackground: {
  //   borderRadius: 40
  // },
  pageContainer: {
    //flex: 1,
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    //flex:1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: '100%'
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

