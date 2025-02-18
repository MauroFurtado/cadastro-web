"use client"; 
import React, { useState } from 'react';
import { Atividade } from '../types/atividade';
interface CadastroProps {
    onSubmit: (atividade: Atividade) => void;
    onCancel: () => void;
}

const Cadastro: React.FC<CadastroProps> = ({ onSubmit, onCancel }) => {
    const [nome, setNome] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!nome || !responsavel || !data || !descricao) {
        setError('Todos os campos são obrigatórios.');
        return;
    }
    const novaAtividade: Atividade = {
        id: Date.now(),
        nome,
        responsavel,
        data,
        descricao,
    };
    onSubmit(novaAtividade);
    };

    return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Cadastro de Atividade</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block">Nome da Atividade:</label>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
        </div>
        <div>
            <label className="block">Responsável:</label>
            <input
                type="text"
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
        </div>
        <div>
            <label className="block">Data:</label>
            <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
            />
        </div>
        <div>
            <label className="block">Descrição:</label>
            <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <div className="flex gap-4">
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                Cadastrar
            </button>
            <button
                type="button"
                onClick={onCancel}
                className="text-blue-600 self-center"
            >Voltar
            </button>
        </div>
        </form>
    </div>
);
};

export default Cadastro;
