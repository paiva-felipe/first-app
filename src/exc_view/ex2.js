import { View, Text, StyleSheet } from "react-native"

export default function ExercicioView2(){

    return(
        <View style={styles.container}>
           
                <View style={{flexDirection:'row', gap: 8}}>
                    <View style={styles.boxRed}>
                        <Text style={styles.textBox}>Vermelho</Text>
                    </View>
                    <View style={styles.boxBlue}>
                        <Text style={styles.textBox}>Azul</Text>
                    </View>
                    <View style={styles.boxGreen}>
                        <Text style={styles.textBox}>Verde</Text>
                    </View>
                </View>
        
        </View>
    )
}


const styles= StyleSheet.create({
    container:{
        flexDirection: 'colum',
        justifyContent: 'center',
    },
    exemplo:{
        width: "100%",
     
    },
    boxRed:{
        width: 80,
        height: 80,
        backgroundColor: "#f44242",
        alignItems:"center",
        justifyContent: "center"
    },
     boxBlue:{
        width: 80,
        height: 80,
        backgroundColor: "#4285f4",
        alignItems:"center",
        justifyContent: "center"
    },
     boxGreen:{
        width: 80,
        height: 80,
        backgroundColor: "#74f442",
        alignItems:"center",
        justifyContent: "center"
    },
    textBox:{
        fontSize: 12,
        fontWeight: "bold",
    }
})
