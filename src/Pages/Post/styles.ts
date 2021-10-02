import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        //backgroundColor:'red',
        padding: 30,
    },
    headerPost:{
        flexDirection: 'row',
    },
    foto:{
        width: 60,
        height: 60,
        backgroundColor: "#4369B0",
        borderRadius:50,
    },
    texto:{
        paddingLeft: 20,
        justifyContent: 'space-around',
    },
    hora:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    centro:{

    },
    like:{
        width: 30,
        height: 30,
        backgroundColor: "#4369B0",
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fds:{
        flexDirection: "row",
        marginTop: 20,
    },
    final:{
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    footerpost:{
        height: 43,
        marginTop: 20,
        flexDirection: 'row',
    },
    learnmore:{
        width: 170,
        backgroundColor: '#3D7BE2',
        height: 43,
        borderRadius: 10,
        justifyContent: "center",
    },
});