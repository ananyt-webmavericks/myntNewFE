import React from 'react'
import Lottie from "react-lottie";
import animationData from '../.././lotties/loading_payment.json';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PaymentServices from '../../service/Payment';

export default function WaitTime() {
    const [time, setTime] = useState(10)
    const [searchParams, setSearchParams] = useSearchParams();
    const [paymentStatus, setPaymentStatus] = useState('')
    const [storeOrderId, setStoreOrderId] = useState()
    const paramKey = searchParams.get("order_id")
    const navigate = useNavigate()
    console.log(paramKey)
    console.log(paramKey)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleNavigate = async (status) => {
        if (status === "COMPLETED") {
            return navigate('/payment/status-successful', { state: { orderId: storeOrderId } })
        } else if (status === "PENDING") {
            return navigate('', { state: { orderId: storeOrderId } })
        } else if (status === "FAILED") {
            return navigate('', { state: { orderId: storeOrderId } })
        } else {
            return navigate('/')
        }
    }

    console.log(paymentStatus)
    useEffect(() => {
        if (time === 0) {
            handleNavigate(paymentStatus)
        }
    }, [time])

    useEffect(() => {
        if (searchParams.get("order_id")) {
            setStoreOrderId(searchParams.get("order_id"))
            PaymentServices.checkPaymentStatus(searchParams.get("order_id")).then(res => {
                console.log(res)
                if (res.status === 200 || res.status === 201) {
                    console.log(res.data?.status)
                    setPaymentStatus(res.data?.status)
                }
            })
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
        } else {
            setStoreOrderId(null)
        }

    }, [searchParams.get("order_id")])

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
