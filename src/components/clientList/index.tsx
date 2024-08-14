import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type Client = {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
};

const clients: Client[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', avatarUrl: '/avatars/avatar1.png' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', avatarUrl: '/avatars/avatar2.png' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', avatarUrl: '/avatars/avatar3.png' },
  { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com', avatarUrl: '/avatars/avatar4.png' },
  { id: 5, name: 'Tom Clark', email: 'tom.clark@example.com', avatarUrl: '/avatars/avatar5.png' },
  { id: 6, name: 'Emma Wilson', email: 'emma.wilson@example.com', avatarUrl: '/avatars/avatar6.png' },
  { id: 7, name: 'David White', email: 'david.white@example.com', avatarUrl: '/avatars/avatar7.png' },
  { id: 8, name: 'Sophia King', email: 'sophia.king@example.com', avatarUrl: '/avatars/avatar8.png' },
  { id: 9, name: 'Chris Lee', email: 'chris.lee@example.com', avatarUrl: '/avatars/avatar9.png' },
  { id: 10, name: 'Linda Turner', email: 'linda.turner@example.com', avatarUrl: '/avatars/avatar10.png' },
];

export const ClientList: React.FC = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <ul className="divide-y divide-gray-200">
        {clients.map((client) => (
          <li key={client.id} className="px-4 py-4 flex items-center sm:px-6">
            <Avatar>
              <AvatarImage src={client.avatarUrl} alt={client.name} />
              <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{client.name}</div>
              <div className="text-sm text-gray-500">{client.email}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
