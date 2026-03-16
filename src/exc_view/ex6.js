import { View, Text, StyleSheet } from "react-native"

export default function ExercicioView6(){

    return(
        <View style={styles.container}>
           
               
                    <View style={styles.box1}>
                        <Text style={styles.textBox}>Coluna 1</Text>
                    </View>
                    <View style={styles.box3}>
                        <Text style={styles.textBox}>Coluna 2</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textBox}>Coluna 3</Text>
                    </View>
                </View>
        
     
    )
}


const styles= StyleSheet.create({
    container:{
        flex: 1
    },
    box1:{
        backgroundColor: "rgb(17, 139, 58)",

        justifyContent: "center",
        height: 60
    },
     box2:{

        backgroundColor: "#4285f4",
        justifyContent: "center",
        height: 60,
        width:"100%"
    },
    box3:{
        flex: 1,
        backgroundColor: "#959393"
    },
    textBox:{
        fontSize: 12,
        fontWeight: "bold",
    }
})