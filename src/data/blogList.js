export const blogList = [
    {
        id: 4,
        title: "Never gonna give you up",
        date: "2025/09/07",
        tags: ["日常"],
        content: `
ガチで名曲です。何回も聞きましょう。
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
        content: `
こんにちは。**React**でブログを作っています。

# Windowsでコンピューターの世界が広がります。0123456789
## Windowsでコンピューターの世界が広がります。0123456789
### Windowsでコンピューターの世界が広がります。0123456789
#### Windowsでコンピューターの世界が広がります。0123456789
##### Windowsでコンピューターの世界が広がります。0123456789
###### Windowsでコンピューターの世界が広がります。0123456789

- 箇条書きを使うよ(宣言)
- うにお願いします(注文)

![画像](https://placehold.jp/700x100.png)

\`\`\`javascript
console.log("コードブロックも表示できます");
\`\`\`

よろしくお願いします。
        `,
        
    },
    
]

export function getArticleById(id) {
    return blogList.find(blog => blog.id == id);
}