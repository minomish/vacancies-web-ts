import './JobList.scss';
import useJobList from '../hook/useJobList';
import { User } from '../types/User';

const JobList = () => {
    const { data, isLoading, isError, error } = useJobList();

    if (isLoading) {
        return <h2>Загрузка пользователей...</h2>;
    }

    if (isError) {
        return <h2>Ошибка загрузки: {error?.message}</h2>;
    }

    return (
        <div className="joblist">
            {data?.map((user: User, index: number) => (
                <div key={index} className="profil">
                    <div className="profil-header">
                        <img
                            src={user.picture.medium}
                            alt="User"
                        />
                        <span>{user.name.first} {user.name.last}</span>
                    </div>
                    <div className="profil-body">
                        <h3>{user.login.username}</h3>
                        <p>
                            Почта: {user.email}
                        </p>
                        <p>
                            Пол: {user.gender}
                        </p>
                        <p>
                            Возраст: {user.dob.age}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JobList;
