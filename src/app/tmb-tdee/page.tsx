"use client";

import { useState } from 'react';

// Fórmulas TMB/TDEE simplificadas
function calculateTMB(sex: string, weight: number, height: number, age: number): number {
  // Mifflin-St Jeor
  if (sex === 'm') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

export default function TmbTdeePage() {
  const [sex, setSex] = useState('m');
  const [weight, setWeight] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [age, setAge] = useState<number | ''>('');
  const [tmb, setTmb] = useState<number | null>(null);
  const [tdee, setTdee] = useState<number | null>(null);
  const [activity, setActivity] = useState(1.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height && age) {
      const base = calculateTMB(sex, Number(weight), Number(height), Number(age));
      setTmb(base);
      setTdee(base * activity);
    }
  };

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Cálculo de TMB e TDEE</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              name="sex"
              value="m"
              checked={sex === 'm'}
              onChange={() => setSex('m')}
            />
            <span className="ml-2">Masculino</span>
          </label>
          <label>
            <input
              type="radio"
              name="sex"
              value="f"
              checked={sex === 'f'}
              onChange={() => setSex('f')}
            />
            <span className="ml-2">Feminino</span>
          </label>
        </div>
        <div>
          <label className="block mb-1">Peso (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value === '' ? '' : Number(e.target.value))}
            className="w-full p-2 rounded bg-card border border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Altura (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value === '' ? '' : Number(e.target.value))}
            className="w-full p-2 rounded bg-card border border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Idade (anos)</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
            className="w-full p-2 rounded bg-card border border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Nível de atividade</label>
          <select
            value={activity}
            onChange={(e) => setActivity(Number(e.target.value))}
            className="w-full p-2 rounded bg-card border border-gray-700"
          >
            <option value={1.2}>Sedentário (pouco ou nenhum exercício)</option>
            <option value={1.375}>Levemente ativo (1-3 dias/semana)</option>
            <option value={1.55}>Moderadamente ativo (3-5 dias/semana)</option>
            <option value={1.725}>Muito ativo (6-7 dias/semana)</option>
            <option value={1.9}>Extremamente ativo (atividade física intensa)</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-accent text-black rounded hover:bg-accent-light"
        >
          Calcular
        </button>
      </form>
      {tmb && tdee && (
        <div className="mt-4 space-y-2">
          <p>
            <strong>TMB:</strong> {tmb.toFixed(0)} kcal/dia
          </p>
          <p>
            <strong>TDEE:</strong> {tdee.toFixed(0)} kcal/dia
          </p>
        </div>
      )}
    </main>
  );
}