/*
    This function was made so that whilew development our actual location do not 
    end up in the DEV_DB
*/

export default () => {
    const latitude = Math.random() * 180 - 90;
    const longitude = Math.random() * 360 - 180;

    console.log(latitude);
    console.log(longitude);
    console.log("  ")

    const coordinate = {
        latitude: latitude,
        longitude: longitude
    }

    return coordinate;
}