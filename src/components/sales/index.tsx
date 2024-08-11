import { CircleDollarSign } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Avatar, AvatarImage } from '../ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

export function Sales() {
  return (
    <Card className='flex-1'>
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
      </CardHeader>

      <CardContent>
        <article className='flex items-center gap-2 border-b py-2'>
          <Avatar className="w-8 h-8">
            <AvatarImage src='https://github.com/darioreisjr.png' />
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
          <div >
            <p className='text-sm sm:text-base font-semibold'>Dario Reis</p>
            <span className='text-[12px] sm:text-sm text-gray-400'>contato@darioreis.dev</span>
          </div>
        </article>

        <article className='flex items-center gap-2 border-b py-2'>
          <Avatar className="w-8 h-8">
            <AvatarImage src='https://github.com/darioreisjr.png' />
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
          <div >
            <p className='text-sm sm:text-base font-semibold'>Dario Reis</p>
            <span className='text-[12px] sm:text-sm text-gray-400'>contato@darioreis.dev</span>
          </div>
        </article>

        <article className='flex items-center gap-2 border-b py-2'>
          <Avatar className="w-8 h-8">
            <AvatarImage src='https://github.com/darioreisjr.png' />
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
          <div >
            <p className='text-sm sm:text-base font-semibold'>Dario Reis</p>
            <span className='text-[12px] sm:text-sm text-gray-400'>contato@darioreis.dev</span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
