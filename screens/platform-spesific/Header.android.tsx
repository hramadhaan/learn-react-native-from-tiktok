import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

interface Props {
  navigation: any;
}
const Header: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text>Ini kode berasal dari Android</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
