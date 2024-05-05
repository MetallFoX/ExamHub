import React from 'react';
import AppLayout from "../AppLayout";
import { useParams } from "react-router-dom"

const Application: React.FC = () => {

    const params = useParams()

    return (
        <AppLayout/>
            /*<span>{"App " + params.applicationId}</span>
        </AppLayout>*/
    );
};

export default Application;