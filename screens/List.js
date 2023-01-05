import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import RenderItem from "../components/RenderItem";
import ButtonPrimary from "../components/Button";

const RenderList = React.memo(function RenderList ({ data, navigation  }) {

    return (
        <>
        <View style={styles.container}>
            <FlatList data={data}  renderItem={RenderItem} keyExtractor={item => item.id} />
        </View>
        <View style={styles.container}>
            <ButtonPrimary title="Add Item" onPress={() => navigation.navigate('AddItem')} />
        </View>
        </>
    )
});

export default RenderList;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
    },

});
