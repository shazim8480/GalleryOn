import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Card, Snackbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types/navigation.types';
import {deleteImage} from '../../redux/imageSlice';
import Container from '../../components/Container/Container';
import OnButton from '../../components/OnButton/OnButton';
import {globalStyles} from '../../styles/global.styles';

type ImageDetailScreenRouteProp = RouteProp<RootStackParamList, 'ImageDetail'>;

interface Props {
  route: ImageDetailScreenRouteProp;
}

const ImageDetailScreen: React.FC<Props> = ({route}) => {
  const {image, showSnackbar} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDelete = () => {
    dispatch(deleteImage(image.id));
    if (showSnackbar) {
      showSnackbar();
    }
    navigation.goBack();
  };

  return (
    <Container>
      <Card>
        <Card.Cover style={globalStyles.imgCover} source={{uri: image.url}} />
      </Card>
      <Card.Title title={image.title} />
      <Card.Actions>
        <OnButton
          title="Back"
          mode="outlined"
          textColor="blue"
          buttonColor="white"
          onPress={() => navigation.goBack()}
        />
        <OnButton
          title="Delete"
          mode="contained"
          textColor="white"
          buttonColor="red"
          onPress={handleDelete}
        />
      </Card.Actions>
    </Container>
  );
};

export default ImageDetailScreen;
