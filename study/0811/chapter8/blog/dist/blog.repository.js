"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogFileRepository = void 0;
const promises_1 = require("fs/promises");
class BlogFileRepository {
    FILE_NAME = './src/blog.data.json';
    async getAllPost() {
        const datas = await (0, promises_1.readFile)(this.FILE_NAME, 'utf-8');
        const posts = JSON.parse(datas);
        return posts;
    }
    async createPost(postDto) {
        const posts = await this.getAllPost();
        const id = posts.length + 1;
        const createPost = {
            ...postDto,
            id: id.toString(),
            createdAt: new Date(),
        };
        posts.push(createPost);
        await (0, promises_1.writeFile)(this.FILE_NAME, JSON.stringify(posts));
    }
    async getPost(id) {
        const posts = await this.getAllPost();
        const result = posts.find((post) => post.id === id);
        return result;
    }
    async deletePost(id) {
        const posts = await this.getAllPost();
        const filteredPosts = posts.filter((post) => post.id !== id);
        await (0, promises_1.writeFile)(this.FILE_NAME, JSON.stringify(filteredPosts));
    }
    async updatePost(id, postDto) {
        const posts = await this.getAllPost();
        const index = posts.findIndex((post) => post.id === id);
        posts[index] = {
            ...postDto,
            id: id,
            updatedDt: new Date(),
        };
        await (0, promises_1.writeFile)(this.FILE_NAME, JSON.stringify(posts));
    }
}
exports.BlogFileRepository = BlogFileRepository;
//# sourceMappingURL=blog.repository.js.map