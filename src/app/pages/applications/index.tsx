import React, {useState} from 'react';
import {Col, Flex, Layout, Row, Space} from 'antd';
import ApplicationCard from "../../components/ApplicationCard";
import {Application} from "../../types/Application";
import ExecutionsList from "../../components/ExecutionsList";

const applications: Application[] = [
    {id: "1", name: "Quotes API", version: "1.1.1", kind: "API"},
    {id: "2", name: "Securities API", version: "1.0.2", kind: "API"},
    {id: "3", name: "Indicators API", version: "1.0.1", kind: "API"}
]

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                <Row>
                    <Col span={24}>
                        <Flex wrap="wrap" gap="large">
                            {applications && applications.map(app => (
                                <ApplicationCard
                                    title="Quotes API"
                                    description="Some desc"
                                    kind="api"
                                />
                            ))}
                        </Flex>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <ExecutionsList/>
                    </Col>
                </Row>
            </Space>
        </Layout>
    )
};

export default App;