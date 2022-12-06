import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Alert,
  StatusBar,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addAuthorData,
  setSelectedAuthor,
} from '../../AppConfig/Redux/Actions/authorsActions';
import {SCREEN_NAMES} from '../../AppConfig/Router/ScreenNames';
import CustomButton from '../../Components/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput';
import ItemCard from '../../Components/ItemCard';
import {COLORS} from '../../Constants/Colors';
import getStyles from './styles';

const Authors = () => {
  const [author, setAuthor] = useState('');
  const styles = getStyles();
  const {authors} = useSelector(state => state?.authorsReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddAuthor = () => {
    if (!author) {
      Alert.alert('Please Enter Author Name');
      return;
    }
    dispatch(
      addAuthorData({
        details: {
          name: author,
          booksDetails: [],
        },
      }),
    );
    Keyboard.dismiss();
    setAuthor('');
  };

  const handleItemCard = (item = {}) => {
    dispatch(setSelectedAuthor(item));
    navigation.navigate(SCREEN_NAMES.BOOKS);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar backgroundColor={COLORS.appBg2} />
      <View style={styles.headerInfo}>
        <Text style={styles.welcomeText}>{`Welcome to the Authors `}</Text>
      </View>
      <View style={styles.main}>
        <CustomTextInput
          value={author}
          onChangeText={text => setAuthor(text)}
          label={'Enter Author Name'}
          containerStyle={styles.containerStyle}
          inputStyle={styles.inputStyle}
          placeholder={'Enter Author'}
        />
        <CustomButton onPress={() => handleAddAuthor()} />
      </View>
      <View
        style={{
          height: '60%',
        }}>
        <FlatList
          data={authors || []}
          renderItem={({item, index}) => (
            <ItemCard
              item={item}
              label={item?.details?.name}
              onPress={handleItemCard}
            />
          )}
          contentContainerStyle={{
            paddingBottom: 30,
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Authors;
