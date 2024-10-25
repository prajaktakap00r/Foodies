import Link from "next/link";

export default function Home() {
  return (
    <main className="font-playfair">
      <h1>Time to get started!</h1>
      <Link href="/meals">Meals Component</Link>
      <br></br>
      <Link href="/meals/share">Meals Share Component</Link>
      <br></br>
      <Link href="/community"> Community Component</Link>
    </main>
  );
}
