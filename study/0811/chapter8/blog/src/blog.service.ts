import { PostDto } from './blog.model';

export class BlogService {
  posts: PostDto[] = [];

  getAllPosts() {
    return this.posts;
  }

  createPost(postDto: PostDto) {
    const id = this.posts.length + 1;
    this.posts.push({ ...postDto, id: id.toString(), createdDt: new Date() });
  }

  getPost(id: string) {
    const post = this.posts.find((post) => {
      return post.id === id;
    });
    console.log(post);
    return post;
  }

  delete(id: string) {
    const filteredPosts = this.posts.filter((post) => post.id !== id);
    this.posts = [...filteredPosts];
  }

  updatePost(id: string, postDto: PostDto) {
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
