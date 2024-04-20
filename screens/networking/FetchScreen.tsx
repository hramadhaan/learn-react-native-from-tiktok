import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  navigation: any;
}

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

const ItemCard = memo(
  (item: Product) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={{uri: item.images[0]}} width={100} height={100} />
        </View>
        <View style={{flex: 1, paddingLeft: 12}}>
          <Text style={{fontWeight: '700'}}>{item?.title}</Text>
          <Text style={{marginTop: 4}}>${item.price}</Text>
          <Text numberOfLines={2} style={{marginTop: 8}}>
            {item.description}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              paddingVertical: 10,
              borderRadius: 8,
              marginTop: 12,
            }}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: '700'}}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.title === nextProps.title;
  },
);

const FetchScreen: React.FC<Props> = props => {
  const [dataProducts, setDataProducts] = useState<Product[]>([]);

  const fetchDataProducts = useCallback(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => {
        setDataProducts(json.products);
      })
      .catch(err => {
        console.log('Err Get Products: ', err);
      });
  }, []);

  useEffect(() => {
    fetchDataProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={dataProducts}
        renderItem={({item, index}) => {
          return <ItemCard {...item} />;
        }}
        ListEmptyComponent={() => {
          return (
            <View style={{alignItems: 'center'}}>
              <ActivityIndicator />
            </View>
          );
        }}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => {
          return (
            <View style={{backgroundColor: 'white', paddingVertical: 12}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                List Products
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={{height: 12}} />;
        }}
        contentContainerStyle={{
          padding: 12,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default FetchScreen;
