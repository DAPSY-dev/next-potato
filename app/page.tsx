import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto min-h-dvh max-w-7xl px-4 font-sans">
      <header className="py-4">
        <h1 className="text-2xl">App</h1>
      </header>
      <main className="py-4">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique
          officia dolores quibusdam aut est voluptatum. Perferendis, ipsum?
          Corrupti, at qui porro neque ad ipsum similique. Sint, reprehenderit!
          Autem, deleniti.
        </p>
      </main>
      <footer className="py-4">
        <p>&copy; App</p>
      </footer>
    </div>
  );
}
