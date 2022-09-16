import {Text, View} from 'react-native';
import {Avatar, Card, IconButton, Paragraph, Title} from 'react-native-paper';

export default ({title, text}) => {
  return (
    <Card>
      <Card.Content>
        <Title numberOfLines={2}>{title}</Title>
        <Paragraph numberOfLines={5}>{text}</Paragraph>
      </Card.Content>
    </Card>
  );
};
