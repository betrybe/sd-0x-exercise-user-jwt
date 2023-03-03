describe('Requisito 01', function () {
    it('Obter pessoas usuárias em rota autenticada por token', function () {
      expect(() => require('../src/integration-tests/user_req1.test')).not.throw();
    });
});