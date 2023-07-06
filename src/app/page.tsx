import { Header } from "@/components/Header";
import { Post } from "@/components/Post";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="max-w-6xl my-8 mx-auto grid grid-cols-content gap-5 items-start">
        <Sidebar />

        <main>
          <Post author="Rhuan Bello" content="Lorem Ipsum" />
          <Post author="Diego Fernandes" content="Lorem Ipsum" />
        </main>
      </div>
    </div>
  );
}
