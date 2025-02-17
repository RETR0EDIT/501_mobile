import axios from "axios";

const Delete = async (API_URL: string, id: string) => {
  try {
    const response = await axios.delete(API_URL + "/" + id);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default Delete;
