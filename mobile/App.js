import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { HomeScreen }  from './layouts';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE9E5',
  },
});

export default App;