// import { View, Text, StyleSheet } from "react-native"

// export default function ExercicioView5(){
//     return(
//         <View style={styles.container}>
           
//                 <View style={{flexDirection:'row', gap: 8}}>
//                     <View style={[styles.box1,{flex: 1}]}>
//                         <Text style={styles.textBox}>Coluna 1</Text>
//                     </View>
//                     <View style={[styles.box2,{flex: 1}]}>
//                         <Text style={styles.textBox}>Coluna 2</Text>
//                     </View>
//                 </View>
        
//         </View>
//     )
// }

// const styles= StyleSheet.create({
//     container:{
//         flexDirection: 'colum',
//         justifyContent: 'center',
//     },
//     exemplo:{
//         width: "100%",
     
//     },
//     box1:{
//         width: 50,
//         height: 50,
//         backgroundColor: "#77f442",
//     },
//      box2:{
//         width: 50,
//         height: 50,
//         backgroundColor: "#4285f4",
        
//     },
//     textBox:{
//         fontSize: 12,
//         fontWeight: "bold",
//     }
// })
import { View, Text, StyleSheet } from "react-native"

export default function ExercicioView2(){

    return(
        <View style={styles.container}>
           
                <View style={{flexDirection:'row', gap: 8, width: "100%", height:"100%"}}>
                    <View style={[styles.box1,{flex: 1}]}>
                        <Text style={styles.textBox}>Coluna 1</Text>
                    </View>
                    <View style={[styles.box2,{flex: 1}]}>
                        <Text style={styles.textBox}>Coluna 2</Text>
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
    box1:{
        backgroundColor: "rgb(29, 255, 104)",
        alignItems:"center",
        justifyContent: "center"
    },
     box2:{

        backgroundColor: "#4285f4",
        alignItems:"center",
        justifyContent: "center"
    },

    textBox:{
        fontSize: 12,
        fontWeight: "bold",
    }
})
