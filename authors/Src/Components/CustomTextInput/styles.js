import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../Constants/Colors';
const {width, height} = Dimensions.get('window');

const getStyles = (error = false) => {
  return StyleSheet.create({
    container: {
      borderRadius: 10,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
    },
    labelMain: {
      width: width * 0.93,
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    label: {
      fontSize: 18,
      fontWeight: '400',
      color: 'black',
      textAlign: 'center',
    },
    txtInput: {
      borderRadius: 10,
      color: COLORS.black,
      borderColor: COLORS.black,
      width: width,
      height: 50,
      paddingLeft: 10,
      fontSize: 16,
      paddingTop: 10,
    },
  });
};

export default getStyles;
