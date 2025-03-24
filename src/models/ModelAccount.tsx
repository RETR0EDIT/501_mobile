interface ModelAccount {
  id: number;
  login: string;
  password: string;
  firstname: string;
  lastname: string;
  city: string;
  study: string;
  status: string;
  role: string;
  phone: string;
  phoneType: string;
  currentstudy: string;
  image: string;
  createdat: Date;
  editedat: Date;
  valid: boolean;
  date: Date;
  token: string;
  validtoken: boolean;
}
export default ModelAccount;
