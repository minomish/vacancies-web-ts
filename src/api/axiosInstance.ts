import axios from 'axios'; //  библиотека для отправки HTTP-запросов
//чтобы работать с сервером

const axiosInstance = axios.create({ // создаем копию axios
    baseURL: 'https://randomuser.me/api/', 
});

export default axiosInstance;
