'use client';

import { User } from "@/app/usuario/page";
import { useUserToggleStore } from '@/store/useUserToggleStore';
import { useState } from "react";
import { Modal } from "../modalUser";

interface TableProps {
    users: User[];
}

export default function Table({users}: TableProps){
    const { toggleUser, isUserEnabled } = useUserToggleStore();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    const openModal = (userId: number) => {
        setSelectedUserId(userId);
        setIsOpen(true);
    };

    return(
        <div className="flex justify-center">
            {isOpen && selectedUserId !== null && (
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} id={selectedUserId}/>
            )}
            <table className="border-collapse w-[70%] border-spacing-2 ">
                <thead>
                    <tr className="bg-black text-white">
                        <th className="p-3 text-left">ID</th>
                        <th className="p-3 text-left" >Name</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Telefone</th>
                        <th className="p-3 text-left"></th>
                    </tr>
                </thead>
                <tbody >
                    {users.map((user,index) => {
                        const enabled = isUserEnabled(user.id);
                        return (
                            <tr 
                                key={user.id}
                                className={`${!enabled ? "bg-gray-800 text-white" : index % 2 === 0 ? "bg-gray-100" : "bg-white"}  hover:bg-violet-300`}
                            >
                                <td className="p-3">{user.id}</td>
                                <td 
                                    className="p-3 text-blue-600 hover:underline cursor-pointer"
                                    onClick={() => openModal(user.id)}
                                >{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.phone}</td>
                                <td className="p-3">
                                    <button 
                                        className="cursor-pointer p-3 bg-blue-500 hover:bg-blue-700 text-white rounded-md" 
                                        onClick={()=> toggleUser(user.id)}
                                    >
                                        {enabled ? `Desabilitar` : `Habilitar`}
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}