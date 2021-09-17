import React from 'react';
import { StyleSheet} from 'react-native';

export const stylesLink = StyleSheet.create({
    text:{
        color: "#4A4A4C",
        fontSize: 13.71,
        marginTop: 10,
    }
});

export const stylesLinkImportantes = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 40,
        paddingVertical: 10,

        borderColor: "red",
        borderBottomWidth: 1,

        /*shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,*/
    }
});

export const styles = StyleSheet.create({
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