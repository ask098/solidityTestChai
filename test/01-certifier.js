const Certifier = artifacts.require (‘Certifier’)

const chai = require ('chai')
//const chai
const expect = chai.expect

contract ('Certifier' , accounts  => {
 describe ('Deployment', () => {
	it  ('should get an instance of the contract', () =>{
	Certifier.deployed().then(instance => {
	 certifier = instance
	 expect (certifier).not.to.be.empty
})
})
	it ('should not get an error for the instance', () =>{
	expected(certifier).not.to.be.an('error')
})
})

	it ('should get the owner of the contract', () => {
	let owner = accounts [0]
	certifier.owner().then(realOwner => {
	 expect(realOwner).to.eq(owner)
})
})
	it('should allow the owner save a name'), () => {
		const [owner] = accounts
		certifier.setName('Fulanito').then(response => {
			expect((response.tx).match (/0x\w{64}/))
			expect(respose.tx.length).to.eq(66)
		})
	}

})