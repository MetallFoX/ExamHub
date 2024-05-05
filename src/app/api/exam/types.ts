export interface Pageable<V> {
    page: number;
    size: number;
    total: number;
    content: V[];
}

export interface Application {
    id: string;
    name: string;
    version: string;
    kind: string;
}

export interface Environment {
    id: string;
    name: string;
    state: string;
}

export interface Specification {
    id: string;
    name: string;
}

export interface Execution {
    id: string;
    result: boolean;
}

export interface GenerateSpecResponse {
    spec: {
        content: string
    }
}