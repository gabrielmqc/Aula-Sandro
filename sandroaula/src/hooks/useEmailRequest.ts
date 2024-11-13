import { EmailRequest } from "../@types/EmailRequest";
import axios from "axios";

export const sendEmail = async (data: EmailRequest) => {
    try {
        const response = await axios.post('https://us-central1-project-arch-lambda.cloudfunctions.net/function-1', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};