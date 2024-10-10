import {
    time,
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";
import { ethers } from "ethers";

describe("WavePay", function () {
  
    async function deployWavePay() {
  
      const [owner, addr1, addr2, addr3, addr4, addr5, addr6] = await hre.ethers.getSigners();
  
      const WavePay = await hre.ethers.getContractFactory("WavePay");
      const wavePay = await WavePay.deploy();
  
      return { wavePay, owner, addr1, addr2, addr3, addr4, addr5, addr6};
    }
  
    describe("Deployment", function () {
      it("Should deploy smart contract", async function () {
        const { wavePay, owner } = await loadFixture(deployWavePay);
        expect(await wavePay.getAddress()).to.not.equal("");
      });

      it("Should confirm owner address", async function () {
        const { wavePay, owner, addr1, addr2 } = await loadFixture(deployWavePay);
        expect(await wavePay.owner()).to.equal(owner.address);
      });
    });

    describe("Functions", function () {
        it("Should save addresses and emit AddressSaved event", async () => {
            const { wavePay, owner, addr1, addr2 } = await loadFixture(deployWavePay);
            const savedAddresses = [addr1.address, addr2.address];
            
            await expect(wavePay.saveAddresses(savedAddresses))
              .to.emit(wavePay, "AddressSaved")
              .withArgs(owner.address, savedAddresses);
        });

        it("Should get saved addresses", async () => {
            const { wavePay, owner, addr1, addr2, addr3, addr4 } = await loadFixture(deployWavePay);
            const savedAddresses = [addr1.address, addr2.address, addr3.address, addr4.address];
            
            await expect(wavePay.saveAddresses(savedAddresses))
              .to.emit(wavePay, "AddressSaved")
              .withArgs(owner.address, savedAddresses);
            
            const userAddresses = await wavePay.connect(owner).getUserAddresses();
            expect(userAddresses).to.deep.equal(savedAddresses);
        });

        it("Should update addresses correctly", async function () {
          const { wavePay, owner, addr1, addr2, addr3, addr4 } = await loadFixture(deployWavePay);
          const savedAddresses = [addr1.address, addr2.address];

          await wavePay.saveAddresses(savedAddresses);
          const newAddresses = [addr3.address];
          await wavePay.updateAddresses(newAddresses);
          expect(await wavePay.getUserAddresses()).to.deep.equal(newAddresses);
      });

      it("Should emit AddressUpdated event", async function () {
        const { wavePay, owner, addr1, addr2, addr3, addr4 } = await loadFixture(deployWavePay);
        const savedAddresses = [addr1.address, addr2.address];
        
          await wavePay.saveAddresses(savedAddresses);
          const newAddresses = [addr3.address];
          await expect(wavePay.updateAddresses(newAddresses))
              .to.emit(wavePay, "AddressUpdated")
              .withArgs(owner.address, newAddresses);
      });

      it("Should transfer Ether to a single recipient", async function () {
        const { wavePay, owner, addr1 } = await loadFixture(deployWavePay);
        
        const provider = ethers.getDefaultProvider();

        // await owner.sendTransaction({
        //   to: wavePay.getAddress(),
        //   value: ethers.parseEther("10.0"),
        // });
        
        // await expect(wavePay.connect(owner).transfer(addr1.address, ethers.parseEther("1.0")))
        //   .to.emit(wavePay, "TransferSingle")
        //   .withArgs(owner.address, addr1.address, ethers.parseEther("1.0"));

        console.log(await provider.getBalance(addr1.address));
        
        // expect(await provider.getBalance(addr1.address)).to.equal(ethers.parseEther("1.0"));
      });
    
      it("Should transfer Ether to multiple recipients", async function () {
        const { wavePay, owner, addr1, addr2, addr3 } = await loadFixture(deployWavePay);
        
        const provider = ethers.getDefaultProvider();

        console.log(await provider.getBalance(addr1.address));

        // await owner.sendTransaction({
        //   to: wavePay.getAddress(),
        //   value: ethers.parseEther("10.0"),
        // });
        
        // const recipients = [addr1.address, addr2.address, addr3.address];
        // const amounts = [ethers.parseEther("1.0"), ethers.parseEther("2.0"), ethers.parseEther("3.0")];
    
        // await expect(wavePay.connect(owner).transferToMultiple(recipients, amounts))
        //   .to.emit(wavePay, "MultiTransfer")
        //   .withArgs(owner.address, recipients, ethers.parseEther("6.0"));
          
        // expect(await provider.getBalance(addr1.address)).to.equal(ethers.parseEther("1.0"));
        // expect(await provider.getBalance(addr2.address)).to.equal(ethers.parseEther("2.0"));
        // expect(await provider.getBalance(addr3.address)).to.equal(ethers.parseEther("3.0"));
      });
    });
});