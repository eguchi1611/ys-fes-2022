import React, { useEffect } from "react";
import { ref, set } from "firebase/database";
import { database } from "firebaseconfig";
import Cover from "components/Cover";

function Index() {
  useEffect(() => {
    // const data = [
    //   {
    //     name: "鉄道模型部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "皆さんこんにちは！　鉄道模型部です！　私たちはジオラマの紹介動画と前面展望の動画を用意しました！　前面展望は3路線ありますのでそれぞれの景色を味わって下さい！",
    //   },
    //   {
    //     name: "生物部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "生物部では飼育している生き物の紹介や深海魚、鶏頭の解剖など様々なコンテンツをサイトで配信しています。ぜひ、見てください！",
    //   },
    //   {
    //     name: "化学部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "こんにちは化学部です 。今回私達は化学実験ショーを行います！　化学に興味を持つきっかけになるような動画をたくさん準備しているのでぜひ楽しんでいってください！",
    //   },
    //   {
    //     name: "漫画部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "漫画部はアットホームな部活です。普段はみんなでまったり絵を書いています。今回文化祭では私達がそれぞれ描いた絵をまとめて動画にしました。ぜひご覧ください！",
    //   },
    //   {
    //     name: "華道部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "公園をテーマに昇降口を装飾しました。噴水をイメージした三年生の合作や彩り豊かな個人作品を展示しています。スタンプラリーの参加型の作品もあるのでぜひ来てください！",
    //   },
    //   {
    //     name: "吹奏楽部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "このご時世で皆さんの拍手を頂く機会が減ってしまいましたが、久々に演奏を届けることができ嬉しく思います！今回は、定期演奏会で演奏した中から4曲をお送りします！",
    //   },
    //   {
    //     name: "合唱部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "こんにちは！ 合唱部です。私たちは、皆さんもよく知っているJpopやディズニーの曲を歌いました！ 是非お聴きください。",
    //   },
    //   {
    //     name: "報道部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "こんにちは! 報道部です! 私達は今回リアル型謎解き×パズルゲームを行います。謎の館からの薔薇の香り漂う挑戦状、貴方は解き明かすことができますか?",
    //   },
    //   {
    //     name: "文芸部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "目が覚めると、そこは密室だった……。推理小説の主人公になりきり、仲間を全員救い出して部屋から脱出しよう。目指せ名探偵！",
    //   },
    //   {
    //     name: "演劇部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "これらの作品は、昨年度の春大会、秋大会で公演した作品です。どちらも衣装や小道具など、細部までこだわり抜いた自信作です。ぜひご覧ください！",
    //   },
    //   {
    //     name: "囲碁将棋部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "将棋には、大駒と呼ばれる２種類の強力な駒がいます。縦横を駆け回る飛車、斜方を駆け回る角。果たしてどちらの方が強いのか？　検証します！　将棋部あるあるもやります！",
    //   },
    //   {
    //     name: "ギター部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "こんにちは。ギター部です。私達ギター部の最大の強みは、部員の多さからなる、多様な演奏です!　三年生はこれが集大成。ぜひ私達の”青春”を聴いてください!",
    //   },
    //   {
    //     name: "数学部",
    //     location: "highschool;club",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "こんにちは、数学部です。文化祭では錯視アートという見る角度で違った景色が見えるようなことをやっています。動画で公開しているので、ぜひ見てください。",
    //   },
    //   {
    //     name: "K1組",
    //     location: "highschool;3",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "K1組です！",
    //   },
    //   {
    //     name: "K2組",
    //     location: "highschool;3",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "K2組です！",
    //   },
    //   {
    //     name: "K3組",
    //     location: "highschool;3",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "K3組です！",
    //   },
    //   {
    //     name: "K4組",
    //     location: "highschool;3",
    //     banner:
    //       "https://firebasestorage.googleapis.com/v0/b/ys-fes-2022.appspot.com/o/banners%2Fsample.jpg?alt=media&token=b544a7e9-429f-4aa7-8105-b994acde7790",
    //     desc: "K4組です！",
    //   },
    // ];
    // set(ref(database, "pages"), data);
    // const metadata = {
    //   "highschool;club": {
    //     name: "高校クラブ",
    //   },
    //   "highschool;3": {
    //     name: "高校３年生",
    //   },
    //   "highschool;2": {
    //     name: "高校２年生",
    //   },
    //   "highschool;1": {
    //     name: "高校１年生",
    //   },
    //   "jhighschool;club": {
    //     name: "中学クラブ",
    //   },
    //   "jhighschool;3": {
    //     name: "中学３年生",
    //   },
    //   "jhighschool;2": {
    //     name: "中学２年生",
    //   },
    //   "jhighschool;1": {
    //     name: "中学１年生",
    //   },
    // };
    // set(ref(database, "metadata"), metadata);
  }, []);

  return (
    <main>
      <Cover />
    </main>
  );
}

export default Index;
