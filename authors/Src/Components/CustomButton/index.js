import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import getStyles from './styles';

const CustomButton = ({
  mainContainer = {},
  btnContainer = {},
  label = 'Add Author',
  labelStyle = {},
  onPress = () => {},
}) => {
  const styles = getStyles();

  return (
    <View style={[styles.main, mainContainer]}>
      <TouchableOpacity
        style={[styles.btnContainer, btnContainer]}
        onPress={onPress}>
        <Text style={[styles.labelStyle, labelStyle]}>{label || ''}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomButton;
