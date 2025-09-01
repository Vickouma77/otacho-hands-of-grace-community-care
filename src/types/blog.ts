export interface BlogPost {
  id: string;
  slug: string;
  body: string;
  collection: 'blog';
  render: () => Promise<{ Content: any }>;
  data: {
    title: string;
    description: string;
    publishDate: Date;
    image?: string;
    author: string;
    tags: string[];
    featured: boolean;
  };
}
