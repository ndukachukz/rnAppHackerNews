import {Pressable, View, Text} from 'react-native';
import style from './styles';

export default ({navigation}) => {
  return (
    <View style={style.screen}>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={style.linkItems}>Register</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={style.linkItems}>Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('About')}>
        <Text style={style.linkItems}>About</Text>
      </Pressable>
    </View>
  );
};
