import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Exemplo02 from './jsx_examples/exemplo-02-estrutura';
//import Exemplo04 from './jsx.listas/Lista1';
import Lista03 from './jsx.listas/lista3';
import ViewScaffold from './basic_components/view_examples01';
import ViewExemple2 from './basic_components/view_examples02';
import ExercicioView1 from './exc_view/ex1';
import ExercicioView2 from './exc_view/ex2';
import ExercicioView3 from './exc_view/ex3';
import ExercicioView4 from './exc_view/ex4';
import ExercicioView5 from './exc_view/ex5';
import ExercicioView6 from './exc_view/ex6';
export default function App() {

  return (
    <View style={styles.container}>
      <ExercicioView6/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
   
  },
});
