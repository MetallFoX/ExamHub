import {List, Skeleton, theme} from "antd";
import React, {FC, useEffect, useState} from "react";
import {Execution} from "../../types/Execution";
import {CheckCircleTwoTone, ReloadOutlined, SettingOutlined, StopTwoTone} from "@ant-design/icons";
import api from "../../api/exam/api"


const ExecutionsList: FC = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Execution[]>([]);
    const [list, setList] = useState<Execution[]>([]);

    const {token: {colorBgContainer, borderRadiusLG}} = theme.useToken();

    async function loadData() {
        const data = (await api.getExecutions()).content.map(ex => ({
            id: ex.id,
            specification: {
                id: "spec-1",
                name: "Spec",
                version: "1.0.0",
                application: {
                    id: "app-1",
                    name: "App",
                    version: "1.0.1"
                }
            },
            result: ex.result
        }))
        console.log(data)
        setInitLoading(false);
        setData(data);
        setList(data);
        setLoading(false);
    }

    useEffect(() => {
        (async () => {
            await loadData()
        })()
    }, []);

    return (
        <div
            style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
        >
            <List
                className="executions-list"
                loading={initLoading}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={(item) => (
                    <List.Item
                        actions={[
                            <ReloadOutlined key="restart" onClick={function () {
                            }}/>,
                            <SettingOutlined key="setting" onClick={function () {
                            }}/>
                        ]}
                    >
                        <Skeleton loading={false} avatar title={false} active>
                            <List.Item.Meta
                                avatar={item.result ? <CheckCircleTwoTone twoToneColor="#52c41a"/> :
                                    <StopTwoTone twoToneColor="red"/>}
                                title={<a href={"/executions/" + item.id}>{item.id}</a>}
                                description={item.specification.name + " (" + item.specification.version + ")"}
                            />
                            <div>content</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ExecutionsList;