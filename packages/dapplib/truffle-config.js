require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food cheese cruise sister collect grace office army gauge'; 
let testAccounts = [
"0x43c633e9e3371e051d4cfee37011419ecc4d40acf556ad8a741d530f1fe1ea18",
"0x7ada800ab4ce0df60081562bd7c674bdc07b72dd256add8d7e8363e29e992943",
"0x8e9cf16e58f3d69c8f931ab6516ef4826082935af2324c05464ff89d8b630e59",
"0x48b5d74e818cab375800712dbc1e0686ab3badb81bfbfd5731a265ea22fd894b",
"0xf74024988e62e01cdcf2ab1d95d100ed0474e1c126a711bf1b57c0ec605bf2e6",
"0xe6caf0eb1111f2104666e2ae8060e3c511eb63b3f123f84e84b7c64535b748c6",
"0x0f146d49f72d710eaf1146f292b28a733a949fcf7eb1b1e864465debd61f62a9",
"0x6b3dd6a78fad9e77cf2c2c092a391b9b8bfdb905bd040ae3d1f05488ebeff085",
"0x8081361046267f09ef41b2b09d14c41c6c9df58aabfacd414837c330fd946a6b",
"0x288c9d17942736af5e5b6d7677b9ed4702780d94e87189cca79369383ba69326"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

