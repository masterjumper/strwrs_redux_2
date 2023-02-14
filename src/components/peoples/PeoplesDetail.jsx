import React,{useEffect} from "react"
import {View, Image, StyleSheet, ImageBackground, Text, BackHandler, Alert} from 'react-native'
import StyledText from './StyledText'
import theme from "../../theme"
import {useLocation, useNavigate } from 'react-router-native'; 

const imgURL = 'https://starwars-visualguide.com/assets/img/characters/'

const PeoplesDetail = (props) => {
    let people = useLocation()
    let navigate = useNavigate ()
    
    useEffect(() => {
        
        const backAction = () => {
         navigate('/peoples')          
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
                    `${imgURL + people.state.item.url.split('/')[people.state.item.url.split('/').length - 2]}.jpg`
                        }}></Image>}
                </ImageBackground>         
                </View>
                <View style={{ flex:1, paddingLeft:10 }}>                
                    <StyledText style={styles.language} fontWeight='bold'>{people.state.item.name.toUpperCase()}</StyledText>                                    
                </View>   
            </View>
            <View style={{justifyContent:'space-around'}}>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Gender:</StyledText><Text>  {people.state.item.gender}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Hair Color:</StyledText><Text>  {people.state.item.hair_color}</Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold' >Skin Color:</StyledText><Text> {people.state.item.skin_color}</Text>
                </View>        
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Eyes Color:</StyledText><Text> {people.state.item.eye_color} </Text>
                </View>
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Height:</StyledText><Text> {parseHigth(people.state.item.height)}</Text>
                </View> 
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Mass:</StyledText><Text> {people.state.item.mass}</Text>
                </View>                                
                <View style={{flexDirection:'row'}}>            
                    <StyledText fontWeight='bold'>Birth Year:</StyledText><Text> {people.state.item.birth_year}</Text>
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

export default PeoplesDetail