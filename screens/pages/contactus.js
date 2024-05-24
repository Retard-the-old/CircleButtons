import React from "react";
import { Text, Image} from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function Contactus () {
    return (
        <View>
            <Text>Hello Blogs</Text>
            <Image
            source={require('../../assets/oldmaneng.png')}/>
        </View>
    )
};