import {List, Skeleton, theme} from "antd";
import React, {FC, useEffect, useState} from "react";
import {Application} from "../../types/Application";
import {ReloadOutlined, SettingOutlined} from "@ant-design/icons";
import api from "../../api/exam/api"


const ApplicationsList: FC = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Application[]>([]);
    const [list, setList] = useState<Application[]>([]);

    const {token: {colorBgContainer, borderRadiusLG}} = theme.useToken();

    async function loadData() {
        const data = (await api.getApplications()).content.map(
            ({id, name, version, kind}) => ({id, name, version, kind})
        )
        setInitLoading(false);
        setData(data);
        setList(data);
        console.log(data);
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
                className="applications-list"
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
                                title={<a href={"/applications/" + item.id}>{item.id}</a>}
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

export default ApplicationsList;