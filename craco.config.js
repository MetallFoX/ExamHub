const {get} = require("node:http");

const applications = [
    {id: "securities-api", name: "Securities API", version: "1.0.0", kind: "API"},
    {id: "quotes-api", name: "Quotes API", version: "1.0.0", kind: "API"},
    {id: "indicators-api", name: "Indicators API", version: "1.0.0", kind: "API"}
]

const specifications = [
    {id: "spec-1", name: "Securities Spec"},
    {id: "spec-2", name: "Quotes Spec"},
    {id: "spec-3", name: "Indicators Spec"}
]

const executions = [
    {id: "execution-1",
        specification: {
            id: specifications[0].id,
            name: specifications[0].name,
            version: "1.0.0",
            application: {id: applications[0].id, name: applications[0].name, version: applications[0].version}
        },
        result: false
    },
    {id: "execution-2",
        specification: {
            id: specifications[1].id,
            name: specifications[1].name,
            version: "1.0.0",
            application: {id: applications[1].id, name: applications[1].name, version: applications[1].version}
        },
        result: true
    },
    {id: "execution-3",
        specification: {
            id: specifications[2].id,
            name: specifications[2].name,
            version: "1.0.0",
            application: {id: applications[2].id, name: applications[2].name, version: applications[2].version}
        },
        result: false
    }
]

const environments = [
    {id: "env-1", name: "Dev Environment"},
    {id: "env-2", name: "Prod Environment"}
]

module.exports = {
    devServer: {
        onBeforeSetupMiddleware: ({app}) => {
            app.get('/api/applications', (_req, res) => {
                res.send({
                    page: 0,
                    size: applications.length,
                    total: applications.length,
                    content: [...applications]
                })
            });
            app.get('/api/applications/:applicationId', (_req, res) => {
                res.send(applications[0])
            });

            app.get('/api/environments', (_req, res) => {
                res.send({
                    page: 0,
                    size: environments.length,
                    total: environments.length,
                    content: [...environments]
                })
            });
            app.get('/api/environments/:environmentId', (_req, res) => {
                res.send(environments[0])
            });

            app.get('/api/specifications', (_req, res) => {
                res.send({
                    page: 0,
                    size: specifications.length,
                    total: specifications.length,
                    content: [...specifications]
                })
            });
            app.get('/api/specifications/:specificationId', (_req, res) => {
                res.send(specifications[0])
            });

            app.get('/api/executions', (_req, res) => {
                res.send({
                    page: 0,
                    size: executions.length,
                    total: executions.length,
                    content: [...executions]
                })
            });
            app.get('/api/executions/:executionId', (_req, res) => {
                res.send(executions[0])
            });
        }

        /*
                proxy: [
                    {
                        context: ['/api'],
                        target: 'http://localhost:8081',
                        secure: true,
                        changeOrigin: true,
                    }
                ]
        */
    }
}