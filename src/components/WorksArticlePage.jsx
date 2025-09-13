import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { FadeInUpOnLoad } from './FadeInUpOnLoad';
import '../static/WorksArticlePage.css'

export function WorksArticlePage() {
  const { article } = useLoaderData();
  return (
    <article className='worksArticlePage'>
      <FadeInUpOnLoad><img src={article.img} className='worksArticlePageImg'></img></FadeInUpOnLoad>
      <FadeInUpOnLoad delay={100}><h1 className='worksArticlePageTitle'>{article.title}</h1></FadeInUpOnLoad>
      <FadeInUpOnLoad delay={100}><a href={article.url} className='url'><p className='url'>Visit Site</p></a></FadeInUpOnLoad>
      <FadeInUpOnLoad delay={200}><ReactMarkdown>{article.content}</ReactMarkdown></FadeInUpOnLoad>
    </article>
  );
}