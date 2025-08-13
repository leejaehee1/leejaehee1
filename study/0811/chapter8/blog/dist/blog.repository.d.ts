import { PostDto } from './blog.model';
export interface BlogRepository {
    getAllPost(): Promise<PostDto[]>;
    createPost(postDto: PostDto): any;
    getPost(id: string): Promise<PostDto>;
    deletePost(id: string): any;
    updatePost(id: string, postDto: PostDto): any;
}
export declare class BlogFileRepository implements BlogRepository {
    FILE_NAME: string;
    getAllPost(): Promise<PostDto[]>;
    createPost(postDto: PostDto): Promise<void>;
    getPost(id: string): Promise<PostDto>;
    deletePost(id: string): Promise<void>;
    updatePost(id: string, postDto: PostDto): Promise<void>;
}
