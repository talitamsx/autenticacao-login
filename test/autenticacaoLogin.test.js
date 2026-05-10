import { autenticacaoLogin } from "../src/autenticacaoLogin.js";
import assert from "node:assert";

describe("Testes de autenticação de login", () => {
  describe("Testes da função autenticacaoLogin", () => {
    it('Deve retornar "Senha inválida" quando login informado é válido mas a senha esta incorreta', function () {
      const resultado = autenticacaoLogin("dulce@email.com", 789456);

      assert.equal(resultado, "Senha inválida");
    });

    it('Deve retornar "As credenciais expiraram" quando usário e senha informados forem válidos mas estiverem expirado', function () {
      const resultado = autenticacaoLogin("maria@email.com", 123456);

      assert.equal(resultado, "As credenciais expiraram");
    });

    it('Deve retornar "Login realizado com sucesso" quando email e senha fornecidos forem válidos', function () {
      const resultado = autenticacaoLogin("lucas@email.com", 456789);

      assert.equal(resultado, "Login realizado com sucesso");
    });

    it('Deve retornar "Usuário não encontrado" quando email não for encontrado', function () {
      const resultado = autenticacaoLogin("teste@email.com", 456789);

      assert.equal(resultado, "Usuário não encontrado");
    });
  });
});
