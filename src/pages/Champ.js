import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Champ = () => {
    // const [brandVisible, setBrandVisible] = useState(false)
    // const [typeVisible, setTypeVisible] = useState(false)
    // const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            HELLo
            {/*<Button*/}
            {/*    variant={"outline-dark"}*/}
            {/*    className="mt-4 p-2"*/}
            {/*    onClick={() => setTypeVisible(true)}*/}
            {/*>*/}
            {/*    Add championship*/}
            {/*</Button>*/}
            {/*<Button*/}
            {/*    variant={"outline-dark"}*/}
            {/*    className="mt-4 p-2"*/}
            {/*    onClick={() => setBrandVisible(true)}*/}
            {/*>*/}
            {/*    Add Heroes template*/}
            {/*</Button>*/}
            {/*<Button*/}
            {/*    variant={"outline-dark"}*/}
            {/*    className="mt-4 p-2"*/}
            {/*    onClick={() => setDeviceVisible(true)}*/}
            {/*>*/}
            {/*    Registration Championships*/}
            {/*</Button>*/}
            {/*<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>*/}
            {/*<CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>*/}
            {/*<CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>*/}
        </Container>
    );
};

export default Champ;