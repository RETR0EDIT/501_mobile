import Delete from "./CRUD/Delete";
import Get from "./CRUD/Get";
import Post from "./CRUD/Post";
import Put from "./CRUD/Put";
import ModelQuestion from "../models/ModelQuestion";

const API_URL = "http://localhost:8080/api/questions";



const Questions = {
  Create: async (Data: ModelQuestion) => {
    return await Post(API_URL, Data);
  },
  Read: async (idTest) => {
    return await Get(API_URL + '/test/' + idTest);
  },
  ReadOne: async (id: string) => {
    return await Get(`${API_URL}/${id}`);
  },
  Update: async (Data: ModelQuestion) => {
    return await Put(API_URL, Data);
  },
  Delete: async (id: string) => {
    return await Delete(API_URL, id);
  },
};

export default Questions;
