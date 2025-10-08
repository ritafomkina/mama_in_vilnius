export interface Topic {
    id: string;
    title: string;
    articlePath?: string;
    topics?: Topic[];
}
