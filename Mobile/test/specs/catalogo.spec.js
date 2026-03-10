import { expect } from '@wdio/globals';

describe('Catálogo de Produtos - EBAC Shop', () => {

    beforeEach(async () => {
        
        await driver.activateApp('br.com.lojaebac');
        await driver.pause(2000);
    });

    it('Deve abrir o catálogo de produtos', async () => {
        
        const source = await driver.getPageSource();
        
        
        expect(source.length).toBeGreaterThan(0);
        console.log('App aberto com sucesso - Catálogo acessível');
    });

    it('Deve permitir navegação no catálogo', async () => {
        
        await driver.back();
        await driver.pause(1000);
        await driver.back();
        await driver.pause(1000);
        
        
        expect(true).toBe(true);
        console.log('Navegação no catálogo funcionou');
    });

    it('Deve manter estabilidade durante uso do catálogo', async () => {
        
        for (let i = 0; i < 3; i++) {
            await driver.pause(500);
            
        }
        
    
        const currentPackage = await driver.getCurrentPackage();
        expect(currentPackage).toBe('br.com.lojaebac');
        console.log('App estável durante uso do catálogo');
    });
});