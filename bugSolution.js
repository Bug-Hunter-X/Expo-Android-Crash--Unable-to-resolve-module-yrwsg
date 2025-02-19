import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { Asset } from 'expo-asset';

const data = [
  {
    id: 1,
    name: 'Item 1',
    image: require('./images/image1.jpg')
  },
  {
    id: 2,
    name: 'Item 2',
    image: require('./images/image2.jpg')
  }
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {data.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={{ uri: Asset.fromModule(item.image).uri }} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
  },
});