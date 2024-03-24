import { StyleSheet, View, Image, Text } from "react-native";

export default function LoginPage(){
    return(
        <View style={style.authLogin}>
            <View style={style.authFacebook}>
                <Image source={require('../assets/image 3.png')} />
                <Text style={style.facebookAuth}>facebook</Text>
            </View>
            <View style={style.authGoogle}>
            <Image source={require('../assets/image 2.png')} />
            <Text style={style.facebookAuth}>Google</Text>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    authLogin: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        color:"#000",
        shadowColor: 'black',
        // borderWidth:1,
        width:'90%'
    },
    authGoogle: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 1,
        paddingHorizontal:35,
        paddingVertical:5,
        borderRadius:10,
    },
    authFacebook: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginRight:20,
        shadowColor: 'black',
        paddingHorizontal:35,
        paddingVertical:10,
        borderRadius:10,
    },
    facebookAuth: {
        marginHorizontal:5,
    }
})