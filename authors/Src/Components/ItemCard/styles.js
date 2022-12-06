import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const getStyles = () => {
  return StyleSheet.create({
    main: {
      width: width * 0.9,
      minHeight: height * 0.1,
      justifyContent: 'center',
      backgroundColor: 'white',
      alignSelf: 'center',
      marginVertical: 5,
      borderRadius: 10,
      elevation: 10,
      shadowOffset: {width: 1, height: 1},
      shadowColor: 'black',
      shadowOpacity: 0.3,
      paddingHorizontal: 20,
    },
    labelStyle: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '700',
    },
  });
};
export default getStyles;
