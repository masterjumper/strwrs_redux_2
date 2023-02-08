import React from 'react' 
import {View} from 'react-native'
import StyledText from './StyledText'

const parseThounsands = value =>{
    //
    return value == 'unknown' ? String(value) : 

        value >= 1000000000000 ? `${Math.round(value/1000000000000)}B` : 

        value >= 1000000 ? `${Math.round(value/1000000)}M` : 

         `${Math.round(value/100)/10}k` 

    
}

const PlanetsStats = props =>{
    return (
    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View>
            {/* <StyledText fontWeight='bold' align='center'> {parseThounsands(props.stargazersCount)}</StyledText>
            <StyledText >Stars</StyledText> */}
            <StyledText fontWeight='bold' align='center'> {props.diameter}</StyledText>
            <StyledText >Diameter</StyledText>
            
        </View>
        <View>
            {/* <StyledText fontWeight='bold' align='center'> {parseThounsands(props.forksCount)}</StyledText>
            <StyledText >Forks</StyledText> */}
            <StyledText fontWeight='bold' align='center'>{props.orbital_period}</StyledText>
            <StyledText >Orbital Period</StyledText>
            
        </View>
        <View>
            {/* <StyledText fontWeight='bold' align='center'> {props.ratingAverage}</StyledText>
            <StyledText >Rating</StyledText> */}            
            <StyledText fontWeight='bold' align='center'> {props.gravity.substring(0, props.gravity.indexOf(" "))}</StyledText>
            <StyledText >Gravity</StyledText>
        </View>

        <View>
            {/* <StyledText fontWeight='bold' align='center'> {props.reviewCount}</StyledText>
            <StyledText >Reviews</StyledText> */}
            <StyledText fontWeight='bold' align='center'> {parseThounsands(props.population)}</StyledText>
            <StyledText >Population</StyledText>            
        </View>
        
    </View>
    )
}

export default PlanetsStats