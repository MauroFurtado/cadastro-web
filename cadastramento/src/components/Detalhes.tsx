// components/Detalhes.tsx
import React from 'react';
import { Atividade } from '../types/atividade';

interface DetalhesProps {
    atividade: Atividade;
    onBack: () => void;
}

const Detalhes: React.FC<DetalhesProps> = ({ atividade, onBack }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Detalhes da Atividade</h1>

            <p> <strong>Nome:</strong> {atividade.nome} </p>
            <p> <strong>Responsável:</strong> {atividade.responsavel} </p>
            <p> <strong>Data:</strong> {atividade.data} </p>
            <p className="mb-4"> <strong>Descrição:</strong> {atividade.descricao} </p>

            <button onClick={onBack} className="text-blue-600">Voltar</button>
        </div>
    );
};

export default Detalhes;
