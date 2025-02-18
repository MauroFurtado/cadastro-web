"use client"; 
import React,{useState} from 'react';
import Listagem from '../components/Listagem';
import Cadastro from '../components/Cadastro';
import Detalhes from '../components/Detalhes';
import { Atividade } from '../types/atividade'; 

type View = 'list' | 'create' | 'detail';

const Home: React.FC = () => {
  const [view, setView] = useState<View>('list');
  const [atividades, setAtividades] = useState<Atividade[]>([]);
  const [selectedAtividade, setSelectedAtividade] = useState<Atividade | null>(null);

  const handleCreate = (atividade: Atividade) => {
    setAtividades([...atividades, atividade]);
    setView('list');
  };

  const handleSelectAtividade = (atividade: Atividade) => {
    setSelectedAtividade(atividade);
    setView('detail');
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {view === 'list' && (
        <Listagem
          atividades={atividades}
          onSelectAtividade={handleSelectAtividade}
          onCreate={() => setView('create')}
        />
      )}
      {view === 'create' && (
        <Cadastro
          onSubmit={handleCreate}
          onCancel={() => setView('list')}
        />
      )}
      {view === 'detail' && selectedAtividade && (
        <Detalhes
          atividade={selectedAtividade}
          onBack={() => setView('list')}
        />
      )}
    </div>
  );
};

export default Home;
