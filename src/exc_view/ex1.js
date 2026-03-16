import { View, Text, StyleSheet } from "react-native"

export default function ExercicioView1(){
    return(
        <View style={styles.container}>
           
                <View style={{flexDirection:'colum', gap: 8}}>
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
        width: 50,
        height: 50,
        backgroundColor: "#f44242",
    },
     boxBlue:{
        width: 50,
        height: 50,
        backgroundColor: "#4285f4",
        
    },
     boxGreen:{
        width: 50,
        height: 50,
        backgroundColor: "#74f442",
    },
    textBox:{
        fontSize: 12,
        fontWeight: "bold",
    }
})