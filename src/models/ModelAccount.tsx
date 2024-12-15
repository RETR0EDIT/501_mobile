interface ModelAccount {
    id: number;
    login: string;
    password: string;
    firstname: string;
    lastname: string;
    city: string;
    study: string;
    role: string;
    phone: string;
    image: string;
    createdat: Date;
    editedat: Date;
    valid: boolean;
    date: Date;
}
export default ModelAccount;