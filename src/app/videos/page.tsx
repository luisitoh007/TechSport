"use client";

export default function VideosPage() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Videoaulas</h1>
      <p className="text-gray-300">
        Esta seção exibirá uma lista de videoaulas recomendadas a partir do
        YouTube, categorizadas por grupo muscular, objetivo, duração e nível. Na
        implementação atual, as videoaulas são estáticas; você deverá integrar a
        API do YouTube e criar filtros conforme especificado no prompt.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-card rounded">
          <h3 className="font-semibold mb-1">Alongamento</h3>
          <p className="text-sm text-gray-400">Vídeos para preparar seu corpo antes do treino.</p>
        </div>
        <div className="p-4 bg-card rounded">
          <h3 className="font-semibold mb-1">Treino de Força</h3>
          <p className="text-sm text-gray-400">Treinos com peso corporal para todo o corpo.</p>
        </div>
        <div className="p-4 bg-card rounded">
          <h3 className="font-semibold mb-1">HIIT</h3>
          <p className="text-sm text-gray-400">Treinos intervalados de alta intensidade.</p>
        </div>
      </div>
    </main>
  );
}