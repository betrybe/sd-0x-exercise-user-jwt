describe('Requisito 04', function () {
    it('Cadastro com email duplicado', function () {
      expect(() => require('../src/integration-tests/user_req4.test')).not.throw();
    });
});