import React, { useEffect, useState } from 'react'
import { View, ImageBackground, StyleProp } from 'react-native'
import { useSelector } from 'react-redux'
import { getTimeBaseOnTimeZone } from '../../Helpers'
import morining from '../../Asserts/morning.jpg'
import afternoon from '../../Asserts/afternoon.jpg'
import evening from '../../Asserts/evening.jpg'

type BackGroundImageType = {
    style?: {},
    children?: any
}



const BackgroundImage = ({ style, children }: BackGroundImageType) => {
    const { currentTimeZoneTime } = useSelector((state) => state?.timeZonesReducer);
    const [source, setSource] = useState<any>()


    useEffect(() => {
        const currentTimeZoneTimeData: string = getTimeBaseOnTimeZone(currentTimeZoneTime?.timeZone)
        const currentHour: number = new Date(currentTimeZoneTimeData).getHours();
        const image: any = currentHour < 12 ? morining : currentHour > 12 && currentHour < 18 ? afternoon : evening
        setSource(image)
    }, [new Date().getHours(), currentTimeZoneTime])

    return <ImageBackground
        source={source}
        style={{
            width: "100%",
            height: "100%",
            justifyContent: "center"
        }}>
        {Boolean(children) && <View style={{
            justifyContent: "center",
            alignItems: "center"
        }}>
            {children}
        </View>}
    </ImageBackground>

}
export default BackgroundImage