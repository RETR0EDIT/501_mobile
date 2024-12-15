import axios from 'axios';

const Put = async (API_URL: string, data?: any) => {
    try {
        const response = await axios.put(API_URL, data);
        return response.data;
    } catch (error) {

        throw error;
    }
};

export default Put;