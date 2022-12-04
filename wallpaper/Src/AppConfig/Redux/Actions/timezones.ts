import { TIMEZONES_ACTIONS } from "../Types"

type TimeZoneAction = {
    timeZone: string
}
type CurrentImage = {
    timeZone: string
}

type TimeZoneresult = {
    type: string,
    payload: TimeZoneAction
}
type CurrentImageResult = {
    type: string,
    payload: any
}


export const setCurrentTimeZone = (data: TimeZoneAction): TimeZoneresult => {
    return {
        type: TIMEZONES_ACTIONS["CURRENT TIME ZONE"],
        payload: data
    }

}
export const setCurrentImage = (data: CurrentImage): CurrentImageResult => {
    return {
        type: TIMEZONES_ACTIONS["CURRENT IMAGE"],
        payload: data
    }

}