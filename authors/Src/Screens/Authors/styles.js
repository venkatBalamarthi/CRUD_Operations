import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../Constants/Colors';
const {width, height} = Dimensions.get('window');

const getStyles = () => {
  return StyleSheet.create({
    main: {
      paddingVertical: 30,
      alignItems: 'center',
    },
    inputStyle: {
      width: width * 0.86,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerStyle: {
      width: width * 0.86,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerInfo: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      backgroundColor: COLORS.appBg2,
      minHeight: height * 0.1,
      elevation: 5,
      shadowColor: COLORS.black,
      shadowOpacity: 0.3,
      shadowRadius: 10,
      shadowOffset: {width: 1, height: 1},
    },
    welcomeText: {
      fontSize: 25,
      lineHeight: 36,
      color: COLORS.buttonBg,
      width: width * 0.8,
      paddingLeft: 10,
    },
  });
};
export default getStyles;
