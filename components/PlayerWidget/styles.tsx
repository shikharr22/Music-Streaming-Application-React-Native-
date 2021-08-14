import { StyleSheet } from "react-native";


const styles=StyleSheet.create({
    songItem:{
        flexDirection:"row",
        width:"100%",
        height:"30%",
        marginTop:0,
        paddingBottom:50,
    },
    image:{
        position:"absolute",
        top:4,
        width:70,
        height:75,
        
    },
    title:{
        marginTop:20,
        marginLeft:80,
        color:"white",
        fontSize:14,
        fontWeight:"bold",
    },
    artist:{
        paddingTop:3,
        marginLeft:80,
        color:"white",
        fontSize:12,
    },
    list:{
        position:"absolute",
        width:"100%",
        height:300,
        justifyContent:"space-between",
        top:300,
        left:7,
        padding:10,
    
    },
    widgetIcons:{
        flexDirection:'row',
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        top:20,
        right:5,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      AudioPLayer: {
        width: '100%',
        height: 50,
        alignItems: 'center',
      },
      progress:{
          position:"absolute",
          height:3,
          backgroundColor:"#ffffff",
      }
});

export default styles;