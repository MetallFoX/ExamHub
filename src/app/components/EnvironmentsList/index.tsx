import {List, Skeleton, theme} from "antd";
import React, {FC, useEffect, useState} from "react";
import {PlayCircleOutlined, ReloadOutlined, SettingOutlined, StopOutlined} from "@ant-design/icons";
import api from "../../api/exam/api"
import {Environment, EnvironmentState} from "../../types/Environment";


const EnvironmentsList: FC = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Environment[]>([]);
    const [list, setList] = useState<Environment[]>([]);

    const {token: {colorBgContainer, borderRadiusLG}} = theme.useToken();

    async function loadData() {
        const data = (await api.getEnvironments()).content.map(
            ({id, name, state}) => ({id, name, version: "1.0.0", state: EnvironmentState["Running"]})
        )
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
                className="environments-list"
                loading={initLoading}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={(item) => (
                    <List.Item
                        actions={[
                            (item.state === EnvironmentState.Running) ?
                                <PlayCircleOutlined key="start" onClick={function () {
                                }}/>
                                : <StopOutlined key="stop" onClick={function () {
                                }}/>,

                            <ReloadOutlined key="restart" onClick={function () {
                            }}/>,


                            <SettingOutlined key="setting" onClick={function () {
                            }}/>
                        ]}
                    >
                        <Skeleton loading={false} avatar title={false} active>
                            <List.Item.Meta
                                title={<a href={"/environments/" + item.id}>{item.id}</a>}
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

export default EnvironmentsList;