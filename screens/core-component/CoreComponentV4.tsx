import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SectionList,
  ScrollView,
} from 'react-native';

const data_flatlist = [
  {
    id: '1',
    name: 'Item 1',
  },
  {
    id: '2',
    name: 'Item 2',
  },
  {
    id: '3',
    name: 'Item 3',
  },
  {
    id: '4',
    name: 'Item 4',
  },
  {
    id: '5',
    name: 'Item 5',
  },
  {
    id: '6',
    name: 'Item 6',
  },
  {
    id: '7',
    name: 'Item 7',
  },
  {
    id: '8',
    name: 'Item 8',
  },
  {
    id: '9',
    name: 'Item 9',
  },
  {
    id: '10',
    name: 'Item 10',
  },
  {
    id: '11',
    name: 'Item 11',
  },
  {
    id: '12',
    name: 'Item 12',
  },
];

const data_sectionList = [
  {
    title: 'Section 1',
    data: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  },
  {
    title: 'Section 2',
    data: ['Item 5', 'Item 6', 'Item 7', 'Item 8'],
  },
  {
    title: 'Section 3',
    data: ['Item 9', 'Item 10', 'Item 11', 'Item 12'],
  },
  {
    title: 'Section 4',
    data: ['Item 13', 'Item 14', 'Item 15', 'Item 16'],
  },
  {
    title: 'Section 5',
    data: ['Item 17', 'Item 18', 'Item 19', 'Item 20'],
  },
  {
    title: 'Section 6',
    data: ['Item 21', 'Item 22', 'Item 23', 'Item 24'],
  },
  {
    title: 'Section 7',
    data: ['Item 25', 'Item 26', 'Item 27', 'Item 28'],
  },
  {
    title: 'Section 8',
    data: ['Item 29', 'Item 30', 'Item 31', 'Item 32'],
  },
];

const CoreComponentV4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Text style={styles.titleContainer}>FlatList Component</Text>
        <View style={{height: 8}} />
        <FlatList
          style={{
            height: 200,
          }}
          data={data_flatlist}
          renderItem={({item}) => (
            <View style={{paddingHorizontal: 12, paddingVertical: 8}}>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      {/* End of FlatList */}
      <View style={styles.boxContainer}>
        <Text style={styles.titleContainer}>SectionList Component</Text>
        <View style={{height: 8}} />

        <SectionList
          style={{height: 200}}
          sections={data_sectionList}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({section}) => (
            <View
              style={{
                backgroundColor: '#ddd',
                paddingVertical: 8,
                paddingHorizontal: 12,
              }}>
              <Text style={{fontWeight: 'bold'}}>{section.title}</Text>
            </View>
          )}
          renderItem={({item}) => (
            <View style={{paddingHorizontal: 12, paddingVertical: 8}}>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
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

export default CoreComponentV4;
