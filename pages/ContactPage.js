import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Button,
  StatusBar,
  Pressable
} from 'react-native';

export default function ContactPage({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Contact Page</Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item position={item.position} title={item.title} />}
          keyExtractor={item => item.id}
        />
        <Pressable
        onPress={() => {
          console.log('Pressed!');
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            padding : 15,
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 15,
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.textPress}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
      <View style={styles.buttonRow}>
          <Button title="Home Page" onPress={() => navigation.navigate('Home Page')} />
          <Button title="About Page" onPress={() => navigation.navigate('About Page')} />
      </View>
      </SafeAreaView>
    );
  };

const DATA = [
  {
    id: '1',
    position: 'Founder',
    title: 'Deadpool'
  },
  {
    id: '2',
    position: 'CEO',
    title: 'Wolverine',
  },
  {
    id: '3',
    position: 'Security',
    title: 'Time Variance Agency',
  },
];

type ItemProps = {
    title: string;
    position: String;
};

const Item = ({title, position}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.position}>{position}</Text>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
},
position: {
  textTransform: 'uppercase',
  },
  item: {
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    fontSize: 30,
    padding: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 24,
  },
  textPress: {
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
},
});