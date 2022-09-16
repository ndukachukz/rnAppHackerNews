import {Image, View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';

export default () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.name}>Daniel Nduka</Text>
      <Text style={styles.bio}>
        FullStack web/mobile application developer, who pays full attention to
        details and has more than 4 years of software development experience. I
        am proficient in JavaScript/Typescript, NodeJS, React and React Native,
        and I have a passion for problem-solving and developing software with a
        good user interface and awesome user experience.
      </Text>
    </View>
  );
};
