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
    });
});