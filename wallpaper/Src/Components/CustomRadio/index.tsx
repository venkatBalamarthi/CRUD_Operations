import React from 'react';
import { View, ViewStyle } from 'react-native';
import getStyles from './styles';

type RadoTypes = {
  isSelected: boolean
}
type StylesInfo = {
  buttonContainer: ViewStyle,
  circle: ViewStyle,
  circleSelected: ViewStyle,
  circleUnSelected: ViewStyle,
  checkedCircle: ViewStyle
}


const CustomRadiobutton = ({ isSelected }: RadoTypes) => {
  const styles: StylesInfo = getStyles();
  return (
    <View style={styles.buttonContainer}>
      <View
        style={[
          styles.circle,
          isSelected
            ? styles.circleSelected
            : styles.circleUnSelected,
        ]}>
        {Boolean(isSelected) && <View style={styles.checkedCircle} />}
      </View>
    </View>
  );
};
export default CustomRadiobutton;
