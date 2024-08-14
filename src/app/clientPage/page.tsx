import { ClientList } from "@/components/clientList";
import { NewClientModal } from "@/components/newClientModal";


export default function ClientPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Client List</h1>
      <NewClientModal />
      <ClientList />
    </div>
  );
}
