import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import { User } from '../types/User';

//useQuery - помогает запрщивать данные и работать с их состоянием

// создание асинхронной функции 
const fetchUsers = async (/* параметр */): Promise<User[]> => { 
    // async - возвращает Promise 
    // Promise<User[]> - дает обещание что когда нибудь это функция вернет успешный результат 
    // и он будет масивом типа User
    const response = await axiosInstance.get('?results=10'); 
    return response.data.results;
};

const useJobList = () => {
    return useQuery<User[]>({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });
};

export default useJobList;
