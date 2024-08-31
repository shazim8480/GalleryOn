import React, {useState, useRef} from 'react';
import {
  FlatList,
  TouchableOpacity,
  Animated,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Card} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import {RootStackParamList} from '../../navigation/types/navigation.types';
import useFetchImages from '../../hooks/useFetchImages';

type GalleryScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Gallery'
>;

interface Image {
  id: number;
  url: string;
  title: string;
  thumbnailUrl: string;
}

const GalleryScreen: React.FC = () => {
  const navigation = useNavigation<GalleryScreenNavigationProp>();
  const {data, status, error} = useFetchImages();
  console.log('🚀 ~ data:', data);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleImageLoad = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const renderImage = ({item}: {item: Image}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ImageDetail', {image: item})}>
      <Animated.View style={{opacity: fadeAnim}}>
        <Card>
          <FastImage
            style={styles.image}
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

  const filteredData = data.filter(
    (item: Image) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    // ||
    //   item.albumId.toString().includes(searchQuery),
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        placeholder="Search by title or album..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={filteredData}
        renderItem={renderImage}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    margin: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default GalleryScreen;
