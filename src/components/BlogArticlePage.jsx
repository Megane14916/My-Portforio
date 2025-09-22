import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { FadeInUpOnLoad } from './FadeInUpOnLoad';
import '../static/BlogArticlePage.css'

export function BlogArticlePage() {
  // ルーター設定の path: ':articleId' で指定した名前でパラメータを取得
  const { article } = useLoaderData();
  return (
    <article className='blogArticle'>
      <FadeInUpOnLoad><h1 className='blogArticleTitle'>{article.title}</h1></FadeInUpOnLoad>
      <FadeInUpOnLoad delay={100}><p className='blogArticleDate'>{article.date}</p></FadeInUpOnLoad>
      <div className='tagArea'>
      {article.tags.map((tag)=>(
        <FadeInUpOnLoad delay={200} key={tag}><div className='blogArticlePageTag'>#{tag}</div></FadeInUpOnLoad>
      ))}</div>
      <FadeInUpOnLoad delay={300}><ReactMarkdown>{article.content}</ReactMarkdown></FadeInUpOnLoad>
    </article>
  );
}
