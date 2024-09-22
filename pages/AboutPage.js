import { 
    View, 
    Text, 
    ScrollView, 
    Button, 
    Image, 
    StyleSheet 
} from 'react-native';
import { loremIpsum } from 'react-lorem-ipsum';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function AboutPage({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>About Page</Text>
                <Image 
                source={require('../Img/catMeme.png')} 
                style={styles.image}/>
                <View>
                    <Text style={styles.text}>{loremIpsum()}</Text>
                </View>
                <View style={styles.buttonRow}>
                    <Button title="Home Page" onPress={() => navigation.navigate('Home Page')} />
                    <Button title="Contact Page" onPress={() => navigation.navigate('Contact Page')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    header: {
        fontSize: 30,
        padding: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
      },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 15,
    },
    text: {
        fontSize: 16,
        padding: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
  });