export const workList = [
    {
        id: 3,
        title: "スプラ新ブキ予想投票所",
        detail: "スプラの新ブキを予想して投票できる",
        img: "/img/sample.png",
        tags: ["お知らせ", "技術"],
        content: "",
    },
    {
        id: 2,
        title: "ホームページ",
        detail: "シンプルなデザインのホームページ",
        img: "/img/sample3.png",
        tags: ["お知らせ", "技術"],
        content: "",
    },
    {
        id: 1,
        title: "無職",
        detail: "サイト",
        img: "",
        tags: ["お知らせ", "技術"],
        content: "",
    },
]

export function getArticleById(id) {
    return workList.find(blog => blog.id == id);
}