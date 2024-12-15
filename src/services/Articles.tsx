import Delete from "./CRUD/Delete";
import Get from "./CRUD/Get";
import Post from "./CRUD/Post";
import Put from "./CRUD/Put";
import ModelArticle from "../models/ModelArticle";

const API_URL = "http://localhost:8080/api/articles";


const Articles = {
    Create: async (Data: ModelArticle) => {
        return await Post(API_URL, Data);
    },
    Read: async () => {
        return await Get(API_URL);
    },
    Update: async (Data: ModelArticle) => {
        return await Put(API_URL, Data);
    },
    Delete: async (id: string) => {
        return await Delete(API_URL, id);
    },
};

export default Articles;