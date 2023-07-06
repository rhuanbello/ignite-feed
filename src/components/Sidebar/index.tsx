import { PencilIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <aside className="bg-gray-800 overflow-hidden rounded-lg">
      <Image
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500q=50"
        width={500}
        height={500}
        alt="Cover"
        className="w-full h-20 object-cover"
      />

      <div className="flex flex-col items-center mt-[calc(0px-1.5rem-6px)]">
        <Image
          src="https://github.com/rhuanbello.png"
          width={150}
          height={150}
          className="w-12 h-12 rounded-lg border-4 border-solid border-gray-800 outline-2 outline-green-500 outline box-"
          alt="Avatar"
        />

        <strong className="mt-4 text-gray-100 leading-relaxed">
          Rhuan Bello
        </strong>
        <span className="text-sm color-gray-400 leading-relaxed">
          Front-end Developer
        </span>
      </div>

      <footer className="border-t border-gray-600 mt-6 pt-6 pb-8 px-8">
        <a
          href="#"
          className="bg-transparent text-green-500 border border-solid border-green-500 rounded-lg h-12 py-0 px-6 font-bold flex items-center justify-center gap-2 hover:bg-green-500 hover:text-white transition-colors"
        >
          <PencilIcon className="w-4 h-4" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
