import { View, Text, StyleSheet } from "react-native"

export default function ExercicioView4(){
    return(
        <View style={styles.container}>
           
                <View style={{flexDirection:'colum', gap: 8}}>
                    <View style={styles.box}>
                        <Text style={styles.textBox}>Centro</Text>
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
    box:{
        width: 120,
        height: 120,
        backgroundColor: "#f4c542",
        alignItems: "center",
        justifyContent:"center"
    },

    textBox:{
        fontSize: 12,
        fontWeight: "bold",
    }
})
