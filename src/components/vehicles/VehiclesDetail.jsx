import React,{useEffect} from "react"
import {View, Image, StyleSheet, ImageBackground, Text, BackHandler} from 'react-native'
import StyledText from './StyledText'
import theme from "../../theme"
import {useLocation, useNavigate } from 'react-router-native'; 

const imgURL = 'https://starwars-visualguide.com/assets/img/vehicles/'

const VehiclesDetail = (props) => {
    let vehicle = useLocation()
    let navigate = useNavigate ()
    
    useEffect(() => {
        const backAction = () => {
         navigate('/vehicles')          
        };

        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);
    


    return (    
        <View style={styles.container}>
            <View style={{flexDirection:'row', paddingBottom:1}}>
                <View style={{ flexGrow:0 }}>
                <ImageBackground imageStyle={{ borderRadius: 6}} source= {{ uri:`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`}}>
                {<Image style={styles.image} source= {{ uri:
                    `${imgURL + vehicle.state.item.url.split('/')[vehicle.state.item.url.split('/').length - 2]}.jpg`
                        }}></Image>}
                </ImageBackground>         
                </View>
                <View style={{ flex:1, paddingLeft:10 }}>                
                    <StyledText style={styles.language} fontWeight='bold' align={'center'}>{vehicle.state.item.name.toUpperCase()}</StyledText>                                    
                </View>   
            </View>
            <View style={{justifyContent:'space-around'}}>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold' >Manufacturer:</StyledText><StyledText style={{flex:1, paddingLeft:10}}> {vehicle.state.item.manufacturer}</StyledText>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Model:</StyledText><Text>  {vehicle.state.item.model}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Class:</StyledText><Text> {vehicle.state.item.vehicle_class}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Speed:</StyledText><Text> {vehicle.state.item.max_atmosphering_speed}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold' >Length:</StyledText><Text> {vehicle.state.item.length}</Text>
                </View>        
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Passengers:</StyledText><Text> {vehicle.state.item.passengers} </Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Cargo Capacity:</StyledText><Text> {vehicle.state.item.cargo_capacity}</Text>
                </View> 
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Consumables:</StyledText><Text> {vehicle.state.item.consumables}</Text>
                </View>                                
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Cost in Credits:</StyledText><Text> {vehicle.state.item.cost_in_credits}</Text>
                </View>                
            </View>
        </View>

    )
}

const styles = StyleSheet.create({  
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },  
    language:{
        color: theme.colors.white,
        padding:4,
        backgroundColor:theme.colors.primary,
        alignSelf:'center',
        marginTop:4,
        marginBottom:4,
        borderRadius:4,
        overflow:'hidden'        
    },
    image:{
        width:150,
        height:150,
        borderRadius:4,
    }
})

const parseThounsands = value =>{    
    return value == 'unknown' ? String(value) : 
        value >= 1000000000000 ? `${Math.round(value/1000000000000)}B` : 
        value >= 1000000 ? `${Math.round(value/1000000)}M` : 
         `${Math.round(value/100)/10}k`     
}

const parseHigth = value =>{
    //
    return value == 'unknown' ? String(value) : 
        /* value >= 1000000000000 ? `${Math.round(value/1000000000000)}B` : 
        value >= 1000000 ? `${Math.round(value/1000000)}M` :  */
         `${Math.round(value/10)/10}` 

    
}

export default VehiclesDetail