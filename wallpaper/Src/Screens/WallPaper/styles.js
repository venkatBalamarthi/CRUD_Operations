import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    main: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      position: 'absolute',
      alignSelf: 'flex-end',
      right: 20,
      bottom: 30,
    },
    click: {
      borderRadius: 20,
      backgroundColor: 'indigo',
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderColor: 'blue',
      borderWidth: 2,
    },
    label: {
      fontSize: 16,
      color: 'white',
    },
    timeZoneLabelText: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '800',
      color: 'indigo',
    },
  });
};
export default getStyles;
