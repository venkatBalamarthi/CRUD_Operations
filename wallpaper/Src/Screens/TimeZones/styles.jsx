import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const getStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      width: width * 0.9,
      height: height * 0.1,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
      paddingHorizontal: 10,
      elevation: 2,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'gray',
      flexDirection: 'row',
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 0.5},
      shadowOpacity: 0.3,
    },
    timeZomeLabel: {
      fontSize: 20,
      paddingHorizontal: 20,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    timeZoneLabelText: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: '800',
      color: 'indigo',
    },
    inputContainer: {
      width: width * 0.8,
      height: 50,
      borderWidth: 1,
      paddingLeft: 15,
      borderRadius: 30,
    },
    flatListView: {
      height: height * 0.6,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
export default getStyles;
