import { View, Text, ScrollView, Button, Image } from 'react-native';
import { LoremIpsum } from 'react-lorem-ipsum';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function AboutPage({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView>
                    <Text>About Page</Text>
                    <Image source={require('../Img/catMeme.png')}/>
                </ScrollView>
                <Button title="Home Page" onPress={() => navigation.navigate('Home Page')} />
                <Button title="Contact Page" onPress={() => navigation.navigate('Contact Page')} />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}