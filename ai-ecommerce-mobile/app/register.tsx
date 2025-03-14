import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const register = () => {
    const router = useRouter();

    
    const [name, setName] = useState({ value: '', dirty: false });
    const [email, setEmail] = useState({ value: '', dirty: false });
    const [cpf, setCpf] = useState({ value: '', dirty: false });
    const [password, setPassword] = useState({ value: '', dirty: false });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', dirty: false });

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

 
    const formatCpf = (text: string) => {
        let cleaned = text.replace(/\D/g, ''); 
        let formatted = cleaned
            .replace(/^(\d{3})(\d)/, '$1.$2')
            .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
            .replace(/\.(\d{3})(\d)/, '.$1-$2');
        return formatted.length <= 14 ? formatted : text;
    };

    
    const handleSubmit = () => {
        let hasError = false;

        if (!name.value || name.value.length < 2) {
            setName({ ...name, dirty: true });
            hasError = true;
        }

        if (!email.value || !emailRegex.test(email.value)) {
            setEmail({ ...email, dirty: true });
            hasError = true;
        }

        if (!cpf.value || !cpfRegex.test(cpf.value)) {
            setCpf({ ...cpf, dirty: true });
            hasError = true;
        }

        if (!password.value) {
            setPassword({ ...password, dirty: true });
            hasError = true;
        }

        if (!confirmPassword.value || confirmPassword.value !== password.value) {
            setConfirmPassword({ ...confirmPassword, dirty: true });
            hasError = true;
        }

        if (!hasError) {
            router.replace('/(tabs)/home');
        }
    };

    return (
        <LinearGradient colors={["#D7B899", "#4B2E2A"]} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
            <View style={styles.formContainer}>
                <View style={styles.logoContainer}>
                    <AntDesign style={styles.logo} name="bank" />
                    <Text style={{ color: '#FFF', fontSize: 32, marginBottom: 20 }}>Cafeteria</Text>
                </View>

              
                <TextInput 
                    style={styles.input} 
                    placeholder='Nome Completo*' 
                    onChangeText={(text) => setName({ value: text, dirty: true })} 
                />
                {name.dirty && name.value.length < 2 && <Text style={styles.error}>Nome deve ter pelo menos 2 caracteres</Text>}

                
                <TextInput 
                    style={styles.input} 
                    placeholder='E-mail*' 
                    onChangeText={(text) => setEmail({ value: text, dirty: true })} 
                />
                {email.dirty && !emailRegex.test(email.value) && <Text style={styles.error}>E-mail inválido</Text>}

                
                <TextInput 
                    style={styles.input} 
                    placeholder='CPF*' 
                    keyboardType='numeric'
                    value={cpf.value}
                    onChangeText={(text) => setCpf({ value: formatCpf(text), dirty: true })} 
                />
                {cpf.dirty && !cpfRegex.test(cpf.value) && <Text style={styles.error}>CPF inválido (use XXX.XXX.XXX-XX)</Text>}

                
                <TextInput 
                    style={styles.input} 
                    placeholder='Senha*' 
                    secureTextEntry
                    onChangeText={(text) => setPassword({ value: text, dirty: true })} 
                />
                {password.dirty && !password.value && <Text style={styles.error}>Campo obrigatório</Text>}

                
                <TextInput 
                    style={styles.input} 
                    placeholder='Repetir Senha*' 
                    secureTextEntry
                    onChangeText={(text) => setConfirmPassword({ value: text, dirty: true })} 
                />
                {confirmPassword.dirty && confirmPassword.value !== password.value && <Text style={styles.error}>As senhas não coincidem</Text>}

                
                <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
                    <Text style={{ color: '#FFF' }}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.replace('/welcome')} style={styles.backButton}>
                    <Text style={{ color: '#FFF' }}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '80%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        color: '#FFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    logo: {
        fontSize: 100,
        marginBottom: 20,
        color: '#FFF',
    },
    loginButton: {
        width: '100%',
        height: 50,
        marginBottom: 10,
        backgroundColor: '#A67C52',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    backButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#4B2E2A',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        backgroundColor: 'white',
        height: 40,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#C08552',
        color: '#4B2E2A',
    },
    error: {
        width: '100%',
        marginBottom: 10,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14
    }
});

export default register;
