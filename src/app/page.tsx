import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-1 text-6xl font-extrabold" style={{ color: '#8768ed' }}>Yo Chat</h1>
      <p className="mb-10">The coolest chat app on the planet for purple hand gang</p>
      <Button as={Link} href="/chat">
        Start chatting
      </Button>
    </div>
  );
}
