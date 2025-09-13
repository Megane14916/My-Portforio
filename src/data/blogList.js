export const blogList = [
    {
        id: 4,
        title: "Never gonna give you up",
        date: "2025/09/07",
        tags: ["日常"],
        content: `
# これが最初のブログ投稿です！

こんにちは。**React**でブログを作っています。

- 箇条書きもできます
- こんな感じです

\`\`\`javascript
console.log("コードブロックも表示できます");
\`\`\`

よろしくお願いします。
  `,
        
    },
    {
        id: 3,
        title: "ブログを作ったよ",
        date: "2025/09/06",
        tags: ["お知らせ", "技術"],
        content: "作ったよ",
        
    },
    {
        id: 2,
        title: "ポートフォリオを作ったよ",
        date: "2025/09/06",
        tags: ["お知らせ", "技術"],
        content: "作ったよ",
        
    },
    {
        id: 1,
        title: "ここはyonazのブログです",
        date: "2025/09/06",
        tags: ["お知らせ"],
        content: "こんにちは。",
        
    },
    
]

export function getArticleById(id) {
    return blogList.find(blog => blog.id == id);
}