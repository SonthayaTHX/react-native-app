import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text} from 'react-native';
import Homepage from './bottombar/Homepage'; 
import Profile from './bottombar/Profile';
import Mail from './bottombar/Mail';
import Qrcode from './bottombar/qrcode';
import Topbar from './TobBar';
import { Entypo, MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#7B2BA1', // สีพื้นหลังที่นี่
    borderTopColor: 'transparent', // ถ้าต้องการลบเส้นบนสุด
  },
}

const TopAndBot = () => {
  return (
    <View style={{ flex: 1 }}>
    <Topbar />
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
            name="Home" 
            component={Homepage} 
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{alignItems: 'center', justifyContent: 'center' }}>
                    <Entypo name="home" size={24} color={focused ? "#ffffff" : "white"} />
                    <Text style={{fontSize: 12, color: focused ? "#ffffff" : "white"}}>หน้าแรก</Text>
                  </View>
                );
              }
            }} 
            />
            <Tab.Screen 
            name="Qrcode" 
            component={Qrcode} 
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{alignItems: 'center', justifyContent: 'center' }}>
                    <FontAwesome name="qrcode" size={24} color={focused ? "#ffffff" : "white"} />
                    <Text style={{fontSize: 12, color: focused ? "#ffffff" : "white"}}>QrCode</Text>
                  </View>
                );
              }
            }} 
            />
          <Tab.Screen 
            name="Mail" 
            component={Mail} 
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="mail" size={24} color={focused ? "#ffffff" : "white"} />
                    <Text style={{fontSize: 12, color: focused ? "#ffffff" : "white"}}>ข้อความ</Text>
                  </View>
              )
            }
            }} />
          <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={{alignItems: 'center', justifyContent: 'center' }}>
                    <MaterialIcons name="face" size={24} color={focused ? "#ffffff" : "white"} />
                    <Text style={{fontSize: 12, color: focused ? "#ffffff" : "white"}}>บัญชีของฉัน</Text>
                  </View>
              );
            }
            }} />
      </Tab.Navigator>
      </View>
  );
}


export default TopAndBot;