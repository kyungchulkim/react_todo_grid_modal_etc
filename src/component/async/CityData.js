import React from 'react'
import css from './CityData.module.scss'
export default function CityData({
    data = {
        city: "Seoul",
        current: { date: "2020-07-26T05:18:18+00:00", weather: "Clouds", temp: 29 },
        forecast: [{ date: "2020-07-26T03:00:00+00:00", high: 30, low: 25, weather: "Clouds" }]
        , image_url: "https://live.staticflickr.com/65535/50107665088_1f371ee8c2_h.jpg"

    }
}) {
    return (
        <div className={css.wrap}>
            <p className={css.item}>City : <span>{data.city}</span></p>
            <p className={css.item}>Weather: <span>{data.current.weather}</span></p>
            <p className={css.item}>Date : <span>{data.current.date}</span></p>
            <img src={data.image_url} />
        </div>
    )
}
