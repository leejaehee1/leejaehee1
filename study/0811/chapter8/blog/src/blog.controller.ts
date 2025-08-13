import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  blogService: BlogService;

  constructor() {
    this.blogService = new BlogService();
  }

  @Get()
  getAllPosts() {
    console.log('모든 게시글 가져오기!!!!!!');
    return this.blogService.getAllPosts();
  }

  @Post()
  createPost(@Body() postDto) {
    console.log('게시글 작성');
    console.log(postDto);
    this.blogService.createPost(postDto);
    return 'success';
  }

  @Get('/:id')
  getPostById(@Param('id') id: string) {
    console.log(`[id: ${id}]게시글 하나 가져오기`);
    return this.blogService.getPost(id);
  }

  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    console.log(`[id: ${id}]게시글 삭제`);
    this.blogService.delete(id);
    return 'success';
  }

  @Put('/:id')
  updatePost(@Param('id') id: string, @Body() postDto) {
    console.log(`[id: ${id}]게시글 수정`);
    console.log(postDto);
    return this.blogService.updatePost(id, postDto);
  }
}
