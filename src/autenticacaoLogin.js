/*
Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.

Desafio:
Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais

Entrega:
Suba seu código no Github e entregue o link via plataforma do PGATS até o dia 10 de maio às 23:59:59. 
*/

const usuarios = [
  {
    id: 1,
    nome: "Maria",
    email: "maria@email.com",
    senha: 123456,
    expirado: true,
  },
  {
    id: 1,
    nome: "Lucas",
    email: "lucas@email.com",
    senha: 456789,
    expirado: false,
  },
  {
    id: 1,
    nome: "Dulce",
    email: "dulce@email.com",
    senha: "123senha",
    expirado: false,
  },
];

export function autenticacaoLogin(login, senha) {
  for (let usuario of usuarios) {
    if (usuario.email == login) {
      if (usuario.senha != senha) {
        return "Senha inválida";
      }
      if (usuario.expirado == true) {
        return "As credenciais expiraram";
      }
      return "Login realizado com sucesso";
    }
  }
  return "Usuário não encontrado";
}

console.log(autenticacaoLogin("lucas@email.com", 236541));
