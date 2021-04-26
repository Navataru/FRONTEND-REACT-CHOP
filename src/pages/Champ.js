import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";

const Champ = () => {

    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Add date championship
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Add map
            </Button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>

        </Container>
    );
};

export default Champ;
