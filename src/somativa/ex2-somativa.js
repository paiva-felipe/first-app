import { View, Text, StyleSheet } from "react-native";

export default function Somativa2(){
    return(
        <View style={styles.container}>
            <View style={[styles.header,{gap:8, margin:10}]}>
                <Text style={styles.textBox}>Header</Text>
            </View>

            <View style={{flexDirection:'row', gap: 5}}>

                    <View style={[styles.boxVerde]}>
                        <Text style={styles.textBox}>Verde</Text>
                    </View>

                    <View style={{flexDirection:'', gap: 5}}>
                        <View style={[styles.boxRosa, {flex: 1}]}>
                        <Text style={styles.textBox}>Rosa</Text>
                    </View>
                    <View style={[styles.boxLaranja, {flex: 1}]}>
                        <Text style={styles.textBox}>Laranja</Text>
                    </View>
                    </View>

            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000'
    },
    header:{
        height:60,
        backgroundColor: "#2c3e50",
        alignItems:'center',
        justifyContent:'center',
        borderRadius: '5%'
    },
    textBox:{
        color: '#ffff'
    },
    // boxHeader:{
    //     height: '100%',
    //     width: 80,
    //     backgroundColor: "#b1c8b1",
    //     alignItems:"center",
    //     justifyContent: "center",
    //     margin: 5,
    // },
     boxVerde:{
        width: 80,
        height: '100%',
        backgroundColor: "#bbd3bb",
        alignItems:"center",
        justifyContent: "center",
        margin: 5,
    },
    boxRosa:{
        flex:1,
        height:100,
        width:170,
        backgroundColor: "#5beb62",
        alignItems:"center",
        justifyContent: "center",
        margin: 5,
    },
    boxLaranja:{
        flex:1,
        height: 100,
        backgroundColor: "#1315ae",
        alignItems:"center",
        justifyContent: "center",
        margin: 5,
    },
    
})

