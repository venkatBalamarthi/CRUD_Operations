import React from 'react';
import {View, TextInput, Text} from 'react-native';
import getStyles from './styles';

const CustomTextInput = ({
  label,
  containerStyle,
  labelStyle,
  inputStyle,
  value,
  onChangeText,
  placeholder,
  isRequired,
  keyboardType = 'default',
  maxLength,
  error,
  secureTextEntry = false,
  startIndorment: StartIndorment,
  endorment: Endorment,
  placeholderTextColor = '',
  multiline = false,
  mainContainer = {},
  autoFocus = false,
  onBlur = () => {},
  onSubmitEditing = () => {},
  onFocus = () => {},
  onLayout = () => {},
  isTextTag = false,
}) => {
  const styles = getStyles();
  return (
    <>
      {label && (
        <View style={styles.labelMain}>
          <Text style={[styles.label, labelStyle || {}]}>{label}</Text>
        </View>
      )}
      <View style={[styles.container, containerStyle || {}]}>
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            mainContainer,
          ]}>
          {Boolean(StartIndorment) && <StartIndorment />}
          <TextInput
            maxLength={maxLength}
            multiline={multiline}
            keyboardType={keyboardType}
            style={[styles.txtInput, inputStyle || {}]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder || ''}
            placeholderTextColor={placeholderTextColor || 'gray'}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
            autoCapitalize={'none'}
            autoFocus={autoFocus}
            returnKeyType={'done'}
            onSubmitEditing={onSubmitEditing}
            onFocus={onFocus}
            onLayout={onLayout}
          />
        </View>
        {Boolean(Endorment) && <Endorment />}
      </View>
    </>
  );
};

export default CustomTextInput;
