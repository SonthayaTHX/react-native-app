import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { AuthProvider } from './AuthContext';
import TopAndBot from './TopAndBot';
import Login from './Login';
import Menu from './Menu';


const Stack = createStackNavigator();

function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TopAndBot" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TopAndBot">
        {props => <TopAndBot {...props} />}
      </Stack.Screen> 

      <Stack.Screen name="Login" 
      component={Login} 
      options={{ headerShown: false }} 
      />
      <Stack.Screen name="Menu"
      component={Menu}
      options={{ headerShown: false }}
      />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
});

export default App;
