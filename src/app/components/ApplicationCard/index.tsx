import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import {Card} from "antd";
import React, {FC} from "react";

interface ApplicationCardProps {
    title: string;
    description: string;
    kind: string;
}

const ApplicationCard: FC<ApplicationCardProps> = ({title, description}) => {
    const {Meta} = Card;
    return (
        <Card
            style={{width: 300}}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <SettingOutlined key="setting"/>,
                <EditOutlined key="edit"/>,
                <EllipsisOutlined key="ellipsis"/>,
            ]}
        >
            <Meta
                title={title}
                description={description}
            />
        </Card>
    )
}

export default ApplicationCard;