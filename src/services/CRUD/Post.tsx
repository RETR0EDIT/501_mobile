import axios from "axios";

const Post = async (API_URL: string, data?: any) => {
  try {
    console.log("Sending data:", data);
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error;
  }
};

export default Post;
