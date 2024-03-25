import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

const CoreComponentV1 = () => {
  return (
    <ScrollView style={{padding: 12}}>
      <Image
        src="https://reactnative.dev/img/tiny_logo.png"
        style={{width: '100%', height: 220, resizeMode: 'contain'}}
      />
      <View style={{marginTop: 20}}>
        <Text>Ini adalah komponen untuk menampilkan Teks</Text>
        <Text style={{marginTop: 4}}>
          Dan Teks ini dibungkus oleh komponen View
        </Text>
      </View>
      <TextInput
        style={{
          marginTop: 20,
          padding: 12,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: '#ddd',
        }}
        placeholder="Apa yang Anda pikirkan ?"
      />
    </ScrollView>
  );
};

export default CoreComponentV1;
