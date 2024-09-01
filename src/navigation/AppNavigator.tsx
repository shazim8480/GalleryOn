import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {RootStackParamList} from './types/navigation.types';
import GalleryScreen from '../screens/GalleryScreen';
import ImageDetailScreen from '../screens/ImageDetailScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Gallery">
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{title: 'Gallery'} as StackNavigationOptions}
      />
      <Stack.Screen
        name="ImageDetail"
        component={ImageDetailScreen}
        options={({
          route,
        }: {
          route: {params: RootStackParamList['ImageDetail']};
        }) => ({
          title: 'Album Details',
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
