pragma solidity 0.5.16;

import "@uniswap/v2-core/contracts/UniswapV2Factory.sol";

contract Factory is UniswapV2Factory {
    UniswapV2Factory private factory;

    constructor(address _feeSetter) public UniswapV2Factory(_feeSetter) {}

    // Additional contract functionality and customizations can be added here
}
