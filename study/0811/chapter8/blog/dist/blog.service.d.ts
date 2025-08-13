import { PostDto } from './blog.model';
export declare class BlogService {
    posts: PostDto[];
    getAllPosts(): PostDto[];
    createPost(postDto: PostDto): void;
    getPost(id: string): PostDto | undefined;
    delete(id: string): void;
    updatePost(id: string, postDto: PostDto): {
        id: string;
        updatedDt: Date;
        title: string;
        content: string;
        name: string;
        createdDt: Date;
    };
}
