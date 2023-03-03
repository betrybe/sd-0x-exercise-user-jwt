describe('Requisito 03', function () {
    it('Cadastro com email inválido', function () {
      expect(() => require('../src/integration-tests/user_req3.test')).not.throw();
    });
});