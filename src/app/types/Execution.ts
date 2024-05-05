export interface Execution {
    id: string;
    specification: {
        id: string;
        name: string;
        version: string;
        application: {
            id: string;
            name: string;
            version: string;
        }
    }
    result: boolean;
}