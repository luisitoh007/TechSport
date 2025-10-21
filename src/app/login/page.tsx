"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      setError('Credenciais inválidas');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Entrar</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-card border border-gray-700"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-card border border-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-accent text-black rounded hover:bg-accent-light"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}