import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const Post = () => {
    return (
    <View style={styles.container}> 
        <View style={styles.headerPost}>
            <View style={styles.foto}>

            </View>
            <View style={styles.texto}>
                <Text>My Post</Text>
                <View style={styles.hora}>
                    <Text>2 horas</Text>
                </View>
            </View>
        </View>
    </View>
    );
};