import Equipe from '@components/Card/CardEquipe/Equipe';
import ComoAjudar from "@components/Card/ComoAjudar"
import Hero from '@components/Hero';
import Sobre from '@components/Sobre';
import {useSession} from 'next-auth/react';

export default function Home() {
  const { data, status } = useSession();
  return (
    <>
    <Hero />
    <ComoAjudar />
    <Sobre />
    <Equipe />
    </>
  );
};
