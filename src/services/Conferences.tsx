import Delete from "./CRUD/Delete";
import Get from "./CRUD/Get";
import Post from "./CRUD/Post";
import Put from "./CRUD/Put";
import ModelConference from "../models/ModelConference";
const API_URL = "http://localhost:8080/api/conferences";


const Conferences = {
    Create: async (Data: ModelConference) => {
        return await Post(API_URL, Data);
    },
    Read: async () => {
        return await Get(API_URL);
    },
    Update: async (Data: ModelConference) => {
        return await Put(API_URL, Data);
    },
    Delete: async (id: string) => {
        return await Delete(API_URL, id);
    },
};

export default Conferences;