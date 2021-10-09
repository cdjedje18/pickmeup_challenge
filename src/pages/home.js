import React, { useEffect, useState } from 'react';
import { NavBar, Map } from "../components";


export const Home = () => {

    const [locations, setLocations] = useState(null)

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    useEffect(() => {
        if (navigator.geolocation) {
            console.log("GeoLocation is Available!");
        } else {
            console.log("Sorry Not available!");
        }
    }, [])

    const getCurrentLocation = () => {
        navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                if (result.state === "granted") {
                    console.log(result.state);
                    //If granted then you can directly call your function here
                    navigator.geolocation.getCurrentPosition((position) => {
                        console.log(position.coords)
                        // console.log("Latitude is :", position.coords.latitude);
                        // console.log("Longitude is :", position.coords.longitude);
                        setLocations({ center: { lat: position.coords.latitude, lng: position.coords.longitude }, zoom: 11 })
                    });
                } else if (result.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(success, errors, options);
                } else if (result.state === "denied") {
                    //If denied then you have to show instructions to enable location
                }
                result.onchange = function () {
                    console.log(result.state);
                };
            });
    }


    const success = (pos) => {
        var crd = pos.coords;

        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    const errors = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    return (
        <>
            <NavBar getCurrentLocation={getCurrentLocation} />
            <Map locations={locations} />
        </>
    )
}