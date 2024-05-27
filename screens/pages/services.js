import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default function Services() {
    return (
        <View style={styles.containerMain}>
            <Text>Hello services</Text>

            <View style={styles.serviceView}>
                <View style={styles.service}>
                    <Image source={''}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerMain: {
        flex: 1
    }
})