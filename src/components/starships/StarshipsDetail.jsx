import React,{useEffect} from "react"
import {View, Image, StyleSheet, ImageBackground, Text, BackHandler, Alert} from 'react-native'
import StyledText from './StyledText'
import theme from "../../theme"
import {useLocation, useNavigate } from 'react-router-native'; 

const imgURL = 'https://starwars-visualguide.com/assets/img/starships/'

const StarshipsDetail = (props) => {
    let starship = useLocation()
    let navigate = useNavigate ()
    
    useEffect(() => {
        console.log(starship)
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
                <ImageBackground source= {{ uri:`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`}}>
                {<Image style={styles.image} source= {{ uri:
                    `${imgURL + starship.state.item.url.split('/')[starship.state.item.url.split('/').length - 2]}.jpg`
                        }}></Image>}
                </ImageBackground>         
                </View>
                <View style={{ flex:1, paddingLeft:10 }}>                
                    <StyledText style={styles.language} fontWeight='bold'>{starship.state.item.name.toUpperCase()}</StyledText>                                    
                </View>   
            </View>
            <View style={{justifyContent:'space-around'}}>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Manufacturer:</StyledText><Text>  {starship.state.item.manufacturer}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Model:</StyledText><Text>  {starship.state.item.model}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold' >Class:</StyledText><Text> {starship.state.item.starship_class}</Text>
                </View>        
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Speed:</StyledText><Text> {starship.state.item.max_atmosphering_speed}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Length:</StyledText><Text> {starship.state.item.length}</Text>
                </View> 
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Passengers:</StyledText><Text> {starship.state.item.passengers}</Text>
                </View>                                
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Cargo Capacity:</StyledText><Text> {starship.state.item.cargo_capacity} {starship.state.item.rotation_period =='unknown' ? '' : 'hours'}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Consumables:</StyledText><Text> {starship.state.item.consumables}</Text>
                </View> 
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Crew:</StyledText><Text> {starship.state.item.crew}</Text>
                </View>     
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Hyperdrive Rating:</StyledText><Text> {starship.state.item.hyperdrive_rating}</Text>
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

export default StarshipsDetail