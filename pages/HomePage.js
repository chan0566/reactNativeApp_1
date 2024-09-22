import { 
    View, 
    Text, 
    Button, 
    StyleSheet 
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomePage({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.header}>Home Page</Text>
                <Button title="About Page" onPress={() => navigation.navigate('About Page')} />
                <Button title="Contact Page" onPress={() => navigation.navigate('Contact Page')} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 30,
        padding: 10,
        textAlign: 'center',
    },
  });