"use client";
import React, { useState, useEffect } from 'react';
import { Atividade } from '../types/atividade';

interface CadastroProps {
    onSubmit: (atividade: Atividade) => void;
    onCancel: () => void;
    atividade?: Atividade;
}

const Cadastro: React.FC<CadastroProps> = ({ onSubmit, onCancel, atividade }) => {
    const [nome, setNome] = useState(atividade?.nome || '');
    const [responsavel, setResponsavel] = useState(atividade?.responsavel || '');
    const [data, setData] = useState(atividade?.data || '');
    const [descricao, setDescricao] = useState(atividade?.descricao || '');
    const [error, setError] = useState('');

    useEffect(() => {
        if (atividade) {
            setNome(atividade.nome);
            setResponsavel(atividade.responsavel);
            setData(atividade.data);
            setDescricao(atividade.descricao);
        }
    }, [atividade]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!nome ) {
            setError('Todos os campos são obrigatórios.');
            return;
        }else if( !responsavel){
            setError('O campo responsável é obrigatório.');
            return;
        }else if( !data){
            setError('O campo data é obrigatório.');
            return;
        }else if( !descricao){
            setError('O campo descrição é obrigatório.');
            return;
        }
        const hoje = new Date().toISOString().split('T')[0];
        if (data < hoje) {
            setError('A data não pode ser anterior à data atual.');
            return;
        }
        const novaAtividade: Atividade = {
            id: atividade ? atividade.id : Date.now(),
            nome,
            responsavel,
            data,
            descricao,
        };
        onSubmit(novaAtividade);
    };

    const hoje = new Date().toISOString().split('T')[0];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{atividade ? 'Editar Atividade' : 'Cadastro de Atividade'}</h1>
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
                        min={hoje}
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
                        {atividade ? 'Salvar' : 'Cadastrar'}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="text-blue-600 self-center"
                    >
                        Voltar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;
