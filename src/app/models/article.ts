import { Category } from './category';

export class Article {
  id!:number;
  title!:string;
  contentSumary!:string;
  contentMain!:string;
  publishDate!:Date;
  picture!:string;
  viewCount!: number;
  commentCount!: number;
  category!:Category;
}

