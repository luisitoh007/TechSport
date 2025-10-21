"use client";

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <p className="p-8">Carregando...</p>;
  }
  if (!session) {
    return (
      <div className="p-8">
        <p>Você precisa estar logado para acessar o dashboard.</p>
        <Link href="/login" className="text-accent underline">
          Fazer login
        </Link>
      </div>
    );
  }
  return (
    <main className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Olá, {session.user?.name || session.user?.email}</h1>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-card border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white"
        >
          Sair
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/running"
          className="p-4 bg-card rounded hover:bg-accent hover:text-black transition"
        >
          <h2 className="text-xl font-semibold mb-2">Plano de Corrida 5K</h2>
          <p className="text-sm text-gray-400">Acompanhe seu progresso e sessões semanais.</p>
        </Link>
        <Link
          href="/nutrition"
          className="p-4 bg-card rounded hover:bg-accent hover:text-black transition"
        >
          <h2 className="text-xl font-semibold mb-2">Diário Alimentar</h2>
          <p className="text-sm text-gray-400">Registre refeições, água e calorias de exercícios.</p>
        </Link>
        <Link
          href="/tmb-tdee"
          className="p-4 bg-card rounded hover:bg-accent hover:text-black transition"
        >
          <h2 className="text-xl font-semibold mb-2">TMB & TDEE</h2>
          <p className="text-sm text-gray-400">Calcule suas necessidades energéticas e metas de macros.</p>
        </Link>
        <Link
          href="/videos"
          className="p-4 bg-card rounded hover:bg-accent hover:text-black transition"
        >
          <h2 className="text-xl font-semibold mb-2">Videoaulas</h2>
          <p className="text-sm text-gray-400">Explore exercícios guiados e treinos em casa.</p>
        </Link>
      </div>
    </main>
  );
}