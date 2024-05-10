import {Button, Flex, Input, Spin} from "antd";
import React, {useEffect, useState} from "react";
import api from "../../api/exam/api";
import SwaggerEditor from "../../components/SwaggerEditor/SwaggerEditor";

const {TextArea} = Input;

export default function Expert() {
    const [spec, setSpec] = useState<string>("");
    const [openApi, setOpenApi] = useState<string>("");

    const [isGenerating, setGenerating] = useState(false);

    const onClick = (e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setGenerating(true)

        api.generateSpecification(openApi)
            .then(spec => {
                setSpec(spec.spec.content)
            })
            .catch(error => console.log(error))
            .then(() => setGenerating(false))
    };
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOpenApi(e.currentTarget.value)
    }

    return (
        <Flex vertical gap={16}>
                <Spin
                    tip="Generating"
                    size="default"
                    spinning={isGenerating}
                    style={{height: 500, width: 700, resize: 'none'}}>

                    <TextArea
                        placeholder="Generated Spec will be here"
                        disabled
                        style={{height: 500, resize: 'none'}}
                        value={spec}
                    />
                </Spin>
            <Button
                type="primary"
                onClick={onClick}
                style={{width: 100}}
            >
                Generate
            </Button>
            <SwaggerEditor/>
        </Flex>
    )
}
