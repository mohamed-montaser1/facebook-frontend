import Navbar from "@/components/Navbar";
import ShortCutsSideBar from "@/components/ShortCutsSideBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main">
        <ShortCutsSideBar />
      </main>
    </>
  );
}
