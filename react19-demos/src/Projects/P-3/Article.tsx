import ArticleCard from "./ArticleCard";
import { useBlogs } from "./Shared/BlogContext";
import { Blog } from "./Typescript";

interface ArticlesListProps {
  onEdit: (blog: Blog) => void; // Corrected prop type
}

const Article: React.FC<ArticlesListProps> = ({ onEdit }) => {
  const { blogs, deleteBlog } = useBlogs();

  return (
    <div className="ml-[5rem]">
      {blogs.map((blog) => (
        <ArticleCard
          key={blog.id}
          article={blog}
          onDelete={() => deleteBlog(blog.id)}
          onEdit={() => onEdit(blog)}
        />
      ))}
    </div>
  );
};

export default Article;
