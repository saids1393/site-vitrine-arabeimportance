import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'app/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateModified?: string;
  keywords: string;
  content: string;
  author: string;
  image?: string;
  wordCount: number;
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx') || file.endsWith('.md'));
  
  return files
    .map(file => {
      const slug = file.replace(/\.(mdx|md)$/, '');
      const filePath = path.join(BLOG_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data, content: text } = matter(content);
      const wordCount = text.split(/\s+/).length;
      const htmlContent = marked.parse(text) as string;

      return {
        slug,
        title: data.title || 'Sans titre',
        excerpt: data.excerpt || '',
        date: data.date || new Date().toISOString(),
        dateModified: data.dateModified,
        keywords: data.keywords || '',
        author: data.author || 'Soidroudine',
        image: data.image,
        content: htmlContent,
        wordCount,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) {
    return null;
  }

  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  
  let filePath = null;
  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  } else {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: text } = matter(content);
  const wordCount = text.split(/\s+/).length;
  const htmlContent = marked.parse(text) as string;

  return {
    slug,
    title: data.title || 'Sans titre',
    excerpt: data.excerpt || '',
    date: data.date || new Date().toISOString(),
    dateModified: data.dateModified,
    keywords: data.keywords || '',
    author: data.author || 'Arabe importance',
    image: data.image,
    content: htmlContent,
    wordCount,
  };
}