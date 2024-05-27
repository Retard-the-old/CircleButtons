import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

function Homescreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* <ImageBackground source={require('../../assets/background.png')} style={styles.imgbackground} resizeMode='cover'> */}

            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.container}>
                        <Image source={require('../../assets/oldmaneng.png')} resizeMode="contain" style={styles.engpic} />

                        <View style={{ flex: 1, padding: 5, alignItems: 'center', justifyContent: 'center', width: '70%', marginBottom: 5 }}>
                            <Text style={styles.screenText}>Are you one of us?</Text>
                            <Text style={styles.screenText}>Login Below:</Text>
                            <View style={styles.usernameInput}>
                                <TextInput
                                    style={styles.userInPut}
                                    placeholder="Enter text here"
                                    placeholderTextColor="#000000"

                                />
                            </View>
                            <View style={styles.passwordInput}>
                                <TextInput
                                    style={styles.passInPut}
                                    placeholder="Enter text here"
                                    placeholderTextColor="#000000"

                                />
                            </View>
                        </View>
                        <View >
                            <Text style={styles.screenText2}>Are you a client? Create an account today and redeem loyalty points worth a free service session/ repairs!</Text>
                        </View>
                    </View>


                </ScrollView>

                <View>
                    <View>
                        <Text>Check out what else we do: </Text>
                    </View>

                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={[styles.horiScrollContainer]}>

                            <View style={[styles.checkOut]}>
                                <Image source={require('../../assets/servFeatIcon1.png')}
                                    style={{ height: 110, width: 110, resizeMode: 'center' }} />
                                <Text >hello</Text>
                                <Text >Hello too</Text>
                            </View>
                            <View style={[styles.checkOut]}>
                                <Image source={require('../../assets/servFeatIcon2.png')}
                                    style={{ height: 110, width: 110, resizeMode: 'center' }} />
                                <Text >hello</Text>
                                <Text >Hello too</Text>
                            </View>
                            <View style={[styles.checkOut]}>
                                <Image source={require('../../assets/servFeatIcon3.png')}
                                    style={{ height: 110, width: 110, resizeMode: 'center' }} />
                                <Text >hello</Text>
                                <Text >Hello too</Text>
                            </View>
                            <View style={[styles.checkOut]}>
                                <Image source={require('../../assets/servFeatIcon4.png')}
                                    style={{ height: 110, width: 110, resizeMode: 'center' }} />
                                <Text >hello</Text>
                                <Text >Hello too</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            {/* </ImageBackground> */}

        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    horiScrollContainer: {
        flexDirection: 'row',
    },
    screenText: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 30, // Change the font size as needed
        color: 'black', // Set the text color
    },
    engpic: {
        width:180,
        height:180
    },
    usernameInput: {
        margin: 5,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        width: '80%',
        height: 50,
        alignItems: 'center'
    },
    userInPut: {
        borderRadius: 10,
        padding: 10,
    },
    passwordInput: {
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        width: '80%',
        height: 50,
        alignItems: 'center'
    },
    passInPut: {
        borderRadius: 10,
        padding: 10,
    },
    screenText2: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 15, // Change the font size as needed
        color: 'black', // Set the text color
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    checkOut: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 12,
        paddingVertical: 6,
        backgroundColor: '#4dab48'
    }

});

export default Homescreen;