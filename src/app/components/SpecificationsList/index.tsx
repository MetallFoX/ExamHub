import {List, Skeleton, theme} from "antd";
import React, {FC, useEffect, useState} from "react";
import {ReloadOutlined, SettingOutlined} from "@ant-design/icons";
import api from "../../api/exam/api"
import {Specification} from "../../types/Specification";


const ExecutionsList: FC = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Specification[]>([]);
    const [list, setList] = useState<Specification[]>([]);

    const {token: {colorBgContainer, borderRadiusLG}} = theme.useToken();

    async function loadData() {
        const data = (await api.getSpecifications()).content.map(spec => ({
            id: spec.id,
            name: spec.name,
            version: "1.0.0",
            application: {
                id: "app-id",
                name: "app-name",
                version: "1.0.0"
            }
        }))
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
                                title={<a href={"/specifications/" + item.id}>{item.id}</a>}
                                description={item.name + " (" + item.version + ")"}
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