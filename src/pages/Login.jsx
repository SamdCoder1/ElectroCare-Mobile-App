import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import FieldInput from '../components/FieldInput';
import Btn from '../components/Btn';
import auth from '@react-native-firebase/auth';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleLogin = async () => {
    try {
      const isUserCreated = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(isUserCreated);
    } catch (err) {
      console.log(err);

      setMessage(err.message);
    }
  };

  console.log(email);
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <Image
          style={styles.imgContainer}
          source={require('../assets/Electro-Service-Logo-N.webp')}
        />
        <View style={styles.logoText}>
          <Text style={{fontWeight: 'bold', fontSize: 17, color: '#d65231'}}>
            Electro{' '}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 17, color: '#f5ce0c'}}>
            Care
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.headerText}>Welcome Back!</Text>
      </View>

      {/* Email */}
      <View style={styles.InputContainer}>
        <View style={{marginBottom: 10}}>
          <Text style={styles.h2Text}>Email</Text>
          <View style={styles.sectionStyle}>
            <Image
              style={{height: 20, width: 20, marginLeft: 10}}
              source={require(`../assets/mail-inbox.png`)}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>
        </View>
      </View>

      {/* Password */}
      <View style={styles.InputContainer}>
        <View style={{marginBottom: 10}}>
          <Text style={styles.h2Text}>Password</Text>
          <View style={styles.sectionStyle}>
            <Image
              style={{height: 20, width: 20, marginLeft: 10}}
              source={require(`../assets/reset-password.png`)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Your Password"
              value={password}
              onChangeText={value => setPassword(value)}
              secureTextEntry={true}
            />
          </View>
        </View>
      </View>


      <View style={styles.btnContainer}>
        {/* Login Btn */}
        <Btn
          bgColor="#f5ce0c"
          textColor="#030303"
          btnLabel="Log In"
          press={() => {
            handleLogin();
            props.navigation.navigate('Home');
          }}
        />
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Text style={styles.footerText}>New User ? </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Signup');
            }}>
            <Text style={styles.footerText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

{
  /* CSS */
}
const styles = StyleSheet.create({
  input: {
    paddingLeft: 20,
    backgroundColor: '#fff',
    color: '#424242',
  },
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0d50c',
    borderRadius: 50,
    height: 50,
    margin: 10,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    marginTop: 70,
    justifyContent: 'center',
  },
  InputContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 20,
    color: '#0d0d0c',
  },
  h2Text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0d0d0c',
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 70,
    alignItems: 'center',
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  imgContainer: {
    width: 100,
    height: 100,
  },
  logoText: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default Login;
