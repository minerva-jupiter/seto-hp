import Image from "next/image";
import Avatar from "./components/avatar";

export default function Home() {
  return (
    <div style={{marginTop: "20px"}}>
      <h1>自己紹介</h1>
      <br />
      <p>所属 : 島根大学数理・データサイエンス教育研究センター</p>
      <p>職名 : 助教</p>
      <p>生年月 : 1990年12月</p>
      <p>専門分野 : 凸,集合値</p>
      <Avatar />
    </div>
  );
}
