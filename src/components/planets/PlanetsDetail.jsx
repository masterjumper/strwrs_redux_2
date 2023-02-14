import React,{useEffect} from "react"
import {View, Image, StyleSheet, ImageBackground, Text, BackHandler, Alert} from 'react-native'
import StyledText from './StyledText'
import theme from "../../theme"
import {useLocation, useNavigate } from 'react-router-native'; 

const imgURL = 'https://starwars-visualguide.com/assets/img/planets/'

const PlanetsDetail = (props) => {
    let planet = useLocation()
    let navigate = useNavigate ()
    
    useEffect(() => {
        
        const backAction = () => {
         navigate('/planets')          
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
                    `${imgURL + planet.state.item.url.split('/')[planet.state.item.url.split('/').length - 2]}.jpg`
                        }}></Image>}
                </ImageBackground>         
                </View>
                <View style={{ flex:1, paddingLeft:10 }}>                
                    <StyledText style={styles.language} fontWeight='bold'>{planet.state.item.name.toUpperCase()}</StyledText>                                    
                </View>   
            </View>
            <View style={{justifyContent:'space-around'}}>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Terrain:</StyledText><Text>  {planet.state.item.terrain}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Climate:</StyledText><Text>  {planet.state.item.climate}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold' >Diameter:</StyledText><Text> {planet.state.item.diameter}{planet.state.item.diameter == 'unknown' ? '' : 'Kms'} </Text>
                </View>        
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Orbital Period:</StyledText><Text> {planet.state.item.orbital_period} {planet.state.item.orbital_period == 'unknown' ? ' ' : planet.state.item.orbital_period > 1 ? ' days' : ' day'} </Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Gravity:</StyledText><Text> {planet.state.item.gravity}</Text>
                </View> 
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Population:</StyledText><Text> {planet.state.item.population}</Text>
                </View>                                
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Rotation Period:</StyledText><Text> {planet.state.item.rotation_period} {planet.state.item.rotation_period =='unknown' ? '' : 'hours'}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Surface Water:</StyledText><Text> {planet.state.item.surface_water}{planet.state.item.surface_water == 'unknown' ? '' : '%' }</Text>
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

export default PlanetsDetail