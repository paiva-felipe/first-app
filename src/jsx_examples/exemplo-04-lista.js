import { View, Text, StyleSheet } from "react-native";

export default function Exemplo04() {
  const frutas = ["laranja", "abacaxi", "acerola"];
  const alunos = [
    { id: 1, nome: "marlon", nota: 8 },
    { id: 2, nome: "Daniel", nota: 10 },
    { id: 1, nome: "Celso", nota: 7 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista e Map</Text>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}> Map comum </Text>
          {frutas.map((fruta, index) => (
            <Text key={index}>
              {index + 1} - {fruta}
            </Text>
          ))}
      </View>

      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}> Map objeto  </Text>
          {alunos.map((aluno) => (
            <Text key={aluno.id}>
              {aluno.nome} - {aluno.nota}
            </Text>
          ))}
       
      </View>

      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>  Map com filter </Text>
          {alunos
            .filter((aluno) => aluno.nota > 7)
            .map((aluno) => (
              <Text key={aluno.id}>
                Aprovado: {aluno.nome} - Nota: {aluno.nota}
              </Text>
            ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d63434",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#af0808",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff59a",
    borderRadius: 8,
  },
});
