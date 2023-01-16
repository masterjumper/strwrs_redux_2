import React from "react"
import { View , StyleSheet} from "react-native"
//import StyledText from './StyledText'
import SpeciesHeader from './SpeciesHeader'
import SpeciesStats from './SpeciesStats'
import theme from "../../theme"

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },
    language:{
        color: theme.colors.white,
        padding:5,
        backgroundColor:theme.colors.primary,        
        alignSelf:'flex-start',
        borderRadius:4,
        overflow:'hidden'        
    },
    image:{
        width:48,
        height:48,
        borderRadius:4,
    }

})

const Species = props => (
    <View key={props.id} style={styles.container}>
        <SpeciesHeader {...props}/>
        <SpeciesStats {...props}/>
    </View>
)

export default Species