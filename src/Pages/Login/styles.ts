import React from 'react';
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#465CB1",
        textAlign: "center",
        justifyContent: "center",
    },
    imagem:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: 10,
        marginBottom: 70,
    },
    input:{
        flexDirection: "column",
        alignItems: "center",
    },
    campoinput:{
        backgroundColor: "#FFFFFF",
        height: 48,
        width: 320, //fica melhor na vizualização no celular
        marginBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 16,
        color: "#A19FA1",
    },
    outrapgae:{
        width: 320, //fica melhor na vizualização no celular
        height: 48,
        justifyContent: "center",
        backgroundColor: "#213873",
        borderRadius: 10,
    },
    login:{
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
    },
    textfinal:{
        color: "#FFFFFF",
        fontSize: 16,
        textAlign: "center",
        marginTop: 70,
    },
});