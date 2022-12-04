
export const getTimeBaseOnTimeZone = (timeZone: string): string => {
    const timeZoneData = new Date().toLocaleTimeString("en-US", { timeZone: timeZone });
    const timeData = timeZoneData?.split(" ")
    const format = timeData[1]
    const time = timeData[0]
    const [hours, minutes, seconds] = time?.split(':')
    const format24Hours = from12to24(hours, minutes, format)
    return `${format24Hours}`
}

export type CurrentTimeZoneType = {
    timeZone: string
}

export const getCurrentTimeZone = (): CurrentTimeZoneType => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return { timeZone: timezone };
}
function from12to24(hours: string, minutes: string, meridian: string) {
    let h = parseInt(hours, 10);
    const m = parseInt(minutes, 10);
    if (meridian.toUpperCase() === 'PM') {
        h = (h !== 12) ? h + 12 : h;
    } else {
        h = (h === 12) ? 0 : h;
    }
    return new Date((new Date()).setHours(h, m, 0, 0));
}

export const padNumber = (n: string | number) => {
    if (n < 10) {
        return '0' + n;
    }
    return n;
};

export const formatAMPM = (date: string | Date): string => {
    const dateInfo = date ? new Date(date) : new Date()
    if (!date) {
        return '';
    }
    let hours: string | number = dateInfo.getHours();
    let minutes: string | number = dateInfo.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = padNumber(hours);
    minutes = padNumber(minutes);
    let strTime: string = hours + ':' + minutes + ' ' + ampm;

    return strTime;
};