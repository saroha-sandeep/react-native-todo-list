import { View, StyleSheet, Button } from "react-native";

const ButtonPrimary = (props) => {
    return (
        <View style={styles.container}>
            <Button {...props}  />        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})

export default ButtonPrimary;