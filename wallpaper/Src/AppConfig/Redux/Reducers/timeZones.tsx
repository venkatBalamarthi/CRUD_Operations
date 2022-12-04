import { CurrentTimeZoneType, getCurrentTimeZone } from "../../../Helpers"
import { TIMEZONES_ACTIONS } from "../Types"

export type InitialStateType = {
    currentTimeZoneTime: CurrentTimeZoneType,
    currentImage: any

}

const initialState: InitialStateType = {
    currentTimeZoneTime: getCurrentTimeZone() || new Date(),
    currentImage: ""
}

const timeZonesReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action?.type) {
        case TIMEZONES_ACTIONS["CURRENT TIME ZONE"]: {
            return {
                ...state,
                currentTimeZoneTime: action?.payload
            }
        }
        case TIMEZONES_ACTIONS["CURRENT IMAGE"]: {
            return {
                ...state,
                currentImage: action?.payload
            }
        }
        default: return state
    }

}
export default timeZonesReducer