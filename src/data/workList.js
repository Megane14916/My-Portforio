export const workList = [
    {
        id: 2,
        title: "スプラ新ブキ予想投票所",
        detail: "スプラの新ブキを予想して投票できる",
        img: "/img/sample.png",
        content: "スプラトゥーンの新ブキを予想して投票できるサイト。バックエンドにはFlaskを使用。データベースはNeonを利用。フロントエンドフレームワークを使用しておらず、絞り込み機能を使うと絞り込むたびにサイト全体がリロードされるクソ仕様。",
        url: "https://splatoon-vote.vercel.app/",
    },
    {
        id: 1,
        title: "ポートフォリオ",
        detail: "シンプルなデザインのポートフォリオ",
        img: "/img/sample3.png",
        content: "yoanzのポートフォリオです。フロントエンドフレームワークにはReactを使用。もっとデザインに凝りたかったが、キリがないため断念。なお、現代ではとても珍しいレスポンシブ非対応である。",
        url: "https://my-portforio-cyan.vercel.app/",
    },
]

export function getArticleById(id) {
    return workList.find(blog => blog.id == id);
}