// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native"; //importa os componentes do react native

export default function Exemplo03() {
  const logado = false;
  const temNotificacoes = false;

  return (
    <View style={styles.container}>
        <View style={styles.exemplo}>
            <Text style={styles.titulo}>condicionais</Text>
            <Text style={styles.subtitulo}>Tenário</Text>
            <Text>status: {logado ? "Logado" : "Deslogado"}</Text>
        </View>
        <View style= {styles.exemplo}>
            <Text style= {styles.subtitulo}>Condicional &&</Text>
            <Text>Notificações:</Text>
            {temNotificacoes && <Text>Voce tem novas mensagens</Text>}
            {!temNotificacoes && <Text>Voce não tem mensagens</Text>}
        </View>
    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5e1ba",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color:""
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#f44286",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#f5e1ba",
    borderRadius: 8,
  },
});
