/**
 * eu também posso definir funções em interfaces
 */

interface CursoProps {

  id: string;
  nome: string;
  preco: number;

  // definir a função
  promocao: (preco: number) => void;
}


const curso: CursoProps = {
  id: "21",
  nome: "Curso de TypeScript",
  preco: 11.22,
  promocao: (preco: number): void => {
    console.log("Na promoção o curso ficou apenas por R$" + preco)
  }
}

console.log(curso)

curso.promocao(9.87)
