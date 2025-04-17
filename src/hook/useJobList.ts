import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';
import { User } from '../types/User';

const fetchUsers = async (): Promise<User[]> => {
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
