import { useState, useEffect } from 'react';
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

interface ServiamArticlesProps {
  selectedArticle?: string;
  onArticleSelect?: (slug: string) => void;
}

const ServiamArticles = ({ selectedArticle, onArticleSelect }: ServiamArticlesProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        // Get all Serviam articles from posts directory
        const postFiles = [
          'serviam-2024-01-01-iron-brotherhood.markdown',
          'serviam-2024-01-15-spiritual-warfare.markdown',
          'serviam-2024-02-01-biblical-leadership.markdown'
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
              const category = categoryMatch ? categoryMatch[1].trim() : 'reflections';

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
        <div className="text-accent">Loading reflections...</div>
      </div>
    );
  }

  if (selectedArticle) {
    const article = articles.find(a => a.slug === selectedArticle);
    if (!article) {
      return (
        <div className="text-center py-12">
          <div className="text-parchment/70">Reflection not found</div>
          <button
            onClick={() => onArticleSelect?.('')}
            className="mt-4 text-accent hover:underline"
          >
            ← Back to reflections
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
          className="mb-6 text-accent hover:underline flex items-center gap-2"
        >
          ← Back to reflections
        </button>

        <article className="bg-gradient-to-br from-stone-800 to-stone-900 p-8 rounded-lg border-2 border-accent/30">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-ministry text-accent mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-parchment/70">
              <span>{new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <span className="text-accent">•</span>
              <span className="capitalize">{article.category}</span>
              {article.tags.length > 0 && (
                <>
                  <span className="text-accent">•</span>
                  <div className="flex gap-2">
                    {article.tags.map(tag => (
                      <span key={tag} className="bg-accent/20 text-accent px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          <div className="prose prose-invert prose-serviam max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children, ...props }) => <h1 className="text-2xl font-ministry text-accent mb-4" {...props}>{children}</h1>,
                h2: ({ children, ...props }) => <h2 className="text-xl font-ministry text-accent mb-3" {...props}>{children}</h2>,
                h3: ({ children, ...props }) => <h3 className="text-lg font-ministry text-accent mb-2" {...props}>{children}</h3>,
                p: ({ children, ...props }) => <p className="text-parchment mb-4 leading-relaxed" {...props}>{children}</p>,
                ul: ({ children, ...props }) => <ul className="text-parchment mb-4 ml-6 list-disc" {...props}>{children}</ul>,
                ol: ({ children, ...props }) => <ol className="text-parchment mb-4 ml-6 list-decimal" {...props}>{children}</ol>,
                li: ({ children, ...props }) => <li className="mb-2" {...props}>{children}</li>,
                code: ({ children, ...props }) => <code className="bg-stone-900 px-2 py-1 rounded text-accent font-mono text-sm" {...props}>{children}</code>,
                pre: ({ children, ...props }) => <pre className="bg-stone-900 p-4 rounded mb-4 overflow-x-auto" {...props}>{children}</pre>,
                blockquote: ({ children, ...props }) => <blockquote className="border-l-4 border-accent pl-4 italic text-parchment/80 mb-4" {...props}>{children}</blockquote>,
                a: ({ children, href, ...props }) => <a className="text-accent hover:underline" target="_blank" rel="noopener noreferrer" href={href} {...props}>{children}</a>,
                iframe: ({ src, title, ...props }) => (
                  <div className="my-6">
                    <iframe
                      className="w-full max-w-2xl mx-auto rounded"
                      height="315"
                      src={src}
                      title={title}
                      {...props}
                    />
                  </div>
                )
              }}
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
            className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-lg border-2 border-accent/30 hover:border-accent transition-all duration-300 cursor-pointer group"
            onClick={() => onArticleSelect?.(article.slug)}
          >
            <div className="mb-4">
              <h3 className="text-xl font-ministry text-accent mb-2 group-hover:text-white transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-parchment/70 mb-3">
                <span>{new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}</span>
                <span className="text-accent">•</span>
                <span className="capitalize">{article.category}</span>
              </div>
              {article.description && (
                <p className="text-parchment text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
              )}
            </div>

            {article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="bg-accent/20 text-accent px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
                {article.tags.length > 3 && (
                  <span className="text-parchment/50 text-xs">+{article.tags.length - 3} more</span>
                )}
              </div>
            )}
          </motion.article>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-12">
          <div className="text-parchment/70">No reflections found</div>
        </div>
      )}
    </div>
  );
};

export default ServiamArticles;
