import React, { useEffect, useState } from 'react'
import { View, ImageBackground, ViewStyle } from 'react-native'
import { useSelector } from 'react-redux'
import { getTimeBaseOnTimeZone } from '../../Helpers'
import morining from '../../Asserts/morning.jpg'
import afternoon from '../../Asserts/afternoon.jpg'
import evening from '../../Asserts/evening.jpg'
import getStyles from './styles'

type BackGroundImageType = {
    style?: {},
    children?: JSX.Element
}
type StyleInfo = {
    main: ViewStyle
}



const BackgroundImage = ({ style, children }: BackGroundImageType) => {
    const { currentTimeZoneTime } = useSelector((state) => state?.timeZonesReducer);
    const [source, setSource] = useState<any>()
    const styles: StyleInfo = getStyles()


    useEffect(() => {
        const currentTimeZoneTimeData: string = getTimeBaseOnTimeZone(currentTimeZoneTime?.timeZone)
        const currentHour: number = new Date(currentTimeZoneTimeData).getHours();
        const image: any = currentHour < 12 ? morining : currentHour > 12 && currentHour < 18 ? afternoon : evening
        setSource(image)
    }, [new Date().getHours(), currentTimeZoneTime])

    return <ImageBackground
        source={source}
        style={styles.main}>
        {Boolean(children) && children}
    </ImageBackground>

}
export default BackgroundImage