export interface User {
    gender: string;
    name: {
        first: string;
        last: string;
    };
    picture: {
        medium: string;
    };
    email: string;
    login:{
        username: string;
    }
    dob: {
        age: number;
    };
}