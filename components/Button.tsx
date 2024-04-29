import { forwardRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useStyles } from 'react-native-unistyles';

export const Button = forwardRef<TouchableOpacity, ButtonProps>(({ onPress, title }, ref) => {
  const { theme } = useStyles();

  return (
    <TouchableOpacity style={theme.components.button} onPress={onPress}>
      <Text style={theme.components.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});
