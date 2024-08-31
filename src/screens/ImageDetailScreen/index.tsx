import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Card} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types/navigation.types';
// import {deleteImage} from '../../redux/imageSlice';

type ImageDetailScreenRouteProp = RouteProp<RootStackParamList, 'ImageDetail'>;

interface Props {
  route: ImageDetailScreenRouteProp;
}

const ImageDetailScreen: React.FC<Props> = ({route}) => {
  const {image} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDelete = () => {
    // dispatch(deleteImage(image.id));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{uri: image.url}} />
      </Card>
      <Text>{image.title}</Text>
      <Button onPress={() => navigation.goBack()}>Back</Button>
      <Button mode="contained" onPress={handleDelete} color="red">
        Delete
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ImageDetailScreen;
