import {useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {getUser} from '../../services/db';
import styles from './styles';

export default ({navigation}) => {
  const [{email}, setInputValues] = useState({
    email: '',
  });

  const onChangeText = text =>
    setInputValues(prevValues => ({
      ...prevValues,
      email: text,
    }));

  const onSubmit = () => {
    getUser(email);
  };
  return (
    <View style={styles.screen}>
      <TextInput
        label={'Email'}
        value={email}
        style={styles.input}
        onChangeText={onChangeText}
      />

      <Button onPress={onSubmit}>Login</Button>

      <View
        style={{
          margin: 30,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text>Don't have an account?</Text>
        <Pressable
          style={{
            marginLeft: 5,
          }}
          onPress={() => navigation.navigate('Signup')}>
          <Text
            style={{
              color: '#020202',
            }}>
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
