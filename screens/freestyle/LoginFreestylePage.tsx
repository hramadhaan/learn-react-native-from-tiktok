import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

const HeaderComponent = props => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          padding: 10,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: '#aaa',
        }}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <FeatherIcons name="chevron-left" size={28} />
      </TouchableOpacity>
    </View>
  );
};

const InputCustom = (props: {
  placeholder: string;
  type: 'email' | 'password';
}) => {
  const {placeholder, type} = props;
  return (
    <View
      style={{
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={type === 'password'}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
      />
      {type === 'password' && <FeatherIcons name="eye-off" size={20} />}
    </View>
  );
};

const LoginFreestylePage = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <HeaderComponent navigation={props.navigation} />
        <View style={{marginTop: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 38}}>
            Welcome back! Glad to see you, Again!
          </Text>
        </View>
        <View style={{marginTop: 60}}>
          <InputCustom placeholder="Enter you email" type="email" />
          <View style={{height: 18}} />
          <InputCustom placeholder="Enter you password" type="password" />
        </View>
        <View style={{marginTop: 60}}>
          <Pressable
            style={{
              paddingVertical: 22,
              backgroundColor: 'black',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Login</Text>
          </Pressable>
        </View>
        <View style={{marginTop: 40, alignItems: 'center'}}>
          <Text>Or Login With</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <Pressable
            style={{
              paddingHorizontal: 40,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: '#aaa',
              borderRadius: 10,
            }}>
            <FeatherIcons name="facebook" size={28} />
          </Pressable>
          <Pressable
            style={{
              paddingHorizontal: 40,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: '#aaa',
              borderRadius: 10,
            }}>
            <FeatherIcons name="twitch" size={28} />
          </Pressable>
          <Pressable
            style={{
              paddingHorizontal: 40,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: '#aaa',
              borderRadius: 10,
            }}>
            <FeatherIcons name="twitter" size={28} />
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 90,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Don't have an account ?</Text>
          <Pressable style={{marginLeft: 8}}>
            <Text style={{fontWeight: 'bold', color: 'blue'}}>
              Register Now
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginFreestylePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
