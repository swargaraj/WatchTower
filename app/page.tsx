import Header from "@/layout/header";
import Banner from "@/layout/banner";

export default function Home() {
  return (
    <div className="relative w-full h-full min-h-screen">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Banner />
      <Header />
      <div className=""></div>
    </div>
  );
}
