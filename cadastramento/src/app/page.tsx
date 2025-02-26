"use client";
import React, { useState } from "react";
import Apresentacao from "../components/Apresentacao";
import Listagem from "../components/Listagem";
import Cadastro from "../components/Cadastro";
import Detalhes from "../components/Detalhes";
import Modal from "../components/Modal";

interface Atividade {
  id: number;
  nome: string;
  responsavel: string;
  data: string;
  descricao: string;
}

type View = "inicio" | "list" | "create" | "edit" | "detail";

const Home: React.FC = () => {
  const [view, setView] = useState<View>("inicio");
  const [atividades, setAtividades] = useState<Atividade[]>([]);
  const [selectedAtividade, setSelectedAtividade] = useState<Atividade | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = (atividade: Atividade) => {
    if (selectedAtividade) {

      setAtividades(atividades.map(a => (a.id === atividade.id ? atividade : a)));
    } else {

      setAtividades([...atividades, atividade]);
    }
    setView("list");
    setIsModalOpen(false);
  };

  const handleSelectAtividade = (atividade: Atividade) => {
    setSelectedAtividade(atividade);
    setView("detail");
    setIsModalOpen(true);
  };

  const handleEditAtividade = (atividade: Atividade) => {
    setSelectedAtividade(atividade);
    setView("edit");
    setIsModalOpen(true);
  };

  const handleDeleteAtividade = (atividade: Atividade) => {
    setAtividades(atividades.filter(a => a.id !== atividade.id));
    setIsModalOpen(false);
  };

  const handleCreateNew = () => {
    setSelectedAtividade(null);
    setView("create");
    setIsModalOpen(true);
  };

  const handleBackToList = () => {
    setView("list");
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
      </div>
      {view === "inicio" && <Apresentacao onStart={() => setView("list")} />}
      {view === "list" && (
        <Listagem
          atividades={atividades}
          onSelectAtividade={handleSelectAtividade}
          onCreate={handleCreateNew}
          onEditAtividade={handleEditAtividade}
          onDeleteAtividade={handleDeleteAtividade}
        />
      )}
      <Modal isOpen={isModalOpen} onClose={handleBackToList}>
        {view === "create" && (
          <Cadastro
            onSubmit={handleCreate}
            onCancel={handleBackToList}
          />
        )}
        {view === "edit" && selectedAtividade && (
          <Cadastro
            onSubmit={handleCreate}
            onCancel={handleBackToList}
            atividade={selectedAtividade}
          />
        )}
        {view === "detail" && selectedAtividade && (
          <Detalhes
            atividade={selectedAtividade}
            onBack={handleBackToList}
            onEdit={handleEditAtividade}
            onDelete={handleDeleteAtividade}
          />
        )}
      </Modal>
    </div>
  );
};

export default Home;
