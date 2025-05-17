export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className='font-bold text-[44px]'>Seja Bem Vindo</h1>
      </div>
      <div>
        <div className="flex justify-center">
          <h2  className='font-bold text-[24px]'>Teste Técnico - Desenvolvedor Frontend</h2>
        </div>
        <div className='p-10'>
          <p className='mb-2'>Este projeto foi desenvolvido como parte de um teste técnico para a vaga de Desenvolvedor Frontend.</p>
          <p className='mb-2'>O principal objetivo é consumir dados de uma API pública e exibir uma lista de usuários com informações detalhadas de forma responsiva, organizada e com boa experiência de usuário.
          </p>
        </div>
      </div>
    </div>
  );
}
