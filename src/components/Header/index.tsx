import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex justify-center bg-gray-800 py-5 px-0 items-center gap-4">
      <Image src="/logo.svg" width={32} height={32} alt="Ignite" />
      <h1 className="text-gray-100 font-bold text-xl">Ignite Feed</h1>
    </div>
  );
};
