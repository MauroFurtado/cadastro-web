import React from "react";
import { Atividade } from "../types/atividade";

interface ListagemProps {
    atividades: Atividade[];
    onSelectAtividade: (atividade: Atividade) => void;
    onCreate: () => void;
    onEditAtividade: (atividade: Atividade) => void;
    onDeleteAtividade: (atividade: Atividade) => void;
}

const Listagem: React.FC<ListagemProps> = ({
    atividades,
    onSelectAtividade,
    onCreate,
    onEditAtividade,
    onDeleteAtividade,
}) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const filteredAtividades = atividades.filter((atividade) =>
        atividade.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Atividades</h1>
            <input
                type="text"
                placeholder="Buscar atividade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />
            {filteredAtividades.length === 0 ? (
                <p>Nenhuma atividade cadastrada.</p>
            ) : (
                <ul className="space-y-2">
                    {filteredAtividades.map((atividade) => (
                        <li
                            key={atividade.id}
                            className="border p-3 rounded cursor-pointer hover:bg-gray-100 flex justify-between items-center"
                        >
                            <p className="text-blue-600">{atividade.nome}</p>
                            <div className="space-x-2">
                                <button
                                    onClick={() => onSelectAtividade(atividade)}
                                    className="bg-blue-500 text-white py-1 px-2 rounded"
                                >
                                    Detalhes
                                </button>
                                <button
                                    onClick={() => onEditAtividade(atividade)}
                                    className="bg-yellow-500 text-white py-1 px-2 rounded"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => onDeleteAtividade(atividade)}
                                    className="bg-red-500 text-white py-1 px-2 rounded"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <button
                onClick={onCreate}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
            >
                Cadastrar nova atividade
            </button>
        </div>
    );
};

export default Listagem;
