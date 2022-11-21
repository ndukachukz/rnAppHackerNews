import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {createTable, saveUser} from '../../services';
import styles from './styles';

export default ({navigation}) => {
  const [{email, name}, setInputValues] = useState({
    email: '',
    name: '',
  });

  const onChangeText = (text, inputName) =>
    setInputValues(prevValues => ({
      ...prevValues,
      [inputName]: text,
    }));

  const onSubmit = () => {
    saveUser(navigation, {email, name});
  };
  return (
    <View style={styles.screen}>
      <TextInput
        label={'Full Name'}
        value={name}
        style={styles.input}
        onChangeText={text => onChangeText(text, 'name')}
      />
      <TextInput
        label={'Email'}
        value={email}
        style={styles.input}
        onChangeText={text => onChangeText(text, 'email')}
      />

      <Button onPress={onSubmit}>Register</Button>

      <View
        style={{
          margin: 30,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text> Already have an account?</Text>
        <Pressable
          style={{
            marginLeft: 5,
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: '#020202',
            }}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
