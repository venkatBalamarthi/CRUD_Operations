import React, { useMemo } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import BackgroundImage from '../../Components/BackgroundImage';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentImage } from '../../AppConfig/Redux/Actions/timezones';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAMES } from '../../AppConfig/Router';
import { formatAMPM, getTimeBaseOnTimeZone } from '../../Helpers';
import getStyles from './styles';

type StylesInfo = {
    container: ViewStyle
    main: ViewStyle
    click: ViewStyle,
    label: TextStyle,
    timeZoneLabelText: TextStyle
}

const WallPaper = (): JSX.Element => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const styles: StylesInfo = getStyles()
    const { currentTimeZoneTime } = useSelector((state) => state?.timeZonesReducer);

    const getCurrentTime: string = useMemo(() => {
        const currentTimeZoneTimeData: string = getTimeBaseOnTimeZone(currentTimeZoneTime?.timeZone)
        const currentDate: Date = new Date(currentTimeZoneTimeData);
        const currentTime: string = formatAMPM(currentDate)
        return currentTime
    }, [currentTimeZoneTime])


    return <SafeAreaView style={styles.container}>
        <BackgroundImage>
            <Text style={styles.timeZoneLabelText}>{`Current Time Zone:${currentTimeZoneTime?.timeZone}`}</Text>
            <Text style={styles.timeZoneLabelText}>{`Current Time:${getCurrentTime}`}</Text>

        </BackgroundImage>
        <View style={styles.main}>
            <TouchableOpacity style={styles.click}
                onPress={() => navigation.navigate(SCREEN_NAMES.TIME_ZONES)}
            >
                <Text style={styles.label}>{"Change Time Zone"}</Text>

            </TouchableOpacity>
        </View>


    </SafeAreaView>

}
export default WallPaper

