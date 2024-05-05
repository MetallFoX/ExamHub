import {Button, Flex, Input, Spin} from "antd";
import React, {useEffect, useState} from "react";
import type {SearchProps} from 'antd/es/input/Search';
import api from "../../api/exam/api";
import 'swagger-editor/dist/swagger-editor.css';
import SwaggerEditor, {plugins} from 'swagger-editor';

const {Search} = Input;
const {TextArea} = Input;

/*window.editor = SwaggerEditor({
    dom_id: '#swagger-editor',
    layout: 'EditorLayout',
    plugins: Object.values(plugins),
    swagger2GeneratorUrl: 'https://generator.swagger.io/api/swagger.json',
    oas3GeneratorUrl: 'https://generator3.swagger.io/openapi.json',
    swagger2ConverterUrl: 'https://converter.swagger.io/api/convert',
});*/

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
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOpenApi(e.currentTarget.value)
    }

    /*useEffect(() => {
        window.editor = SwaggerEditor({
            dom_id: '#swagger-editor',
            layout: 'EditorLayout',
            plugins: Object.values(plugins),
            swagger2GeneratorUrl: 'https://generator.swagger.io/api/swagger.json',
            oas3GeneratorUrl: 'https://generator3.swagger.io/openapi.json',
            swagger2ConverterUrl: 'https://converter.swagger.io/api/convert',
        });
    })*/

    return (
        <Flex vertical gap={16}>
            <Search
                placeholder="Place OpenApi URI here"
                allowClear
                onSearch={onSearch}
                style={{width: 500}}
            />
            <Flex gap={8}>
                <TextArea
                    showCount
                    maxLength={4000}
                    placeholder="Place OpenApi definotion here"
                    style={{height: 500, width: 500, resize: 'none'}}
                    onChange={onChange}
                />
                <Spin
                    tip="Generating"
                    size="default"
                    spinning={isGenerating}
                    style={{height: 500, width: 700, resize: 'none'}}>

                    <TextArea
                        showCount
                        placeholder="Generated Spec will be here"
                        disabled
                        style={{height: 500, width: 700, resize: 'none'}}
                        value={spec}
                    />
                </Spin>

            </Flex>
            <Button
                type="primary"
                onClick={onClick}
                style={{width: 100}}
            >
                Generate
            </Button>

            <div id="editor-wrapper"/>
          {/*  <SwaggerEditor
                dom_id='#swagger-editor'
                layout='EditorLayout'
                //plugins={plugins}
                swagger2GeneratorUrl='https://generator.swagger.io/api/swagger.json'
                oas3GeneratorUrl='https://generator3.swagger.io/openapi.json'
                swagger2ConverterUrl='https://converter.swagger.io/api/convert'
            />*/}
        </Flex>
    )
}

declare global {
    interface Window { editor: any; }
}