import React from 'react' 
import {View} from 'react-native'
import StyledText from './StyledText'

const parseThounsands = value =>{
    //
    return value == 'unknown' ? String(value) : 

        /* value >= 1000000000000 ? `${Math.round(value/1000000000000)}B` : 

        value >= 1000000 ? `${Math.round(value/1000000)}M` :  */

         `${Math.round(value/10)/10}` 

    
}

const PeoplesStats = props =>{
    return (
    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View>
            {/* <StyledText fontWeight='bold' align='center'> {parseThounsands(props.stargazersCount)}</StyledText>
            <StyledText >Stars</StyledText> */}
            <StyledText fontWeight='bold' align='center'> {props.hair_color}</StyledText>
            <StyledText >Hair Color</StyledText>
            
        </View>
        <View>
            {/* <StyledText fontWeight='bold' align='center'> {parseThounsands(props.forksCount)}</StyledText>
            <StyledText >Forks</StyledText> */}
            <StyledText fontWeight='bold' align='center'>{props.skin_color}</StyledText>
            <StyledText >Skin Color</StyledText>
            
        </View>
        <View>
            {/* <StyledText fontWeight='bold' align='center'> {props.reviewCount}</StyledText>
            <StyledText >Reviews</StyledText> */}
            <StyledText fontWeight='bold' align='center'> {props.eye_color}</StyledText>
            <StyledText >Eye Color</StyledText>            
        </View>
        <View>
            {/* <StyledText fontWeight='bold' align='center'> {props.ratingAverage}</StyledText>
            <StyledText >Rating</StyledText> */}            
            <StyledText fontWeight='bold' align='center'> {parseThounsands(props.height)}</StyledText>
            <StyledText >Height</StyledText>
        </View>

      
        
    </View>
    )
}

export default PeoplesStats