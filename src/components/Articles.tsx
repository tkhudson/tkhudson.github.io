import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';

interface Article {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
  category: string;
}

interface ArticlesProps {
  selectedArticle?: string;
  onArticleSelect?: (slug: string) => void;
}

const Articles = ({ selectedArticle, onArticleSelect }: ArticlesProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        // Get all markdown files from posts directory
        const postFiles = [
          '2023-11-08-Hello-World.markdown',
          '2024-02-09-Flask-web-app-devops.markdown',
          '2024-02-09-new-project.markdown',
          '2024-02-13-Deploying-linux-vm-with-terraform.markdown',
          '2024-02-16-Provision-linux-server-for-flask-webapp.markdown',
          '2024-02-22-Steps-for-stag-and-prod copy.markdown',
          '2024-04-05-flask-project-rock-paper-scissors.markdown',
          '2024-04-05-game-dev-studio.markdown',
          '2024-08-21-deploying-secure-message-app.markdown',
          '2024-09-03-dadjoke-provider.markdown'
        ];

        const loadedArticles: Article[] = [];

        for (const file of postFiles) {
          try {
            const response = await fetch(`/src/posts/${file}`);
            const content = await response.text();

            // Parse frontmatter
            const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
            if (frontmatterMatch) {
              const frontmatter = frontmatterMatch[1];
              const markdownContent = frontmatterMatch[2];

              // Extract metadata
              const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
              const dateMatch = frontmatter.match(/date:\s*(\d{4}-\d{2}-\d{2})/);
              const descriptionMatch = frontmatter.match(/description:\s*"([^"]+)"/);
              const tagsMatch = frontmatter.match(/tag:\s*\n((?:\s*-\s*[^\n]+\n?)*)/);
              const categoryMatch = frontmatter.match(/category:\s*([^\n]+)/);

              const title = titleMatch ? titleMatch[1] : file.replace('.markdown', '').replace(/-/g, ' ');
              const date = dateMatch ? dateMatch[1] : '2024-01-01';
              const description = descriptionMatch ? descriptionMatch[1] : '';
              const tags = tagsMatch ? tagsMatch[1].split('\n').map(tag => tag.replace(/^\s*-\s*/, '').trim()).filter(tag => tag) : [];
              const category = categoryMatch ? categoryMatch[1].trim() : 'blog';

              loadedArticles.push({
                slug: file.replace('.markdown', ''),
                title,
                date,
                description,
                content: markdownContent,
                tags,
                category
              });
            }
          } catch (error) {
            console.warn(`Failed to load article: ${file}`, error);
          }
        }

        // Sort by date (newest first)
        loadedArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setArticles(loadedArticles);
      } catch (error) {
        console.error('Failed to load articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-tech-accent">Loading articles...</div>
      </div>
    );
  }

  if (selectedArticle) {
    const article = articles.find(a => a.slug === selectedArticle);
    if (!article) {
      return (
        <div className="text-center py-12">
          <div className="text-gray-400">Article not found</div>
          <button
            onClick={() => onArticleSelect?.('')}
            className="mt-4 text-tech-accent hover:underline"
          >
            ← Back to articles
          </button>
        </div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <button
          onClick={() => onArticleSelect?.('')}
          className="mb-6 text-tech-accent hover:underline flex items-center gap-2"
        >
          ← Back to articles
        </button>

        <article className="bg-surface p-8 rounded-lg border border-tech-accent/30">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-tech-accent mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span>{new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <span className="text-tech-accent">•</span>
              <span className="capitalize">{article.category}</span>
              {article.tags.length > 0 && (
                <>
                  <span className="text-tech-accent">•</span>
                  <div className="flex gap-2">
                    {article.tags.map(tag => (
                      <span key={tag} className="bg-tech-accent/20 text-tech-accent px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          <div className="prose prose-invert prose-tech max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: (props) => <h1 className="text-2xl font-bold text-tech-accent mb-4" {...props} />,
                h2: (props) => <h2 className="text-xl font-bold text-tech-accent mb-3" {...props} />,
                h3: (props) => <h3 className="text-lg font-bold text-tech-accent mb-2" {...props} />,
                p: (props) => <p className="text-gray-300 mb-4 leading-relaxed" {...props} />,
                ul: (props) => <ul className="text-gray-300 mb-4 ml-6 list-disc" {...props} />,
                ol: (props) => <ol className="text-gray-300 mb-4 ml-6 list-decimal" {...props} />,
                li: (props) => <li className="mb-2" {...props} />,
                code: (props) => <code className="bg-black px-2 py-1 rounded text-tech-accent font-mono text-sm" {...props} />,
                pre: (props) => <pre className="bg-black p-4 rounded mb-4 overflow-x-auto" {...props} />,
                blockquote: (props) => <blockquote className="border-l-4 border-tech-accent pl-4 italic text-gray-400 mb-4" {...props} />,
                a: (props) => <a className="text-tech-accent hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                iframe: (props) => (
                  <div className="my-6">
                    <iframe
                      className="w-full max-w-2xl mx-auto rounded"
                      height="315"
                      {...props}
                    />
                  </div>
                )
              } as any}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </article>
      </motion.div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-surface p-6 rounded-lg border border-tech-accent/30 hover:border-tech-accent transition-colors cursor-pointer group"
            onClick={() => onArticleSelect?.(article.slug)}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-tech-accent mb-2 group-hover:text-white transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                <span>{new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}</span>
                <span className="text-tech-accent">•</span>
                <span className="capitalize">{article.category}</span>
              </div>
              {article.description && (
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
              )}
            </div>

            {article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="bg-tech-accent/20 text-tech-accent px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
                {article.tags.length > 3 && (
                  <span className="text-gray-400 text-xs">+{article.tags.length - 3} more</span>
                )}
              </div>
            )}
          </motion.article>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400">No articles found</div>
        </div>
      )}
    </div>
  );
};

export default Articles;
