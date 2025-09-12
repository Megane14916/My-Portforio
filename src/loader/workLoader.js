import { getArticleById } from '../data/workList';

export function workLoader({ params }) {
  const article = getArticleById(params.worksId);
  
  // 記事が見つからない場合、404ステータスを持つResponseをthrowする
  if (!article) {
    throw new Response('Not Found', { status: 404, statusText: '記事が見つかりません' });
  }

  // 記事が見つかった場合は、そのデータを返す
  return { article };
}