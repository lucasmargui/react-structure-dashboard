import ExemploLogo from '@/app/ui/exemplo-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
    <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
    <Link
          href="/dashboard"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Exemplo de dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
    </div>
  </main>
  );
}
