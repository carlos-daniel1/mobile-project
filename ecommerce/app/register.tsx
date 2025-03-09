import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";



const RegisterScreen: React.FC = () => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirmar Senha"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Link href="/login">
        <Text style={styles.buttonText}>Registrar</Text>
        </Link>
      </TouchableOpacity>


      <Link href="/login">
      <Text style={styles.footerText}>Já tem uma conta? <Text style={styles.link}>Faça login</Text></Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#B22222',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#007bff',
  },
  link: {
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default RegisterScreen;
