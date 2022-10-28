
import * as Gettest from '../requests/GET.request';

describe('Gettest', () => {
    it('Enviar um GET para API', () => {
        Gettest.Gettest().should((response) => {
          expect(response.body).to.be.not.null;
          expect(response.body.idMemberCreator).to.eq("5191197f9433cf5507006338");
          expect(response.body.appCreator).to.eq(null)
          expect(response.status).to.eq(200);
         
        })
        
    });
  
     
});




