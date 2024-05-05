import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Applications from "./pages/applications";
import Application from "./pages/application";
import Specifications from "./pages/specifications";
import Environments from "./pages/environments";
import Environment from "./pages/environment";
import Specification from "./pages/specification";
import Executions from "./pages/executions";
import Execution from "./pages/execution";
import AppLayout from "./pages/AppLayout";
import {Result} from "antd";
import Expert from "./pages/expert";


const App: React.FC = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route path="/applications">
                        <Route index element={<Applications/>}/>
                        <Route path=":applicationId" element={<Application/>}/>
                    </Route>
                    <Route path="/specifications">
                        <Route index element={<Specifications/>}/>
                        <Route path=":specificationId" element={<Specification/>}/>
                    </Route>
                    <Route path="/executions">
                        <Route index element={<Executions/>}/>
                        <Route path=":executionId" element={<Execution/>}/>
                    </Route>
                    <Route path="/environments">
                        <Route index element={<Environments/>}/>
                        <Route path=":environmentId" element={<Environment/>}/>
                    </Route>
                    <Route index element={<Expert/>} path="/expert"/>
                    <Route path="*" element={
                        <Result
                            status="404"
                            title="404"
                            subTitle="Sorry, the page you visited does not exist."
                        />
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;