import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-8">
      <h1 className="text-4xl font-bold">Bem‑vindo ao Fitness SaaS</h1>
      <p className="text-lg text-gray-400 max-w-xl text-center">
        Este aplicativo de saúde e fitness ajuda você a atingir seus objetivos com um plano
        de corrida 5K, diário alimentar, cálculo de TMB/TDEE, sugestões de vídeo‑aulas e
        muito mais.
      </p>
      <div className="flex space-x-4">
        <Link
          href="/login"
          className="px-4 py-2 bg-accent rounded hover:bg-accent-light text-black"
        >
          Entrar / Criar Conta
        </Link>
        <Link
          href="/dashboard"
          className="px-4 py-2 border border-accent rounded text-accent hover:bg-card"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}