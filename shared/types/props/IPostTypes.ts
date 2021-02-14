import { MdxRemote } from "next-mdx-remote/types";

interface IPostTypes {
  slug: string;
  frontMatter: { [key: string]: any };
}

interface IFrontMatter {
  path: string, 
  date: string;
  title: string;
  description: string;
}
interface IPostFileType {
  filepath: string;
  slug: string;
}

interface IFormatedPostType {
  filepath: string;
  slug: string;
  content: string;
  frontMatter: IFrontMatter;
  mdx: MdxRemote.Source;
}

interface IPostTypesArray {
  posts: IPostTypes[];
}

export default IPostTypes;
export type { IPostTypesArray, IPostFileType, IFrontMatter, IFormatedPostType};
