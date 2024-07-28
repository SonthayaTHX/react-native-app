import React from 'react';
import { SafeAreaView, Image, StyleSheet, Platform} from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from './AuthContext';
import Logo from './assets/Logo_UP.png';

const Topbar = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { isLoggedIn, logout} = useAuth();
    const { username } = route.params || {};
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
      navigation.navigate('Login');
      // setIsLoggedIn(true); // เปลี่ยนสถานะเมื่อเข้าสู่ระบบสำเร็จ
  };

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Image
          source={require('./assets/Logo_UP.png')}
          style={styles.appBarImage}
        /> 
        {!isLoggedIn ? (
          <React.Fragment> 
        <Appbar.Action
          icon="login"
          onPress={handleLogin}
          size={30}
          color="white"
          style={styles.actionButtonlogin}
        />
        <Appbar.Content
          title="เข้าสู่ระบบ"
          titleStyle={styles.title}
          onPress={handleLogin}
        />
        </React.Fragment>
        ) : (
          <React.Fragment>
            <Appbar.Content
              title={username}
              titleStyle={styles.titleIn}
            />
          </React.Fragment>
        )}
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.navigate('Menu')}
          size={30}
          color="white"
          style={[styles.actionButton]}
        />
      </Appbar.Header>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        // flex: 0,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: '#fff',
      },
      header: {
        backgroundColor: '#7B2BA1',
        height: 50,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      appBarImage: {
        width: 45,
        height: 40,
        resizeMode: 'contain',
        bottom: 13,
      },
      actionButton: {
        bottom: 10,
        left: 10,
        // marginLeft: 'auto',
        marginHorizontal: 10,
      },
      actionButtonlogin: {
        bottom: 11,
        left: 120,
      },
      content: {
        alignItems: 'center',
        justifyContent: 'center', 
      },
      title: {
        fontSize: 14,
        color: '#fff',
        bottom: 11,
        left: 110,
      },
      titleIn: {
        fontSize: 14,
        color: '#fff',
        bottom: 11,
        left: 170,
      },
});

export default Topbar;
