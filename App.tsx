import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, TextInput, StyleSheet, Image, Button } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');
  const [message, setMessage] = useState('Welcome to my app');

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView >
        <Text style={styles.header}>My Info Card</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
      
          />
      <TextInput style={styles.input}
        placeholder="Enter your hobby"
        value={hobby}
        onChangeText={setHobby}
      />

      <Button title="Show Greeting" onPress={() => setMessage(`Hello ${name}, enjoy ${hobby}`)} />
      <Text style={{ textAlign: 'center', marginTop: 10 }}>{message}</Text>

      <View style={styles.card}>
      <Text style={styles.cardText}>Hello, {name}</Text>
      <Text style={styles.cardText}>Your hobby is {hobby}</Text>
      </View>
      
      <View style={styles.card}>
      < Text style={styles.cardText}>Hello, {name}</Text>
      <Text style={styles.cardText}>Your hobby is {hobby}</Text>
      </View>
      
      <Image source={{ uri: 'data:image/webp;base64,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' }} style={styles.onlineImage} />


      
      <Text style={styles.extra}>More Info</Text>
      <Text style={styles.extra}>More Info</Text>
      < Text style={styles.extra}>More Info</Text>
      <Text style={styles.extra}>More Info</Text>
      <Text style={styles.extra}>More Info</Text>



      </ScrollView>
    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light blue ',
    padding: 20
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: "Aptos"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    fontFamily:"Aptos"
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#8bd39aff',
    borderRadius: 10
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 75,
    marginBottom: 20
  },
  onlineImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  extra: {
    fontSize: 16,
    marginVertical: 5
  }
});


