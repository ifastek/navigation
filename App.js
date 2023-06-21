

import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Feed(){
  return(
    <View style={{flex: 1, alignContent: 'center', alignItems:'center'}}>
      <Text style={{fontSize: 40}}>MY feeds</Text>
    </View>
  )
}

function Messages(){
  return(
    <View style={{flex: 1, alignContent: 'center', alignItems:'center'}}>
      <Text style={{fontSize: 40}}>MY messages</Text>
    </View>
  )
}


function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}



function Profile(){
  return(
    <View style={{flex: 1, alignContent: 'center', alignItems:'center'}}>
      <Text style={{fontSize: 40}}>MY PROFILE</Text>
    </View>
  )
}

function Settings(){
  return(
    <View style={{flex: 1, alignContent: 'center', alignItems:'center'}}>
      <Text style={{fontSize: 40}}>MY settings</Text>
    </View>
  )
}


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
