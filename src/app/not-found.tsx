// src/app/not-found.tsx
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
      <p className="text-xl mb-8 text-center">
      Oops! A página que você está procurando não existe.
      </p>
      <Link href="/">
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Voltar para Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
