import { readFile, writeFile } from 'fs/promises';
import { PostDto } from './blog.model';

export interface BlogRepository {
  getAllPost(): Promise<PostDto[]>;
  createPost(postDto: PostDto);
  getPost(id: string): Promise<PostDto>;
  deletePost(id: string);
  updatePost(id: string, postDto: PostDto);
}

export class BlogFileRepository implements BlogRepository {
  FILE_NAME = './src/blog.data.json';

  async getAllPost(): Promise<PostDto[]> {
    const datas = await readFile(this.FILE_NAME, 'utf-8');
    const posts = JSON.parse(datas) as PostDto[];
    return posts;
  }

  async createPost(postDto: PostDto): Promise<void> {
    const posts = await this.getAllPost();
    const id = posts.length + 1;
    const createPost = {
      ...postDto,
      id: id.toString(),
      createdAt: new Date(),
    };
    posts.push(createPost);
    await writeFile(this.FILE_NAME, JSON.stringify(posts));
  }

  async getPost(id: string): Promise<PostDto> {
    const posts = await this.getAllPost();
    const result = posts.find((post) => post.id === id) as PostDto;
    return result;
  }

  async deletePost(id: string) {
    const posts = await this.getAllPost();
    const filteredPosts = posts.filter((post) => post.id !== id);
    await writeFile(this.FILE_NAME, JSON.stringify(filteredPosts));
  }

  async updatePost(id: string, postDto: PostDto) {
    const posts = await this.getAllPost();
    const index = posts.findIndex((post) => post.id === id);
    posts[index] = {
      ...postDto,
      id: id,
      updatedDt: new Date(),
    };
    await writeFile(this.FILE_NAME, JSON.stringify(posts));
  }
}
