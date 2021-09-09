import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("./src/assets/arrow-left.png")}></Image>
                <Image source={require("./src/assets/pesquisar.png")}></Image>
                <Image source={require("./src/assets/compartilhar.png")}></Image>
                <Text>tanto faz</Text>
            </View>
            <Text>hello word</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    },
    header:{
        minHeight: 93,
        backgroundColor: "#2E4877",
        paddingTop: 40,
    }
});
