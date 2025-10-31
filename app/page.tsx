import Content from "@/components/Content";
import Navbar from "@/components/Navbar";
import ShortCutsSideBar from "@/components/ShortCutsSideBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main flex justify-between">
        <ShortCutsSideBar />
        <Content />
        <div></div>
      </main>
    </>
  );
}
