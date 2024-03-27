import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Switch,
  Button,
  Alert,
  Pressable,
  ActivityIndicator,
} from 'react-native';

const CoreComponentV2 = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          height: 220,
          justifyContent: 'center',
          paddingVertical: 8,
          paddingHorizontal: 10,
          alignItems: 'center',
        }}
        src="https://plus.unsplash.com/premium_photo-1669018130695-35cb72f65c05?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <Text
          style={{
            padding: 8,
            backgroundColor: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Image Background
        </Text>
      </ImageBackground>
      {/* -- End of ImageBackground -- */}
      <View style={styles.boxContainer}>
        <Text style={styles.titleContainer}>Switch Component</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 10,
            marginTop: 8,
            justifyContent: 'center',
          }}>
          {/* Start of Switch */}
          <Switch
            onValueChange={value => setIsEnabled(value)}
            value={isEnabled}
          />
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>{`${
            isEnabled ? 'On' : 'Off'
          }`}</Text>
        </View>
      </View>
      {/* End of Switch */}
      <View style={styles.boxContainer}>
        <Text style={styles.titleContainer}>Button Component</Text>
        <View style={{marginTop: 8}}>
          <Button
            onPress={() => {
              Alert.alert('Button Pressed');
            }}
            title="Press Me"
          />
        </View>
      </View>
      {/* End of Button */}
      <View style={styles.boxContainer}>
        <Text style={styles.titleContainer}>Pressable Component</Text>
        <View style={{marginTop: 8}}>
          <Pressable
            style={{
              paddingHorizontal: 12,
              paddingVertical: 8,
              backgroundColor: 'tomato',
              borderRadius: 6,
              alignItems: 'center',
            }}
            onPress={() => Alert.alert('Pressable Pressed')}>
            <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>
              Press Me
            </Text>
          </Pressable>
        </View>
      </View>
      {/* End of Pressable */}
      <View style={styles.boxContainer}>
        <Text style={styles.titleContainer}>Activity Indicator Component</Text>
        <View style={{marginTop: 8}}>
          <ActivityIndicator />
        </View>
      </View>
    </View>
  );
};

export default CoreComponentV2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
