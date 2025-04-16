import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import JobList from "./JobList";
import Auth from "./Auth";

const SearchPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=> {
        const username = Cookies.get("username")
        const password = Cookies.get("password")

        if(username && password) {
            setIsLoggedIn(true)
        }
    }, [])

    return(
        isLoggedIn ? <JobList/> : <Auth/>
    )
}

export default SearchPage;