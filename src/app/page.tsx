import Client from "./client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-gradient-to-b from-primary-400 to-primary-100">
      <h2 className="font-primary text-6xl text-primary-700">Price Check</h2>
      <Client />
    </main>
  );
}
