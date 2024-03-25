import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';

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
    ],
  },
];

const HomePage = props => {
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
