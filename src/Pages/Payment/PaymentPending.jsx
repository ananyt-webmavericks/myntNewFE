import React from 'react'
import '../../css/Payment/payment_success.css'
import Lottie from "react-lottie";
import animationData from '../.././lotties/order_pending.json';
import { useNavigate } from 'react-router-dom';

export default function PaymentPending() {
    const navigate = useNavigate()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div class="bg">
            <div class="card">
                <span class="card__success">
                    <Lottie
                        options={defaultOptions}
                    />
                    {/* <i class="ion-checkmark"></i> */}
                </span>

                <h1 class="card__msg">Payment Pending</h1>
                <h2 class="card__submsg">Thank you for your transfer</h2>
                <h2 class="card__submsg">TransactionID : XXZR1565455465132</h2>

                <div class="card__body">
                    <h1 class="card__price"><span>$</span>20<span>.00</span></h1>

                    <p class="card__method">Payment method</p>
                    <div class="card__payment">
                        <img src="https://seeklogo.com/images/V/VISA-logo-F3440F512B-seeklogo.com.png" class="card__credit-card" />
                        <div class="card__card-details">
                            <p class="card__card-type">Credit / debit card</p>
                            <p class="card__card-number">Visa ending in **89</p>
                        </div>
                    </div>

                </div>

                <button
                    onClick={() => navigate('/dashboard')}
                    className="submit-btn-startup kyc" style={{ maxWidth: '100%' }}>Continue</button>

            </div>

        </div>
    )
}
