"use client";

import { useSession } from 'next-auth/react';

export default function NutritionPage() {
  const { data: session } = useSession();
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Nutrição & Diário Alimentar</h1>
      {!session && (
        <p className="text-gray-300">
          Você precisa estar logado para registrar suas refeições.
        </p>
      )}
      <p className="text-gray-300">
        Este módulo permitirá pesquisar em uma base de dados de alimentos
        (TACO, FDC, OFF), registrar refeições, água e calorias de exercícios, bem
        como visualizar somatórios em tempo real. Na presente versão, a busca
        full‑text e cálculos de macros ainda não foram implementados.
      </p>
    </main>
  );
}