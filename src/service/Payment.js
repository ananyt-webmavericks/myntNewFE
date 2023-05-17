import { Base_Url } from "../Utils/Configurable";
import { toast } from "react-hot-toast";
import { authAxios } from "./Auth-header";

const notify = (data) => {
    toast.error(data,{
        position: "top-right",
        style: {
          borderRadius: "3px",
          background: "red",
          color: "#fff",
        },
      })
}
const notifySuccess = (data) => {
    toast.success(data,{
        position: "top-right",
        style: {
          borderRadius: "3px",
          background: "green",
          color: "#fff",
        },
      })
}

const checkPaymentStatus = async (paymentId) => {
    try {
        const response = await authAxios.get(`${Base_Url}/api/payment/get/order-details/${paymentId}`);
        notifySuccess(response.data.message)
        return response;
    }
    catch (error) {
        console.log(error)
        return error
    }
}

const PaymentServices = {
    checkPaymentStatus
};

export default PaymentServices