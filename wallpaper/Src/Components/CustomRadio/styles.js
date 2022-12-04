import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const getStyles = () => {
  return StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 15,
      marginHorizontal: 5,
    },
    circle: {
      height: 20,
      width: 20,
      borderRadius: 12,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    circleSelected: {
      borderColor: 'black',
    },
    circleUnSelected: {
      borderColor: 'black',
    },
    circleDisabled: {
      borderColor: 'blue',
    },
    checkedCircle: {
      width: 10,
      height: 10,
      borderRadius: 6,
      borderWidth: 1,
      backgroundColor: 'black',
      borderColor: 'black',
    },
    checkedCircleDisabled: {
      width: 12,
      height: 12,
      borderRadius: 6,
      borderWidth: 1,
      backgroundColor: 'red',
      borderColor: 'green',
    },
    label: {
      fontSize: 18,
      lineHeight: 24,
    },
    labelDisabled: {
      marginLeft: 12,
      fontSize: 14,
      lineHeight: 24,
    },
  });
};
export default getStyles;
