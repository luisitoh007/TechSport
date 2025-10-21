"use client";

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function RunningPage() {
  const { data: session } = useSession();
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Plano de Corrida 5K</h1>
      {!session && (
        <p>
          <Link href="/login" className="text-accent underline">
            Faça login
          </Link>{' '}
          para registrar seu progresso.
        </p>
      )}
      <p className="text-gray-300">
        Aqui será exibido seu plano semanal, com sessões de corrida e caminhada. Após
        cada sessão, você poderá registrar seu nível de esforço percebido (RPE) e
        notas opcionais. A progressão adaptativa ajustará suas próximas semanas
        conforme seu desempenho.
      </p>
      <p className="text-gray-300">
        **Nota:** Esta é uma implementação inicial. Você precisará implementar a
        lógica de temporizador, TTS e integração com GPS conforme descrito no
        prompt.
      </p>
    </main>
  );
}