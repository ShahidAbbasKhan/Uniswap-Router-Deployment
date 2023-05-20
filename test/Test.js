const { expect } = require("chai");
const { ethers } = require("hardhat");

// describe("Lock", function () {
// We define a fixture to reuse the same setup in every test.
// We use loadFixture to run this setup once, snapshot that state,
// and reset Hardhat Network to that snapshot in every test.

describe("Deployment", function () {
  const feeSetter = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  let WETH, factory, router;
  beforeEach(async function () {
    const [owner, otherAccount] = await ethers.getSigners();

    const WrappedETH = await ethers.getContractFactory("WrappedETH");
    WETH = await WrappedETH.deploy();
    await WETH.deployed();
    const Factory = await ethers.getContractFactory("Factory");
    factory = await Factory.deploy(feeSetter);
    await factory.deployed();
    const Router = await ethers.getContractFactory("Router");
    router = await Router.deploy(factory.address, WETH.address);
    await router.deployed();
  });
  it("WETH Address Is", async function () {
    console.log("WETH Contract", WETH.address);
  });
  it("Factory Address Is", async function () {
    console.log("Factory Contract", factory.address);
  });
  it("Router Address Is", async function () {
    console.log("Router Contract", router.address);
  });
});
