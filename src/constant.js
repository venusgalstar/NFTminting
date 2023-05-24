var abi = require('./abi/nft.json');
var token_abi = require('./abi/token.json');

var config = {
    rpc: "https://data-seed-prebsc-2-s2.binance.org:8545",
    address: "0xb984378CF96A5573F3f639a46C93042B7cAfC87b",
    abi: abi,
    token_address: "0x3816443EEbEc8de4EA6E6b6b8Cf880F28ACCA35C",
    token_abi: token_abi,
    chainId : 97,
}

export default config;