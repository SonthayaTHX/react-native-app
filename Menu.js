import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { useAuth } from './AuthContext';

const Menu = () => {
    const navigation = useNavigation();
    const {logout} = useAuth();

    const HLogout = () => {
        // setIsLoggedIn(false); // เปลี่ยนสถานะเมื่อออกจากระบบ
        logout();
        navigation.navigate('TopAndBot');
    };

    return(
        <View style={styles.MenuDataContainer}>
        <AntDesign
          name="left"
          onPress={() => {navigation.navigate('TopAndBot')}}
          size={28}
          color="white"
          style={styles.actionButtonback}
        />
        <Text style={styles.Text}>
            Menu
        </Text>
        <Appbar.Action
            icon="logout"
            onPress={HLogout}
            size={30}
            color="white"
            style={styles.actionButtonout}
          /> 
          <Appbar.Content
          title="ออกจากระบบ"
          titleStyle={styles.Textout}
          onPress={HLogout}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    MenuDataContainer: {
        backgroundColor: '#965bb2',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButtonback: {
        right: 150,
        top: 50,
      },
      actionButtonout: {
        top: 450,
        left: 40,
      },
    Text: {
        color: '#ffffff',
        fontWeight: '500',
        fontSize: 16,
        marginTop: 10,
        right: 100,
        top: 15,
    },
    Textout: {
        color: '#ffffff',
        fontWeight: '500',
        fontSize: 16,
        marginTop: 10,
        left: 110,
        top: 395,
    }
    
});

export default Menu;