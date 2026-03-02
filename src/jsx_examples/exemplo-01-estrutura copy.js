// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Exemplo01() {
  const nome = "maria";
  const idade = 28;
  const preco = 40.6;

  const usuario = {
    nome: "ana",
    cidade: "Salto",
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Variaveis</Text>
      <Text style={styles.subtitulo}>Variaveis Comuns</Text>
      <View>
        <Text>nome: {nome.toUpperCase()}</Text>
        <Text>idade: {idade}</Text>
        <Text>preco: {preco * 2}</Text>
      </View>
            <View>
        <Text>nome: {usuario.nome}</Text>
        <Text>cidade: {usuario.cidade}</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
