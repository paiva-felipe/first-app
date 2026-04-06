import { View, Text, StyleSheet } from "react-native"

export default function Somativa1(){
    return(
        <View style={[styles.container,{}]}>
           
                <View style={{flexDirection:'row', gap: 8}}>
                    <View style={styles.boxAmarela}>
                        <Text style={styles.textBox}>Vermelho</Text>
                    </View>
                    <View style={styles.boxAzulEscuro}>
                        <Text style={styles.textBox}>Azul Escuro</Text>
                    </View>
                </View>


                <View style={{flexDirection:'row', gap: 5}}>
                    
                    <View style={[styles.boxVerde, {flex: 1}]}>
                        <Text style={styles.textBox}>Verde</Text>
                    </View>

                    <View style={{flexDirection:'column', gap: 5}}>
                        <View style={[styles.boxRosa, {flex: 1}]}>
                        <Text style={styles.textBox}>Rosa</Text>
                    </View>
                    <View style={[styles.boxLaranja, {flex: 1}]}>
                        <Text style={styles.textBox}>Laranja</Text>
                    </View>
                    </View>


                    {/* <View style={[styles.boxRosa, {flex: 1}]}>
                        <Text style={styles.textBox}>Rosa</Text>
                    </View>
                    <View style={[styles.boxRosa, {flex: 1}]}>
                        <Text style={styles.textBox}>Rosa</Text>
                    </View> */}
                </View>

                <View style={[styles.fundo, {flexDirection:'row', gap: 8, margin: 10}]}>
                    <View style={styles.boxRed}>
                        <Text style={styles.textBox}>Vermelho</Text>
                    </View>
                    <View style={styles.boxTeal}>
                        <Text style={styles.textBox}>Teal</Text>
                    </View>
                    <View style={styles.boxRoxo}>
                        <Text style={styles.textBox}>Roxo</Text>
                    </View>
                </View>
        </View>
    )
}

export const styles= StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex:1,
    },
    boxAmarela:{
        flex:1,
        height:100,
        width:"100%",
        backgroundColor: "#fae821",
        alignItems:"center",
        justifyContent: "center"
    },
    boxAzulEscuro:{
        flex:2,
        height:100,
        backgroundColor: "#0720ae",
        alignItems:"center",
        justifyContent: "center"
    },
    boxVerde:{
        flex:1,
        height: '100%',
        backgroundColor: "#22ec22",
        alignItems:"center",
        justifyContent: "center",
        margin: 5,
    },
    boxRosa:{
        flex:1,
        height: '100%',
        width:170,
        backgroundColor: "#dc297d",
        alignItems:"center",
        justifyContent: "center",
        margin: 5,
    },
    boxLaranja:{
        flex:1,
        height: '100%',
        backgroundColor: "#df841c",
        alignItems:"center",
        justifyContent: "center",
        margin: 5,
    },
    fundo:{
    },
    boxRed:{
        flex:1,
        height: 100,
        backgroundColor: "#ff0000",
        alignItems:"center",
        justifyContent: "center",
    },
    boxTeal:{
        flex:1,
        height: 100,
        backgroundColor: "#0da474",
        alignItems:"center",
        justifyContent: "center"
    },
    boxRoxo:{
        flex:1,
        height: 100,
        backgroundColor: "#e100ff",
        alignItems:"center",
        justifyContent: "center",
    }
})