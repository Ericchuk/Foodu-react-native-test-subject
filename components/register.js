import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default function Register({ setModalVisible }) {
  return (
    <View style={style.mainContainer}>
            <View style={style.container}>
      <Text style={style.intro}>Your Taste Bud Our Concern</Text>
      <View style={style.inputContainer}>
        <View>
          <Text>Name</Text>
          <TextInput
            value=""
            placeholder="Enter password"
            keyboardType="password"
              style={style.inputValue}
          />
        </View>

        <View>
          <Text>Address</Text>
          <TextInput
            value=""
            placeholder="Enter password"
            keyboardType="password"
              style={style.inputValue}
          />
        </View>

        <Button
          title="Register"
          style={style.button}
          onPress={() => {
            setModalVisible(false);
          }}
        />
      </View>
    </View>
    </View>
    
  );
}

const style = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width: "100%",
        paddingHorizontal: 40,
        paddingVertical:40,
        backgroundColor:'#fff',
    },
  container: {
    justifyContent:'center',
    width: "80%",
    height:'40%',
    paddingHorizontal: 40,
    paddingVertical:20,
    backgroundColor: "plum",
  },
  intro: {
    fontSize:25,
    fontWeight:'bold',
    color:'#000',
    textAlign:'center',
    marginVertical:20,
  },
  button: {
    marginTop:30,
    paddingVertical:10,
    width:'100%',
    backgroundColor:'#FD1755',
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    borderRadius:10,
  }
});
