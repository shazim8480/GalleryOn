import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

interface OnButtonProps {
  title: string;
  onPress: () => void;
  mode?: 'text' | 'outlined' | 'contained';
  buttonColor?: string;
  textColor?: string;
  style?: object;
  disabled?: boolean;
}

const OnButton: React.FC<OnButtonProps> = ({
  title,
  onPress,
  mode = 'outlined',
  buttonColor = 'blue',
  textColor = 'white',
  style,
  disabled = false,
}) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      buttonColor={mode === 'outlined' ? 'white' : buttonColor}
      textColor={textColor}
      disabled={disabled}
      style={[
        mode === 'outlined' ? styles.outlinedButton : styles.button,
        style,
      ]}>
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
  },
  outlinedButton: {
    borderRadius: 5,
    borderColor: 'blue',
  },
});

export default OnButton;
