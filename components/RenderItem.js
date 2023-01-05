import { Text, View, StyleSheet } from "react-native";

function RenderItem({item}) {
    return (
        <View style={[styles.container, styles.background]}>
            <Text style={styles.text}>{ item.text }</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth:1
    },
    background: {
        backgroundColor: '#FF0000',
    },
    text:{
        flex:1,
        fontSize: 24,
        padding:8,
    }
})
export default RenderItem;