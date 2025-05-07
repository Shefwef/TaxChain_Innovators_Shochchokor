# TaxChain_Innovators_Shochchokor  
**Blockchain-Powered Tax Management Platform**  

A decentralized application (dApp) for transparent tax compliance, built with Ethereum smart contracts and React.js. Enables users to submit tax records, automate calculations, and verify transactions on-chain.  

---

## Features  
- **Smart Contract Automation**: Tax rules encoded in Ethereum smart contracts for trustless execution.  
- **Decentralized Storage**: Tax records stored on-chain via IPFS for immutability and transparency.  
- **Role-Based Access**: Admins, tax officers, and users interact securely with role-based permissions.  
- **Real-Time Analytics**: Dashboard for tracking tax liabilities, payments, and audit history.  
- **MetaMask Integration**: User authentication and transaction signing via Web3 wallets.  

## Tech Stack  
- **Blockchain**: Ethereum, Solidity, Hardhat  
- **Frontend**: React.js, Tailwind CSS, Web3.js  
- **Backend**: Node.js, Express (REST API for hybrid logic)  
- **Tools**: IPFS, MetaMask, Truffle (testing), OpenZeppelin (security)  

---

## Installation  
1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/Shefwef/TaxChain_Innovators_Shochchokor.git
2. **Dependencies**:
   ```bash
   cd TaxChain_Innovators_Shochchokor  
   npm install  
3. **Set up environment variables**:
   Create a .env file in the root directory:
    ```bash
    REACT_APP_INFURA_ID=your_infura_project_id  
    REACT_APP_CONTRACT_ADDRESS=your_deployed_contract_address  
    MONGO_URI=your_mongodb_uri  # If using a backend  
5. **Compile and deploy smart contracts**:
   ```bash
   npx hardhat compile  
   npx hardhat run scripts/deploy.js --network ropsten  
7. **Start the application**:
   ```bash
   npm run start  
