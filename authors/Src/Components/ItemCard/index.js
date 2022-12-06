import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../Constants/Colors';
import getStyles from './styles';

const ItemCard = ({
  item,
  label = '',
  onPress = () => {},
  conatinerStyle = {},
  labelStyle = {},
  disabled = false,
}) => {
  const styles = getStyles();
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.main, conatinerStyle]}
      onPress={() => onPress(item)}>
      <Text style={[styles.labelStyle, labelStyle]}>{label || ''}</Text>
    </TouchableOpacity>
  );
};
export default memo(ItemCard);
