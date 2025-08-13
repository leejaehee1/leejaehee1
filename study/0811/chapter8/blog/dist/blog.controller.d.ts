import { BlogService } from './blog.service';
export declare class BlogController {
    blogService: BlogService;
    constructor();
    getAllPosts(): import("./blog.model").PostDto[];
    createPost(postDto: any): string;
    getPostById(id: string): import("./blog.model").PostDto | undefined;
    deletePost(id: string): string;
    updatePost(id: string, postDto: any): {
        id: string;
        updatedDt: Date;
        title: string;
        content: string;
        name: string;
        createdDt: Date;
    };
}
