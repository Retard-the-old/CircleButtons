import React from "react";
import { Text, Image, View, StyleSheet} from "react-native";

export default function Contactus () {
    return (
        <View style={styles.containerMain}>
            <Text>Hello contact us</Text>
            <Image
            source={require('../../assets/oldmaneng.png')}/>
        </View>
    )
};

const styles=StyleSheet.create ({
    containerMain: {
        flex: 1
    }
})