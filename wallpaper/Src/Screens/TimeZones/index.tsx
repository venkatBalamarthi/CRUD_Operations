import React, { useMemo, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Dimensions, TextInput, ViewStyle, TextStyle } from 'react-native';
import { TIME_ZONES } from '../../constants';
import getStyles from './styles';
import { setCurrentImage, setCurrentTimeZone } from '../../AppConfig/Redux/Actions/timezones';
import { formatAMPM, getTimeBaseOnTimeZone } from '../../Helpers';
import CustomRadiobutton from '../../Components/CustomRadio/index.tsx';
import BackgroundImage from '../../Components/BackgroundImage';


type RenderItem = {
    item: string,
    index: number
}
type StylesInfo = {
    container: ViewStyle
    main: ViewStyle
    click: ViewStyle,
    label: TextStyle,
    mainContainer: ViewStyle,
    timeZomeLabel: TextStyle,
    timeZoneLabelText: TextStyle,
    flatListView: ViewStyle,
    inputContainer: ViewStyle
}


const TimeZones = (): JSX.Element => {
    const styles: StylesInfo = getStyles()
    const { currentTimeZoneTime } = useSelector((state) => state?.timeZonesReducer)
    const [serachTimeZone, setSearchZone] = useState("")
    const dispatch = useDispatch()


    const getCurrentTime: string = useMemo(() => {
        const currentTimeZoneTimeData: string = getTimeBaseOnTimeZone(currentTimeZoneTime?.timeZone)
        const currentDate: Date = new Date(currentTimeZoneTimeData);
        const currentTime: string = formatAMPM(currentDate)
        return currentTime
    }, [currentTimeZoneTime])

    const handleTimeZoneCard = (item: string) => {
        dispatch(setCurrentTimeZone({
            timeZone: item
        }))
        setSearchZone("")

    }



    const renderItem = ({ item, index }: RenderItem) => {
        const isSelected: boolean = currentTimeZoneTime?.timeZone === item
        return <TouchableOpacity style={styles.mainContainer} onPress={() => handleTimeZoneCard(item)}>
            <Text adjustsFontSizeToFit style={styles.timeZomeLabel}>{item}</Text>
            <CustomRadiobutton isSelected={isSelected} />

        </TouchableOpacity>
    }

    const getTimeZonesData = useMemo(() => {
        const timesZonesList = TIME_ZONES.filter((item, index) => {
            return item?.toLocaleLowerCase()?.includes(serachTimeZone?.toLocaleLowerCase()?.trim())
        })
        return timesZonesList?.sort()

    }, [serachTimeZone])
    return <SafeAreaView style={styles.container}>
        <BackgroundImage>
            <>
                <Text style={styles.timeZoneLabelText}>{`Current Time Zone:${currentTimeZoneTime?.timeZone}`}</Text>
                <Text style={styles.timeZoneLabelText}>{`Current Time:${getCurrentTime}`}</Text>

                <TextInput value={serachTimeZone} onChangeText={(text) => setSearchZone(text)} style={styles.inputContainer}
                    placeholder={"Search TimeZones"}
                    placeholderTextColor={"indigo"}
                />
                <View style={styles.flatListView}>
                    <FlatList
                        data={getTimeZonesData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => item}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </>


        </BackgroundImage>

    </SafeAreaView>

}
export default TimeZones

