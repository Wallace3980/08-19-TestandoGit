import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const LinksImportantes = ()=>{
    return(
        <View>
            <Text>Meu primeiro componente :D</Text>
        </View>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={
                    require("./src/assets/seta.png")}>
                </Image>
                <View style={styles.inputTextView}>
                    <Image source={
                        require("./src/assets/pesquisar.png")}>
                    </Image>
                    <TextInput 
                        placeholder="Search"
                        placeholderTextColor="#F5FFFF"
                        style={styles.textInput}>
                    </TextInput>
                </View>
                <Image source={
                    require("./src/assets/compartilhar.png")}>
                </Image>
            </View>
            <LinksImportantes />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        minHeight: 93,
        backgroundColor: "#4369B0",
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },
    inputTextView:{
        flex: 2,
        backgroundColor: "#2C4877",
        height: 40,
        width: 30,
        marginHorizontal: 10,
        alignItems: "center",
        borderRadius: 28,
        flexDirection: "row",
    },
    textInput:{
        color: "#F5FFFF",
        // maxWidth: 170,
        flex: 1,
        paddingRight: 20,
    },
});
