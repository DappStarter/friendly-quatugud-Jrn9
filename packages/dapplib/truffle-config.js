require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind concert gesture photo flush turkey'; 
let testAccounts = [
"0x6cf3a42f05a317f1471479d7d7f42dd81e632cd06b716b6a3a468e6c9995ec12",
"0x99efb296d7523701b3bc161ea4551c445bed8ae787f84c995e34ed17130d06d2",
"0xfa4dd1604a90ddee7ab2cc7e40f2fe223b663af389ebf2e236e872b0ab906a2a",
"0xe2802025c0833d095cd0d643df5550b7ca6fc43abe50c39754e22850eb4ffe7d",
"0x9f88f19809341dfaad4e44104ea3e16dfd5c2d32aea1f376a93d7b2eb4fb4b3f",
"0xcc5c344ce12abbf87c0c82f5bfe0b5f561ca8b6ca1e8f0e0ae85d8e0aface763",
"0xda12260eec39efee7bf5ddcf0e20688aa4dae57445e354619de6177739182fef",
"0xbf0f92968d9f8b4c0c1c209fe1c678d555c61da15ad6dfaa73e1a9ca084e19db",
"0x46ce0fdcc9a0cec92233bceaa7f5a91e07abb975ca5c466fceb6de24a876d6e8",
"0x66dfef1ffb345215a5fcae97d81919c7f7b8a870fc73b644a35b18323117a2cc"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

