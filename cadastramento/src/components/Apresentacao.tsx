"use client";
import React from "react";

interface ApresentacaoProps {
  onStart: () => void;
}

const Apresentacao: React.FC<ApresentacaoProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <h1 className="text-3xl font-bold">Bem-vindo ao Sistema de Atividades Acadêmicas</h1>
      <img src="/brasao.svg" alt="Brasão ufc" className="w-72 h-72" />
      <p className="text-lg text-gray-700 max-w-lg">
        Aqui você pode cadastrar, visualizar e acompanhar atividades acadêmicas do campus da UFC Sobral.
      </p>
      <button
        onClick={onStart}
        className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
      >
        Acessar o Sistema
      </button>
    </div>
  );
};

export default Apresentacao;

