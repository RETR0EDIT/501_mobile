import Delete from "./CRUD/Delete";
import Get from "./CRUD/Get";
import Post from "./CRUD/Post";
import Put from "./CRUD/Put";
import ModelTest from "../models/ModelTest";
const API_URL = "http://localhost:8080/api/tests";

const Tests = {
  Create: async (Data: ModelTest) => {
    return await Post(API_URL, Data);
  },
  GetByStudy: async (study: string) => {
    const tests = await Get(`${API_URL}/study/${study}`);
    return tests.map((test: ModelTest) => ({
      ...test,
      description: test.content // Utilise le texte personnalisé spécifique
    }));
  },
  Read: async () => {
    const tests = await Get(API_URL);
    return tests.map((test: ModelTest) => ({
      ...test,
      description: test.content // Utilise le texte personnalisé spécifique
    }));
  },
  Update: async (Data: ModelTest) => {
    return await Put(API_URL, Data);
  },
  Delete: async (id: string) => {
    return await Delete(API_URL, id);
  },
};

export default Tests;