import { View, Text, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomePage({ navigation, route }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Page</Text>
                <Button title="About Page" onPress={() => navigation.navigate('About Page')} />
                <Button title="Contact Page" onPress={() => navigation.navigate('Contact Page')} />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}