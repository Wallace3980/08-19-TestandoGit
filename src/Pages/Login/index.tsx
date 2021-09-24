import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StackNagationParaList } from '../../../types';

type HomeProps = NativeStackNavigationProp<StackNagationParaList, "Login">;

const Login = () => {

    const navigation = useNavigation<HomeProps>();

    function irParaTelaHome(){
        navigation.navigate('Home');
    };

    return(
        <View style={styles.container}>
            <View style={styles.imagem}>
                <Image source={
                    require("../../assets/facebook.png")}>
                </Image>
                <Text style={{fontSize: 42.11,
                            color: "white",
                            marginRight: 70,
                            fontWeight:'bold',}}>
                            Facebook
                </Text>
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder = "Email"
                    placeholderTextColor = "#A19FA1"
                    style={styles.campoinput}>
                </TextInput>
                <TextInput
                    placeholder = "Login"
                    placeholderTextColor = "#A19FA1"
                    style={styles.campoinput}>
                </TextInput>
                <View style={styles.outrapgae}>
                    <TouchableOpacity onPress={irParaTelaHome}>
                        <Text style={styles.login}>Log Ing</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.textfinal}>Sing Up for FaceBook</Text>
            </View>
        </View>
    );
}

export default Login;