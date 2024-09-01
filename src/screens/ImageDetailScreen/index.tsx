import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types/navigation.types';
import {deleteImage} from '../../redux/imageSlice';
import Container from '../../components/Container/Container';

type ImageDetailScreenRouteProp = RouteProp<RootStackParamList, 'ImageDetail'>;

interface Props {
  route: ImageDetailScreenRouteProp;
}

const ImageDetailScreen: React.FC<Props> = ({route}) => {
  const {image} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDelete = () => {
    dispatch(deleteImage(image.id));
    navigation.goBack();
  };

  return (
    <Container>
      <Card>
        <Card.Cover style={styles.imgCover} source={{uri: image.url}} />
      </Card>
      <Card.Title title={image.title} />
      <Card.Actions>
        <Button onPress={() => navigation.goBack()}>Back</Button>
        <Button mode="contained" onPress={handleDelete} buttonColor="red">
          Delete
        </Button>
      </Card.Actions>
    </Container>
  );
};

const styles = StyleSheet.create({
  imgCover: {
    borderRadius: 4,
  },
});

export default ImageDetailScreen;
