import { useState } from 'react';
import { TablaMaterial } from '@components/TablaMaterial';
import { ModalMaterial } from '@components/ModalMaterial';
import { PrivateRoute } from '@components/PrivateRoute';
import { Layout } from '@layouts/Layout';

const Material = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <PrivateRoute>
      <Layout>
        <div className='mt-[-930px] grid w-[1440px] justify-items-center pl-[292px]'>
          <div className='w-[460px] text-center font-poppins text-5xl'>
            Materiales
          </div>
          <div className='flex space-x-[526px] pt-[77px]'>
            <button
              onClick={handleOpenModal}
              className='h-[65px] w-[226px] rounded-xl bg-[#004737] font-poppins text-xl text-white shadow-md transition duration-500 ease-in-out hover:bg-[#007f5f]'
            >
              Agregar Material
            </button>
          </div>
          <TablaMaterial></TablaMaterial>
        </div>
        <ModalMaterial
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </Layout>
    </PrivateRoute>
  );
};

export default Material;