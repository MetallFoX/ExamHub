import {request} from "../../../utils/request";
import {Application, Environment, Execution, GenerateSpecResponse, Pageable, Specification} from "./types";

export async function getApplications() {
    return request<Pageable<Application>>("http://localhost:3000/api/applications", {method: 'GET'})
}

export async function getApplication(id: string) {
    return request<Application>(`http://localhost:3000/api/applications/${id}`, {method: 'GET'})
}

export async function getEnvironments() {
    return request<Pageable<Environment>>("http://localhost:3000/api/environments", {method: 'GET'})
}

export async function getEnvironment(id: string) {
    return request<Environment>(`http://localhost:3000/api/environments/${id}`, {method: 'GET'})
}

export async function getSpecifications() {
    return request<Pageable<Specification>>("http://localhost:3000/api/specifications", {method: 'GET'})
}

export async function getSpecification(id: string) {
    return request<Specification>(`http://localhost:3000/api/specifications/${id}`, {method: 'GET'})
}

export async function getExecutions() {
    return request<Pageable<Execution>>("http://localhost:3000/api/executions", {method: 'GET'})
}

export async function getExecution(id: string) {
    return request<Execution>(`http://localhost:3000/api/executions/${id}`, {method: 'GET'})
}

export async function generateSpecification(openapi: string) {
    return request<GenerateSpecResponse>("http://localhost:8080/specs/generate", {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                api: openapi
            }
        )
    });
}

let api = {
    getApplications,
    getApplication,
    getEnvironments,
    getEnvironment,
    getSpecifications,
    getSpecification,
    getExecutions,
    getExecution,
    generateSpecification
};

export default api;