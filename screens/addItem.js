import { View, Text, StyleSheet } from "react-native";
import { GlobalColors } from "../constants/Colors";

import { GlobalStyles } from '../constants/GlobalStyles'

function AddItem(){
    return (
        <View style={[GlobalStyles.container]}>
            <Text style={GlobalColors.primaryText}> add item</Text>
        </View>
    )
}

export default AddItem;

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})