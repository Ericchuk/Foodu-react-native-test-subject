import { StyleSheet, View, Image, Text, TextInput, Linking, Button } from "react-native";

export default function LoginInputPage(){
    return(
        <View style={style.container} >
            <View style={style.inputContainer}>
                <Text style={style.inputLabel}>EMAIL ID</Text>
                <TextInput value="" placeholder="Enteryour@gmail.com" keyboardType="alphabet" style={style.inputValue}/>
            </View>

            <View style={style.inputContainer}>
                <Text style={style.inputLabel}>PASSWORD</Text>
                <TextInput value="" placeholder="Enter password" keyboardType="password" style={style.inputValue}/>
                <Text style={style.error}>forgot password?</Text>
            </View>

            <View>
                <Text style={style.button} >Login</Text>
            </View>
            <Text style={style.register}>Don't have An account? <Text style={{color: '#FD1755'}} onPress={() => Linking.openURL('http://facebook.com')}>Register now</Text></Text>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        width:'90%',
        // borderWidth:1,
        marginHorizontal:20,
    },

    inputContainer: {
        marginBottom:10,

    },

    inputLabel: {
        color:'lightgrey',
        fontSize:15,
        marginBottom:3,
        textStyle: 'capitalize'
    },
    inputValue: {
        borderBottomWidth:1,
        marginTop:5,
        paddingVertical:0,
        fontSize:16,
    },
    error: {
        width:'100%',
        marginTop:10,
        textAlign:'right',
        color:'#FD1755',
    },
    button: {
        marginVertical:30,
        paddingVertical:10,
        width:'100%',
        backgroundColor:'#FD1755',
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'#fff',
        borderRadius:10,
    },
    register: {
        width:'100%',
        textAlign:'center',
        color:'lightgrey',
        fontSize:15,
    }
})