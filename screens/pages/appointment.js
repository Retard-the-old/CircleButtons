import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Appointment() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
            </View>
            <View>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
            </View>
            <View>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
                <Text>Hello appointments</Text>
            </View>

            <View>
                <View>
                    <Text>Check out what else we do: </Text>
                </View>

                <ScrollView
                    horizontal={true}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={[styles.container]}>

                        <View style={[styles.forecastDays]}>
                            <Image source={require('../../assets/servFeatIcon1.png')}
                                style={{ height: 110, width: 110, resizeMode: 'center' }} />
                            <Text >hello</Text>
                            <Text >Hello too</Text>
                        </View>
                        <View style={[styles.forecastDays]}>
                            <Image source={require('../../assets/servFeatIcon2.png')}
                                style={{ height: 110, width: 110, resizeMode: 'center' }} />
                            <Text >hello</Text>
                            <Text >Hello too</Text>
                        </View>
                        <View style={[styles.forecastDays]}>
                            <Image source={require('../../assets/servFeatIcon3.png')}
                                style={{ height: 110, width: 110, resizeMode: 'center' }} />
                            <Text >hello</Text>
                            <Text >Hello too</Text>
                        </View>
                        <View style={[styles.forecastDays]}>
                            <Image source={require('../../assets/servFeatIcon4.png')}
                                style={{ height: 110, width: 110, resizeMode: 'center' }} />
                            <Text >hello</Text>
                            <Text >Hello too</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    forecastDays: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 12,
        paddingVertical: 6,
        backgroundColor: '#4dab48'
    }

});

export default Appointment;