// components/Detalhes.tsx
import React from 'react';
import { Atividade } from '../types/atividade';

interface DetalhesProps {
    atividade: Atividade;
    onBack: () => void;
    onEdit: (atividade: Atividade) => void;
    onDelete: (atividade: Atividade) => void;
}

const Detalhes: React.FC<DetalhesProps> = ({ atividade, onBack, onEdit, onDelete }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Detalhes da Atividade</h1>
            <p><strong>Nome:</strong> {atividade.nome}</p>
            <p><strong>Responsável:</strong> {atividade.responsavel}</p>
            <p><strong>Data:</strong> {atividade.data}</p>
            <p><strong>Descrição:</strong> {atividade.descricao}</p>
            <div className="mt-4 flex gap-4">
                <button onClick={() => onEdit(atividade)} className="bg-yellow-500 text-white py-1 px-2 rounded">
                    Editar
                </button>
                <button onClick={() => onDelete(atividade)} className="bg-red-500 text-white py-1 px-2 rounded">
                    Eliminar
                </button>
                <button onClick={onBack} className="bg-blue-500 text-white py-1 px-2 rounded">
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default Detalhes;
