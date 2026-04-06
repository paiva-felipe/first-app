import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header} />

      <View style={styles.content}>

        <View style={styles.row}>
          <View style={[styles.card, { backgroundColor: 'red' }]} />
          <View style={[styles.card, { backgroundColor: 'blue' }]} />
          <View style={[styles.card, { backgroundColor: 'green' }]} />
        </View>

        <View style={styles.row}>
          <View style={[styles.panelMain, { backgroundColor: 'purple' }]} />
          <View style={[styles.panelSide, { backgroundColor: 'orange' }]} />
        </View>

      </View>

      <View style={styles.footer} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: '#0a1f44',
  },
  footer: {
    height: 40,
    backgroundColor: '#222',
  },
  content: {
    flex: 1,
    padding: 8,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  card: {
    flex: 1,
    height: 80,
  },
  panelMain: {
    flex: 2,
    height: 120,
  },
  panelSide: {
    flex: 1,
    height: 120,
  },
});