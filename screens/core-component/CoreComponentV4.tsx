import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

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
];

const CoreComponentV4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Text style={styles.titleContainer}>FlatList Component</Text>
        <FlatList
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
