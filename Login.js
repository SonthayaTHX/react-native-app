import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MaterialCommunityIcons, MaterialIcons, AntDesign} from '@expo/vector-icons';
import { useAuth } from './AuthContext';

const Login = () => {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  const handleLogin = () => {
    // ตรวจสอบข้อมูลการเข้าสู่ระบบ
    if (username === 'admin' && password === '1111') {
        login();// ถ้าเข้าสู่ระบบสำเร็จ, นำผู้ใช้ไปยังหน้า Home
        navigation.navigate('TopAndBot', {username});
      } else {
        // ถ้าเข้าสู่ระบบไม่สำเร็จ, ให้แสดงข้อความหรือทำการจัดการอื่น ๆ
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      }
  };

  return (
    <View style={styles.container}>
      <AntDesign
          name="left"
          onPress={() => {navigation.navigate('TopAndBot')}}
          size={28}
          color="white"
          style={styles.actionButtonlogin}
        />
      <View style={styles.logoContainer}>
        <Image source={require('./assets/Logo_UP.png')} style={styles.logo} />
        <Text style={styles.title}>ล็อคอิน</Text>
      </View>
      <Text style={styles.textAboveInput}>เข้าสู่ระบบ (Sign In)</Text>
      <View style={styles.inputContainer}>
      <MaterialIcons
        name="person-outline"
        size={24}
        color={'#ffffff'}
        style={styles.inputIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={'#ffffff'}
        value={username}
        onChangeText={setUsername}
      />
      </View>
      <Text style={styles.textAboveInput}>รหัสผ่าน (Password)</Text>
      <View style={styles.inputContainer}>
      <MaterialIcons
        name="lock-outline"
        size={24}
        color={'#ffffff'}
        style={styles.passwordIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#ffffff'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={visible}
      />
      <TouchableOpacity style={styles.btnEye} onPress={() => {
          setVisible(!visible);
          setShowPassword(!showPassword);
        }
      }>
        <MaterialCommunityIcons
          name={showPassword === false ? 'eye' : 'eye-off'}
          size={20}
          color={'#ffffff'}
        />
      </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#965bb2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  actionButtonlogin: {
    right: 150,
    bottom: 30,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 40,
    marginTop: 10,
  },
  input: {
    color: '#ffffff',
    height: 40,
    width: '100%',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  textAboveInput: {
    color: '#ffffff',
    marginBottom: 10,
    right: 90,
  },
  buttonText: {
    backgroundColor: '#FBC938',
    color: '#000000',
    borderRadius: 30,
    fontSize: 18,
    width: 200,
    height: 50,
    textAlign: 'center',
    lineHeight: 50,
    top: 20,
  },
  inputContainer:{
    width: '100%',
    borderRadius: 25,
    marginBottom: 5,
    justifyContent: 'center',
  },
  btnEye: {
    position: 'absolute',
    bottom: 30,
    right: 15,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
    bottom: 28,
  },
  passwordIcon: {
    position: 'absolute',
    left: 10,
    bottom: 28,
  },
});

export default Login;
