interface ModelConference {
  id: number;
  master: string;
  tstart: string;
  tend: string;
  title: string;
  content: string;
  room: {
    id: number;
    name: string;
  };
  account: {
    id: number;
    login: string;
    firstname: string;
    lastname: string;
  };
}
export default ModelConference;
