import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  Pressable,
} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Header from './Header';

interface Props {
  navigation: any;
}

const PlatformModule: React.FC<Props> = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 22,
          marginTop: 20,
        }}>
        <Pressable
          style={{paddingVertical: 4, borderWidth: 1, borderRadius: 8}}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <FeatherIcons
            name="chevron-left"
            size={32}
            style={{paddingHorizontal: 12}}
          />
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <Text style={styles.titleContainer}>Platform Module</Text>
          <View style={{height: 12}} />
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
            Platform: {Platform.OS === 'android' ? 'Android' : 'iOS'}
          </Text>
        </View>
        <View style={{height: 20}} />
        <View style={styles.boxContainer}>
          <Text style={styles.titleContainer}>File Extensions</Text>
          <View style={{height: 12}} />
          <Header navigation={props.navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  boxContainer: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  titleContainer: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PlatformModule;
