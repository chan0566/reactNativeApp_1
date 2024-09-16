import { View, Text, Button, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function ContactPage({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Contact Page</Text>
                <FlatList>
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} position={item.position} />}
                    keyExtractor={item => item.id}
                </FlatList>
                <Button title="Home Page" onPress={() => navigation.navigate('Home Page')} />
                <Button title="About Page" onPress={() => navigation.navigate('About Page')} />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

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

const Item = ({ title, position }) => (
    <View>
        <Text>{title}</Text>
        <Text>{position}</Text>
    </View>
);