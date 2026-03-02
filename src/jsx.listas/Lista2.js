import { View, Text, ScrollView, StyleSheet } from "react-native";
export default function Lista02() {
    
const loja_aberta = true;
const tem_promocao = true;
const nota = 7.5;
function validarNota(nota){
    if(nota >= 7){
        return <Text style={{color:"green"}}>Aprovado</Text>
    } else (nota)
}
return (
<ScrollView style={styles.container}>
<Text style={styles.titulo}>Lista 02</Text>
<View style={styles.card}>
<Text style={styles.label}>Exercício 1</Text>
<Text>status: {loja_aberta ? "Logado" : "Deslogado"}</Text>
</View>

<View style={styles.card}>
<Text style={styles.label}>Exercício 2</Text>
{tem_promocao && <Text>Promoção ativa!
Aproveite os descontos</Text>}
</View>

<View style={styles.card}>
<Text style={styles.label}>Exercício 3</Text>
{validarNota(nota)}
</View>
</ScrollView>
)}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#F5F5F5",
paddingTop: 60,
},
titulo: {
fontSize: 22,
fontWeight: "bold",
textAlign: "center",
marginBottom: 20,
color: "#212121",
}})