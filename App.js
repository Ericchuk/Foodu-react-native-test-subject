import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal } from 'react-native';
import WelcomePage from './components/welcomePage';
import LoginPage from './components/loginPage';
import LoginInputPage from './components/loginInputPage';
import Register from './components/register';


export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <WelcomePage />
      <LoginPage />
      <Text style={styles.or}>Or</Text>
      <LoginInputPage modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Modal visible={modalVisible }  onRequestClose={() => setModalVisible(false)} animationType='slide'
      presentationStyle='pageSheet'>
        <Register setModalVisible={setModalVisible} />
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    width:'100vh',
    marginTop:70,
    color:'black',
  },

  or: {
    marginVertical:30,
    fontSize:15,
  }
  
});
