import GreetingList from "../components/GreetingList";

export default function GreetingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">👋 인사 메시지</h1>
      <GreetingList />
    </main>
  );
}
