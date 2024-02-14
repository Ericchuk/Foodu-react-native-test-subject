import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './components/welcomePage';
import LoginPage from './components/loginPage';
import LoginInputPage from './components/loginInputPage';


export default function App() {
  return (
    <View style={styles.container}>
      <WelcomePage />
      <LoginPage />
      <Text>Or</Text>
      {/* <LoginInputPage /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100vh',
  },
});
