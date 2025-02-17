import axios from 'axios';

const Get = async (API_URL: string, data?: any) => {
    try {
        let response;
        if (data) {
            response = await axios.get(API_URL, { params: data });
        } else {
            response = await axios.get(API_URL);
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default Get;