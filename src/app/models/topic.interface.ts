export interface Topic {
    id: string;
    title: string;
    topics?: Topic[];
    topicPath?: string;
}
