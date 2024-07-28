import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
const Register = () => {
    const navigation = useNavigation();
    const [password, setPassword] = React.useState('');

    const [showPassword, setShowPassword] = React.useState(false);
    const [visible, setVisible] = React.useState(true);

    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [visibleConfirm, setVisibleConfirm] = React.useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <AntDesign
                name="left"
                onPress={() => {navigation.navigate('Login')}}
                size={28}
                color="white"
                style={styles.actionButtonlogin}
                />
            <Text style={styles.texthead}>ลงทะเบียน</Text>
        {/* <Text style={styles.textAboveInput}>บัญชีผู้ใช้</Text> */}
        <TextInput
        style={styles.input}
        placeholder="บัญชีผู้ใช้"
        placeholderTextColor={'#c0c0c0'}
        />
        {/* <Text style={styles.textAboveInput}>First Name</Text> */}
        <TextInput
        style={styles.input}
        placeholder="ชื่อจริง"
        placeholderTextColor={'#c0c0c0'}
        />
        {/* <Text style={styles.textAboveInput}>Last Name</Text> */}
        <TextInput
        style={styles.input}
        placeholder="นามสกุล"
        placeholderTextColor={'#c0c0c0'}
        />
        {/* <Text style={styles.textAboveInput}>Email</Text> */}
        <TextInput
        style={styles.input}
        placeholder="อีเมล"
        placeholderTextColor={'#c0c0c0'}
        />
        <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder="รหัสผ่าน"
        placeholderTextColor={'#c0c0c0'}
        // value={password}
        onChangeText={setPassword}
        secureTextEntry={visible}
        />
        <TouchableOpacity style={styles.btnEyePassword} onPress={() => {
          setVisible(!visible);
          setShowPassword(!showPassword);
        }
        }>
        <MaterialCommunityIcons
          name={showPassword === false ? 'eye' : 'eye-off'}
          size={20}
          color={'#000000'}
        />
        </TouchableOpacity>
        <TextInput
        style={styles.input}
        placeholder="ยืนยันรหัสผ่าน"
        placeholderTextColor={'#c0c0c0'}
        // value={password}
        onChangeText={setPassword}
        secureTextEntry={visibleConfirm}
        />
        <TouchableOpacity style={styles.btnEyeConfirmPassword} onPress={() => {
          setVisibleConfirm(!visibleConfirm);
          setShowConfirmPassword(!showConfirmPassword);
        }
        }>
        <MaterialCommunityIcons
          name={showConfirmPassword === false ? 'eye' : 'eye-off'}
          size={20}
          color={'#000000'}
        />
        </TouchableOpacity>
        </View>
        <TouchableOpacity
        // style={styles.buttonLogin}
        onPress={() => {navigation.navigate('Login')}}
      >
        <Text style={styles.buttonText}>ลงทะเบียน</Text>
      </TouchableOpacity>
        {/* </View> */}
        </SafeAreaView>
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
        bottom: 90,
    },
    texthead:{
        color: '#ffffff',
        bottom: 50,
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputIcon: {
        position: 'absolute',
        left: 8,
        bottom: 155,
    },
    inputContainer:{
        width: '100%',
        borderRadius: 25,
        marginBottom: 20,
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#ffffff',
        color: '#000000',
        height: 30,
        width: '100%',
        borderColor: '#ffffff',
        borderRadius: 13,
        paddingHorizontal: 15,
        marginBottom: 15,
        top: 5,
    },
    textAboveInput: {
        color: '#ffffff',
        top: 5,
        marginBottom: 10,
        right: 110,
     },
     buttonText: {
        backgroundColor: '#FBC938',
        color: '#000000',
        borderRadius: 20,
        fontSize: 16,
        width: 150,
        height: 40,
        textAlign: 'center',
        lineHeight: 40,
        top: 50,
      },
      btnEyePassword: {
        position: 'absolute',
        bottom: 60,
        right: 10,
      },
      btnEyeConfirmPassword: {
        position: 'absolute',
        bottom: 15,
        right: 10,
      },
});

export default Register;