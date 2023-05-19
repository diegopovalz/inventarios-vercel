import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ModalMovimiento from './ModalMovimiento';
import TablaInventario from './TablaInventario';

const Inventario = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const [materialSeleccionado, setMaterialSeleccionado] = useState(null);

  const materialesPrueba = [
    { id: 1, nombre: 'Material 1' },
    { id: 2, nombre: 'Material 2' },
    { id: 3, nombre: 'Material 3' },
  ];

  const [materiales, setMateriales] = useState(materialesPrueba);

  return (
    <div className='h-[1024px] w-[1440px] bg-[#EAF3D8]'>
      <Sidebar></Sidebar>
      <div className='mt-[-930px] grid w-[1440px] justify-items-center pl-[292px]'>
        <div className='w-[460px] text-center font-poppins text-5xl'>
          Inventarios
        </div>
        <div className='flex space-x-[526px] pt-[77px]'>
          <select className='h-16 w-64 rounded-lg border-2 border-black bg-green-200 font-poppins text-xl hover:bg-green-300 focus:border-green-500 focus:outline-none'>
            <option>Selecciona un material</option>
            {materiales.map((material) => (
              <option key={material.id}>{material.nombre}</option>
            ))}
          </select>
          <button
            onClick={handleOpenModal}
            className='h-[65px] w-[226px] rounded-xl bg-[#004737] font-poppins text-xl text-white shadow-md transition duration-500 ease-in-out hover:bg-[#007f5f]'
          >
            Agregar movimiento
          </button>
        </div>
        <TablaInventario></TablaInventario>
      </div>
      <ModalMovimiento
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Inventario;
