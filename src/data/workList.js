export const workList = [
    {
        id: 2,
        title: "スプラ新ブキ予想投票所",
        detail: "スプラの新ブキを予想して投票できる",
        img: "/img/sample.png",
        content: "",
        url: "https://splatoon-vote.vercel.app/",
    },
    {
        id: 1,
        title: "ホームページ",
        detail: "シンプルなデザインのホームページ",
        img: "/img/sample3.png",
        content: "yoanzのポートフォリオです。",
        url: "https://my-portforio-cyan.vercel.app/",
    },
]

export function getArticleById(id) {
    return workList.find(blog => blog.id == id);
}