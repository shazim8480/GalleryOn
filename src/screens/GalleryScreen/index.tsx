import React, {useState, useRef} from 'react';
import {FlatList, TouchableOpacity, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Card, Snackbar} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import {RootStackParamList} from '../../navigation/types/navigation.types';
import useFetchImages from '../../hooks/useFetchImages';
import OnSearchBar from '../../components/OnSearchBar/OnSearchBar';
import useDeviceType from '../../hooks/useDeviceType';
import Container from '../../components/Container/Container';
import {globalStyles} from '../../styles/global.styles';

type GalleryScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Gallery'
>;

interface Image {
  id: number;
  albumId: number;
  url: string;
  title: string;
  thumbnailUrl: string;
}

const GalleryScreen: React.FC = () => {
  const {deviceType, screenWidth} = useDeviceType();
  const navigation = useNavigation<GalleryScreenNavigationProp>();
  const {data} = useFetchImages();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const numColumns = deviceType === 'tablet' ? 3 : 2;

  const imageWidth = screenWidth / numColumns - 22;

  const handleImageLoad = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const showSnackbar = () => setSnackbarVisible(true);
  const onDismissSnackbar = () => setSnackbarVisible(false);

  const renderImage = ({item}: {item: Image}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ImageDetail', {
          image: item,
          showSnackbar,
        })
      }>
      <Animated.View
        style={{opacity: fadeAnim, marginRight: 10, marginBottom: 10}}>
        <Card mode="contained">
          <FastImage
            style={{width: imageWidth, height: 160, borderRadius: 8}}
            source={{
              uri: item.thumbnailUrl,
              priority: FastImage.priority.normal,
            }}
            onLoad={handleImageLoad}
            resizeMode={FastImage.resizeMode.cover}
          />
        </Card>
      </Animated.View>
    </TouchableOpacity>
  );

  const filteredData = data?.filter(
    (item: Image) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.albumId.toString().includes(searchQuery),
  );

  return (
    <Container>
      <OnSearchBar
        placeholder={'Search by title or album...'}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <FlatList
        key={numColumns}
        data={filteredData}
        renderItem={renderImage}
        keyExtractor={item => item.id.toString()}
        numColumns={numColumns}
      />

      <Snackbar
        style={globalStyles.snackbar}
        visible={snackbarVisible}
        onDismiss={onDismissSnackbar}
        duration={3000}>
        Image deleted successfully!
      </Snackbar>
    </Container>
  );
};

export default GalleryScreen;
