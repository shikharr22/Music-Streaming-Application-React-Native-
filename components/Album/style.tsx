import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#000000",
        justifyContent:"center",
        alignItems:"center",
        height:195,
        width:160,
        padding:2,
        

    },
    image:{
        position:"absolute",
        top:10,
        width:"95%",
        height:"75%",
        borderRadius:5,
    },
    text:{
        fontSize:12,
        fontWeight:'bold',
        marginTop:5,
        position:"absolute",
        top:155,
        color:"#d9d3c3",
    }
});

export default styles;