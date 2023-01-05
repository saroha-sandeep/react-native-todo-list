import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddItem from './screens/addItem';

import RenderList from './screens/List';

const Stack = createNativeStackNavigator();

export default function App() {
  const DUMMY_LIST = [
    {
        id: 1,
        status: 'pending',
        text: 'This is item 1',
    },
    {
        id: 2,
        status: 'done',
        text: 'This is item 2',
    },
    {
        id: 3,
        status: 'done',
        text: 'This is item 3',
    },
    {
        id: 4,
        status: 'done',
        text: 'This is item 4',
    },
    {
        id: 5,
        status: 'done',
        text: 'This is item 5',
    },
    {
        id: 6,
        status: 'done',
        text: 'This is item 6',
    },
];
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator style={styles.container} initialRouteName="List">
        <Stack.Screen name="AddItem" component={AddItem} options={{title: 'Add Item'}}/>
        <Stack.Screen name="List" options={{title: 'All Items'}}>
          {(props) => <RenderList {...props} data={DUMMY_LIST} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});
