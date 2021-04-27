import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check, userRole} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import {fetchBrands, fetchTypes} from "./http/deviceAPI";
//import {userData} from "./http/userDataAPI";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
            user.setUser(data)
        }).finally(() => setLoading(false))


        // userRole().then(data => user.isUserRole(data))
        // checkUser().then(data => {
        //     user.setUsers(true)
        // }).finally(() => setLoading(false))

        // getOneUser(3).then(data => {
        //     user.setUser(true)
        // }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
