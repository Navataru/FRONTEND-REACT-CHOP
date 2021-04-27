import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, ADMIN_SETTINGS} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Championship Heroes </NavLink>

                {user.user.role === "ADMIN" ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_SETTINGS)}
                        >
                            Championship
                        </Button>
                    </Nav>
                    :
                    <Nav></Nav>
                }

                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Registration championship
                        </Button>

                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );

    // return (
    //     <Navbar bg="dark" variant="dark">
    //         <Container>
    //             <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Championship Heroes</NavLink>
    //
    //             <div>
    //                 {(() => {
    //                     if (user.user.role === "ADMIN") {
    //                         return (
    //                             <div>
    //                                 <Nav className="ml-auto" style={{color: 'white'}}>
    //                                     <Button
    //                                         variant={"outline-light"}
    //                                         onClick={() => history.push(ADMIN_SETTINGS)}
    //                                     >
    //                                         Championship
    //                                     </Button>
    //                                     <Button
    //                                         variant={"outline-light"}
    //                                         onClick={() => history.push(ADMIN_ROUTE)}
    //                                         className="ml-2"
    //                                     >
    //                                         Registration championship
    //                                     </Button>
    //
    //                                     <Button
    //                                         variant={"outline-light"}
    //                                         onClick={() => logOut()}
    //                                         className="ml-2"
    //                                     >
    //                                         Выйти
    //                                     </Button>
    //                                 </Nav>
    //                             </div>
    //                         )
    //                     }
    //                     else if(user.user.role === "USER"){
    //                         return (
    //                             <div>
    //                                 <Nav className="ml-auto" style={{color: 'white'}}>
    //                                     <Button
    //                                         variant={"outline-light"}
    //                                         onClick={() => history.push(ADMIN_ROUTE)}
    //                                     >
    //                                         Registration championship
    //                                     </Button>
    //
    //                                     <Button
    //                                         variant={"outline-light"}
    //                                         onClick={() => logOut()}
    //                                         className="ml-2"
    //                                     >
    //                                         Выйти
    //                                     </Button>
    //                                 </Nav>
    //                             </div>
    //                         )
    //
    //                     } else {
    //                         return (
    //                             <div>
    //                                 <Nav className="ml-auto" style={{color: 'white'}}>
    //                                     <Button
    //                                         variant={"outline-light"}
    //                                         onClick={() => history.push(LOGIN_ROUTE)}
    //                                     >Авторизация
    //                                     </Button>
    //                                 </Nav>
    //                             </div>
    //                         )
    //                     }
    //                 })()}
    //             </div>
    //         </Container>
    //     </Navbar>
    //
    // );



});

export default NavBar;
