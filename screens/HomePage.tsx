import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';

interface Props {
  navigation: any;
}

const listOfContent = [
  {
    title: 'Materi: Core Component',
    data: [
      {
        name: 'Core Component V1',
        screen: 'CoreComponentV1',
      },
      {
        name: 'Core Component V2',
        screen: 'CoreComponentV2',
      },
      {
        name: 'Core Component V3',
        screen: 'CoreComponentV3',
      },
      {
        name: 'Core Component V4',
        screen: 'CoreComponentV4',
      },
    ],
  },
  {
    title: 'Writing Platform Spesific Code',
    data: [
      {
        name: 'Platform Module',
        screen: 'PlatformModule',
      },
    ],
  },
  {
    title: 'Networking',
    data: [
      {
        name: 'Fetch',
        screen: 'FetchScreen',
      },
    ],
  },
  {
    title: 'Notifications',
    data: [
      {
        name: 'Local Notification',
        screen: 'LocalNotification',
      },
    ],
  },
  {
    title: 'Freestyle dulu bos',
    data: [
      {
        name: 'Login Page (React Native)',
        screen: 'LoginFreestylePage',
      },
    ],
  },
];

const HomePage: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={listOfContent}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(item.screen);
              }}
              style={{paddingHorizontal: 12, paddingVertical: 8}}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        renderSectionHeader={({section}) => {
          return (
            <View
              style={{
                paddingHorizontal: 12,
                backgroundColor: '#f0f0f0',
                paddingVertical: 8,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {section.title}
              </Text>
            </View>
          );
        }}
        keyExtractor={item => `${item.name}-list-item`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomePage;
