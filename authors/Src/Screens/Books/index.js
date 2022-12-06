import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
  Image,
  StatusBar,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addBookDetails} from '../../AppConfig/Redux/Actions/authorsActions';
import CustomButton from '../../Components/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput';
import ItemCard from '../../Components/ItemCard';
import {COLORS} from '../../Constants/Colors';
import getStyles from './styles';
import leftArrow from '../../Assets/Images/leftArrow.png';
import {useNavigation} from '@react-navigation/native';

const Books = () => {
  const [bookPrice, setBookPrice] = useState('');
  const [bookName, setBookName] = useState('');
  const {selectedAuthor, authors} = useSelector(state => state?.authorsReducer);
  const styles = getStyles();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getAuthorBooksDetails = useMemo(() => {
    const author = authors?.find(
      (item, index) => item?.authorId === selectedAuthor?.authorId,
    );
    return author?.details?.booksDetails || [];
  }, [selectedAuthor, authors]);

  const handleBookDetails = () => {
    if (!bookName) {
      Alert.alert('Please Enter Book Name');
      return;
    }
    if (!bookPrice) {
      Alert.alert('Please Enter Book Details');
      return;
    }
    dispatch(
      addBookDetails({
        authorId: selectedAuthor?.authorId,
        booksDetails: {bookName, bookPrice},
      }),
    );
    Keyboard.dismiss();
    setBookName('');
    setBookPrice('');
  };

  const handleBackArrow = () => navigation.goBack();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.appBg2} />
      <View style={styles.headerInfo}>
        <TouchableOpacity style={styles.backArrow} onPress={handleBackArrow}>
          <Image source={leftArrow} style={styles.backArrowImg} />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          style={
            styles.welcomeUser
          }>{`Welcome ${selectedAuthor?.details?.name}`}</Text>
      </View>
      <View style={styles.main}>
        <CustomTextInput
          value={bookName}
          onChangeText={text => setBookName(text)}
          label={'Enter Book Name'}
          containerStyle={styles.inputConatiner}
          inputStyle={styles.inputConatiner}
          placeholder={'Enter Book Name'}
        />
        <CustomTextInput
          value={bookPrice}
          onChangeText={text => setBookPrice(text)}
          label={'Enter Book Price'}
          containerStyle={styles.inputConatiner}
          inputStyle={styles.inputConatiner}
          placeholder={'Enter Book Price'}
          keyboardType={'number-pad'}
        />
        <CustomButton label="Add Book Details" onPress={handleBookDetails} />
      </View>
      <View
        style={{
          height: '50%',
        }}>
        {Boolean(getAuthorBooksDetails?.length) ? (
          <FlatList
            data={getAuthorBooksDetails}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({item, index}) => (
              <ItemCard
                disabled={true}
                item={item}
                label={`Book Name:${item?.bookName}\nBook Price:${item.bookPrice}`}
                labelStyle={{
                  lineHeight: 28,
                }}
              />
            )}
          />
        ) : (
          <Text
            style={
              styles.noBooksLabel
            }>{`You haven't added any book details yet.`}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
export default Books;
