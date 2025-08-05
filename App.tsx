import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View, TextInput, StyleSheet, Image, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');
  const [message, setMessage] = useState('Welcome to my app');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
      
      <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.onlineImage} />


      
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
    backgroundColor: '#fff',
    padding: 20
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
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


