import moment from 'moment';
import React, { useEffect, useState } from 'react';

export default function CountdownTimer({ pollStart }) {
    const [countDown, setCountDown] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(calculateCountDown())
        }, 1000)

        return () => clearInterval(interval)
    })

    const calculateCountDown = () => {
        const now = moment();
        const start = moment(pollStart);
        const diff = start.diff(now);

        if (diff <= 0) {
            return null;
        }

        const duration = moment.duration(diff);
        return {
            days: duration.days(),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds()
        }
    }

    if (!countDown) {
        return null;
    }
    return (
        <div className='text-2xl font-bold'>
            {countDown.days > 0 && <span>{countDown.days}d</span>}
            {countDown.hours < 10 ? '0' : ''}
            {countDown.minutes}:{countDown.seconds < 10 ? '0' : ''}
            {countDown.seconds}
        </div>
    );
}
