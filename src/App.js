import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Exemplo02 from './jsx_examples/exemplo-02-estrutura';
//import Exemplo04 from './jsx.listas/Lista1';
import Lista03 from './jsx.listas/lista3';
export default function App() {

  return (
    <View style={styles.container}>
      <Lista03/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5e1ba',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
