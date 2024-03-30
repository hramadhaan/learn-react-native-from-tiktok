import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
  Modal,
  SafeAreaView,
} from 'react-native';

interface Props {
  navigation: any;
}

const CoreComponentV3: React.FC<Props> = props => {
  const [isLight, setIsLight] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    if (isLight) {
      props.navigation.setOptions({
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: '#000',
      });
    } else {
      props.navigation.setOptions({
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
      });
    }
  }, [isLight]);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isLight ? 'white' : 'black'},
      ]}>
      <View style={styles.boxContainer}>
        <Text
          style={[
            styles.titleContainer,
            {
              color: isLight ? 'black' : 'white',
            },
          ]}>
          StatusBar Component
        </Text>
        <StatusBar barStyle={isLight ? 'dark-content' : 'light-content'} />

        <Pressable
          style={{
            paddingHorizontal: 12,
            paddingVertical: 8,
            backgroundColor: 'tomato',
            alignItems: 'center',
            marginTop: 12,
            borderRadius: 6,
          }}
          onPress={() => {
            setIsLight(!isLight);
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
            }}>{`${isLight ? 'Set to Dark' : 'Set to Light'}`}</Text>
        </Pressable>
      </View>
      {/* End of StatusBar */}
      <View style={[styles.boxContainer, {marginTop: 20}]}>
        <Text
          style={[
            styles.titleContainer,
            {
              color: isLight ? 'black' : 'white',
            },
          ]}>
          Modal Component
        </Text>
        <Pressable
          style={{
            paddingHorizontal: 12,
            paddingVertical: 8,
            backgroundColor: 'tomato',
            alignItems: 'center',
            marginTop: 12,
            borderRadius: 6,
          }}
          onPress={() => {
            setIsOpenModal(true);
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
            }}>
            Show Modal
          </Text>
        </Pressable>
      </View>
      <Modal visible={isOpenModal} animationType="slide">
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'tomato'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}>
              <Text>Modal Component</Text>
              <Pressable
                style={{
                  padding: 12,
                  backgroundColor: 'tomato',
                  borderRadius: 6,
                }}
                onPress={() => setIsOpenModal(false)}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>X</Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
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

export default CoreComponentV3;
