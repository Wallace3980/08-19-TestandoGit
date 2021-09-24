import React from "react";
import { View, Text, Image, Touchable } from "react-native";
import { styles } from "./styles";

export const Post = () => {
    return (
    <View style={styles.container}> 
        <View style={styles.headerPost}>
            <View style={styles.foto}>

            </View>
            <View style={styles.texto}>
                <Text style={{fontWeight:'bold',
                            fontSize: 18,}}>
                    My Post
                </Text>
                <View style={styles.hora}>
                    <Text style={{color: '#808082'}}>2 hrs</Text>
                    <Image source={require('../../assets/mundo.png')}/>
                </View>
            </View>
        </View>
        <View style={styles.centro}>
            <Text style={{fontSize: 14, paddingTop: 10}}>Este é o design que vamos replicar hoje na aula:
                <Text style={{color: '#4D6196'}}> 
                https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup</Text>
            </Text>
            <Image source={require('../../assets/centro.png')} 
                style={{width:300, height: 282, marginTop: 10,}}/>
            <View style={styles.fds}>
                <View style={styles.like}>
                    <Image source={require('../../assets/azul.png')}/>
                </View>
                <Text style={{paddingLeft: 10, marginTop: 5, fontSize: 14}}>12</Text>
            </View>
        </View>
        <View style={styles.final}>
            <Image source={require('../../assets/like.png')} style={{height: 18, width:18,}}/>
            <Text> Like </Text>
            <Image source={require('../../assets/comentario.png')} style={{height: 18, width:18,}}/>
            <Text> Comentario </Text>
            <Image source={require('../../assets/miniCompartilhar.png')} style={{height: 18, width:18,}}/>
            <Text> Compartilhar </Text>
        </View>
    </View>
    );
};