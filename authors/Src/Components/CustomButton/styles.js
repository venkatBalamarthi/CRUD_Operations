import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../Constants/Colors';
const {width, height} = Dimensions.get('window');

const getStyles = () => {
  return StyleSheet.create({
    main: {
      width: width,
      minHeight: 50,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
    },
    btnContainer: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.buttonBg,
    },
    labelStyle: {
      color: COLORS.white,
      fontSize: 18,
    },
  });
};
export default getStyles;
