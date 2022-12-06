import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../Constants/Colors';
const {width, height} = Dimensions.get('window');

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.appBg1,
    },
    main: {
      alignItems: 'center',
      paddingVertical: 20,
    },
    inputConatiner: {
      width: width * 0.9,
    },
    noBooksLabel: {
      fontSize: 25,
      lineHeight: 34,
      paddingHorizontal: 20,
      textAlign: 'center',
    },
    contentContainerStyle: {
      paddingBottom: 30,
    },
    welcomeUser: {
      fontSize: 20,
      lineHeight: 32,
      color: COLORS.buttonBg,
      width: width * 0.8,
      paddingLeft: 10,
    },
    headerInfo: {
      justifyContent: 'space-between',
      flexDirection: 'row',
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
    backArrow: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 10,
      height: height * 0.1,
      minWidth: 50,
    },
    backArrowImg: {
      width: 30,
      height: 30,
      tintColor: COLORS.buttonBg,
    },
  });
};
export default getStyles;
