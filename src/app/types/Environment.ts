export interface Environment {
    id: string;
    name: string;
    version: string;
    state: EnvironmentState;
}

export enum EnvironmentState {
    Running = "RUNNING",
    Starting = "STARTING",
    Stopped = "STOPPED",
    Failed = "FAILED"
}