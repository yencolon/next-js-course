interface IPostTypes {
    slug: string;
    frontMatter:{ [key: string]: any }
}

interface IPostTypesArray {
    posts: IPostTypes[];
}

export default IPostTypes;
export type { IPostTypesArray };
