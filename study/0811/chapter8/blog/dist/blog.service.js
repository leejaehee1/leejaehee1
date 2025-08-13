"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
class BlogService {
    posts = [];
    getAllPosts() {
        return this.posts;
    }
    createPost(postDto) {
        const id = this.posts.length + 1;
        this.posts.push({ ...postDto, id: id.toString(), createdDt: new Date() });
    }
    getPost(id) {
        const post = this.posts.find((post) => {
            return post.id === id;
        });
        console.log(post);
        return post;
    }
    delete(id) {
        const filteredPosts = this.posts.filter((post) => post.id !== id);
        this.posts = [...filteredPosts];
    }
    updatePost(id, postDto) {
        const updateIndex = this.posts.findIndex((post) => post.id === id);
        const updatedPost = {
            ...postDto,
            id: id,
            updatedDt: new Date(),
        };
        this.posts[updateIndex] = updatedPost;
        return updatedPost;
    }
}
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map