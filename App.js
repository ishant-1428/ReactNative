import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, decreaseCount } from './redux/actions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CounterScreen from './CounterScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Count: {count}</Text>
      <Button title="Increase" onPress={() => dispatch(increaseCount())} />
      <Button title="Decrease" onPress={() => dispatch(decreaseCount())} />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
