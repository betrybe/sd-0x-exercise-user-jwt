describe('Requisito 02', function () {
    it('Cadastro incompleto', function () {
      expect(() => require('../src/integration-tests/user_req2.test')).not.throw();
    });
});