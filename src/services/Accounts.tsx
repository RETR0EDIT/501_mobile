import Delete from "./CRUD/Delete";
import Get from "./CRUD/Get";
import Post from "./CRUD/Post";
import Put from "./CRUD/Put";
import ModelAccount from "../models/ModelAccount";

const API_URL = "http://localhost:8080/api/accounts";

const Accounts = {
  Create: async (Data: ModelAccount) => {
    return await Post(API_URL, Data);
  },
  Read: async () => {
    return await Get(API_URL);
  },
  ReadOne: async (id: string) => {
    return await Get(`${API_URL}/${id}`);
  },
  Login: async (Data: any) => {
    return await Post(`${API_URL}/login`, Data);
  },
  Update: async (Data: ModelAccount) => {
    return await Put(API_URL, Data);
  },
  Delete: async (id: string) => {
    return await Delete(API_URL, id);
  },
};

export default Accounts;
