'use client';

import { User } from '@/app/usuario/page';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Carregamento dinâmico no client
const UserMap = dynamic(() => import('@/components/map'), { ssr: false });

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, id }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen) return null;


  useEffect(() => {
    if (!isOpen) return;

    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar usuário');
        return res.json();
      })
      .then(data => setUser(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id, isOpen]);

  const lat = user ? user.address.geo.lat : 0;
  const lng = user ? user.address.geo.lng : 0;

  const position = [lng,lat]
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) {
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl animate-fadeIn">
        {loading && <p>Carregando...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {user && (
          <div className="max-h-[500px] overflow-y-auto pr-2">
            <h1 className="flex justify-center text-xl font-semibold mb-2">{user.name}</h1>
            
            <div className='border-4 border-purple-500 p-4'>    
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>

                <h2 className="flex justify-center text-xl font-semibold mb-2 mt-4">Empresa</h2>
                <p><strong>Name:</strong> {user.company.name}</p>
                <p><strong>catchPharse:</strong> {user.company.catchPhrase}</p>
                <p><strong>BS:</strong> {user.company.bs}</p>


                <h2 className="flex justify-center text-xl font-semibold mb-2 mt-4">Endereco</h2>
                <p><strong>City:</strong> {user.address.city}</p>
                <p><strong>Street:</strong> {user.address.street}</p>
                <p><strong>Suite:</strong> {user.address.suite}</p>
                <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
                <div className="mt-4" style={{ height: '300px', width: '100%' }}>
                    
                <div className="mt-4" style={{ height: '300px', width: '100%' }}>
                    <UserMap
                        lat={user.address.geo.lat}
                        lng={user.address.geo.lng}
                        name={user.name}
                    />
                </div>
            </div>
            </div>
          </div>
        )}

        {!loading && !error && !user && <p>Nenhum dado disponível</p>}

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-rose-600 rounded text-white hover:bg-gray-300 hover:text-gray-900"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
