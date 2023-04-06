import React from 'react'
import Lottie from "react-lottie";
import animationData from '../.././lotties/loading_payment.json';
import { useState } from 'react';
import { useEffect } from 'react';

export default function WaitTime() {
    const [time, setTime] = useState(10)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(intervalId);
                    return 0
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, [])

    return (
        <div>
            <div style={{ paddingTop: "3rem" }}>
                <Lottie
                    height={500}
                    width={500}
                    options={defaultOptions}
                />
            </div>
            <div style={{ marginBottom: '10rem', marginTop: '-2rem' }}>
                <h2 style={{ textAlign: "center" }}>
                    Please wait {time} seconds..
                </h2>
            </div>
        </div>
    )
}
