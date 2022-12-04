import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const getStyles = () => {
  return StyleSheet.create({
    main: {
      width: width,
      height: height,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
  });
};
export default getStyles;
