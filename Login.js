import React from 'react';
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons, AntDesign} from '@expo/vector-icons';
import { useAuth } from './AuthContext';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'; //  react-native-safe-area-context
import { Appbar } from 'react-native-paper';
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
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
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
        placeholder="บัญชีผู้ใช้"
        placeholderTextColor={'#c0c0c0'}
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
        placeholder="รหัสผ่าน" 
        placeholderTextColor={'#c0c0c0'}
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
      <View style={styles.Register}>
        <Text style={styles.RegisterText}>คุณยังไม่มีบัญชี?</Text>
      <Text style={styles.RegisterbtnText}
      onPress={() => 
        navigation.navigate('Register')}> 
        ลงทะเบียน
      </Text>
      </View>
      <TouchableOpacity
        // style={styles.buttonLogin}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === 'android' ? 10 : 0,
    flex: 1,
    backgroundColor: '#965bb2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  actionButtonlogin: {
    right: 150,
    bottom: 50,
  },
  logoContainer: {
    alignItems: 'center',
    bottom: 40,
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
    marginBottom: 30,
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
    bottom: 30,
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
    top: 10,
  },
  inputContainer:{
    width: '100%',
    bottom: 30,
    borderRadius: 25,
    // marginBottom: 1,
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
  Register: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    bottom: 45,
    right: 70,
  },
  RegisterText: {
    justifyContent: 'center',
    flexDirection: 'row',
    color: '#ffffff',
    marginRight: 3,
    fontSize: 13,
  },
  RegisterbtnText: {
    justifyContent: 'center',
    flexDirection: 'row',
    color: '#FBC938',
    textDecorationLine: 'underline',
    fontSize: 13,
  },
});

export default Login;
