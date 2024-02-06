import { StyleSheet, View, Image, Text } from "react-native";

export default function LoginPage(){
    return(
        <View style={style.authLogin}>
            <View style={style.authFacebook}>
                <Image source={require('../assets/image 3.png')} />
                <Text style={style.facebookAuth}>facebook</Text>
            </View>
            <View style={style.authFacebook}>
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
        color:"#000"
    },
    authFacebook: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    facebookAuth: {
        marginHorizontal:5,
    }
})