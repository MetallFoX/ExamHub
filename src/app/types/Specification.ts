export interface Specification {
    id: string;
    name: string;
    version: string;
    application: {
        id: string;
        version: string;
    };
}