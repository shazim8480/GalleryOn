// components/Container.tsx
import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '../../context/ThemeContext';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  const {theme} = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkTheme ? 'black' : 'white'},
      ]}>
      <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Container;
