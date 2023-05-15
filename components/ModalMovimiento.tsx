import { useState } from 'react';

type ModalProps = {
    onClose: () => void;
    isOpen: boolean;
};

const Modal = ({ onClose, isOpen }: ModalProps) => {
    const [materialId, setMaterialId] = useState("");
    const [fecha, setFecha] = useState("");
    const [tipoMovimiento, setTipoMovimiento] = useState("");
    const [saldo, setSaldo] = useState("");

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Procesar los datos del formulario
        console.log('Material ID:', materialId);
        console.log('Fecha:', fecha);
        console.log('Tipo de movimiento:', tipoMovimiento);
        console.log('Saldo:', saldo);

        // Cierra el modal
        onClose();
    };

    return isOpen ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-lg font-medium mb-4">
                    Agregar un nuevo movimiento
                </h2>
                <form onSubmit={handleFormSubmit}>

                    <div className="mb-4">
                        <label htmlFor="materialId" className="block mb-2">
                            Identificador del material
                        </label>
                        <input
                            type="text"
                            id="materialId"
                            className="w-full border-gray-300 rounded-lg p-2"
                            value={materialId}
                            onChange={(e) => setMaterialId(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="fecha" className="block mb-2">
                            Fecha
                        </label>
                        <input
                            type="date"
                            id="fecha"
                            className="w-full border-gray-300 rounded-lg p-2"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="tipoMovimiento" className="block mb-2">
                            Tipo de movimiento
                        </label>
                        <select
                            id="tipoMovimiento"
                            className="w-full border-gray-300 rounded-lg p-2"
                            value={tipoMovimiento}
                            onChange={(e) => setTipoMovimiento(e.target.value)}
                        >
                            <option value="">Seleccionar</option>
                            <option value="entrada">Entrada</option>
                            <option value="salida">Salida</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="saldo" className="block mb-2">
                            Saldo
                        </label>
                        <input
                            type="number"
                            id="saldo"
                            className="w-full border-gray-300 rounded-lg p-2"
                            value={saldo}
                            onChange={(e) => setSaldo(e.target.value)}
                        />

                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ) : null;
};

export default Modal;