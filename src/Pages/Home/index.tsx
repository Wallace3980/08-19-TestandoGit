import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { stylesLink, stylesLinkImportantes, styles } from './styles';

const LinkItem = (props:any)=>{
    return(
        <Text style={stylesLink.text}>{props.name}</Text>
    );
};
const LinksImportantes = ()=>{
    return(
        <View style={stylesLinkImportantes.container}> 
            <LinkItem name="Home" />
            <LinkItem name="Post" />
            <LinkItem name="Videos" />
            <LinkItem name="Photos" />
            <LinkItem name="Community" />
        </View>
    );
};
const Home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={
                    require("../../assets/seta.png")}>
                </Image>

                <View style={styles.inputTextView}>
                    <Image source={
                        require("../../assets/pesquisar.png")}>
                    </Image>

                    <TextInput 
                        placeholder="Search"
                        placeholderTextColor="#F5FFFF"
                        style={styles.textInput}>
                    </TextInput>
                </View>

                <Image source={
                    require("../../assets/compartilhar.png")}>
                </Image>
            </View>

            <LinksImportantes />
            <StatusBar style="auto" />
        </View>
    );
}
export default Home;