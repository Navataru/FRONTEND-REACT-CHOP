import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
//import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
//import CreateType from "../components/modals/CreateType";
import CreateUserdata from "../components/modals/CreateUserdata";

const Admin = () => {
    // const [brandVisible, setBrandVisible] = useState(false)
    // const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [userdataVisible, setUserdataVisible] = useState(false)



    return (
        <Container className="d-flex flex-column">
            {/*<Button*/}
            {/*    variant={"outline-dark"}*/}
            {/*    className="mt-4 p-2"*/}
            {/*    onClick={() => setTypeVisible(true)}*/}
            {/*>*/}
            {/*    Add date championship*/}
            {/*</Button>*/}
            {/*<Button*/}
            {/*    variant={"outline-dark"}*/}
            {/*    className="mt-4 p-2"*/}
            {/*    onClick={() => setBrandVisible(true)}*/}
            {/*>*/}
            {/*    Add map*/}
            {/*</Button>*/}
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Registration Championships
            </Button>

            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setUserdataVisible(true)}
            >
                Userdata
            </Button>

            {/*<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>*/}
            {/*<CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>*/}

            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateUserdata show={userdataVisible} onHide={() => setUserdataVisible(false)}/>

        </Container>
    );
};

export default Admin;
