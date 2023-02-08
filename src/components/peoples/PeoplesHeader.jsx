
import React from 'react' 
import {View, Image, StyleSheet} from 'react-native'
import StyledText from './StyledText'
import theme from '../../theme'

const styles = StyleSheet.create({    
    language:{
        color: theme.colors.white,
        padding:4,
        backgroundColor:theme.colors.primary,
        alignSelf:'flex-start',
        marginTop:4,
        marginBottom:4,
        borderRadius:4,
        overflow:'hidden'        
    },
    image:{
        width:48,
        height:48,
        borderRadius:4,
    }
})
const imgURL = 'https://starwars-visualguide.com/assets/img/characters/'

const PeoplesHeader = props =>{
    return (
        <View style={{flexDirection:'row', paddingBottom:2}}>
            <View style={{ flexGrow:0 }}>
                <Image style={styles.image} source= {{ uri:
                `${imgURL + props.url.split('/')[props.url.split('/').length - 2]}.jpg`
                     }}></Image>
            </View>
            <View style={{ flex:1, paddingLeft:10 }}>
                {/* <StyledText fontWeight='bold'>{props.fullName}</StyledText> */}
                <StyledText fontWeight='bold'>{props.name.toLocaleUpperCase()}</StyledText>
                {/* <StyledText color='secondary'>{props.description}</StyledText> */}
                <StyledText style={styles.language}> Gender:{props.gender.charAt(0).toUpperCase()+ props.gender.slice(1)}</StyledText>
                {/* <StyledText color='secondary'> {props.gender.charAt(0).toUpperCase()+ props.gender.slice(1)}</StyledText> */}
                
                {/* <StyledText style={styles.language}>{props.language}</StyledText> */}
                {/* <StyledText style={styles.language}>{props.terrain.charAt(0).toUpperCase()+ props.terrain.slice(1)}</StyledText> */}
            </View>
        </View>
    )}

export default PeoplesHeader