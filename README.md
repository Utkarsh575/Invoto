# Invoto (cross chain invoicing for teams)

Invoto is a cross chain invoicing solution that enables businesses , freelancers and teams to create , manage and pay invoices in USDC to their users accross chains.
Invoto is powered by Circle's CCTP (Cross chain transactions protocol) that enables payment across multiple chains.

## what is Circle's CCTP ?
> Cross-Chain Transfer Protocol (CCTP) is a permissionless on-chain utility that facilitates USDC transfers securely between blockchains networks via native burning and minting. Circle created it to improve capital efficiency and minimize trust requirements when using USDC across blockchain networks. CCTP enables developers to build multi-chain applications that provide secure, 1:1 transfers of USDC across blockchains for their users.

## Usecase and Motivation
While Decentralized Finance (DeFi) offers immense potential, interoperability remains a significant hurdle to its widespread adoption.
Invoto makes the tedious part of managing invoicing payments accross chain for your enterprise very easy. Using Invoto small as well as large businesses can pay their employee's invoices in thier preffered chain. With Invoto everyone can the advancatge of Cross Chain Payments and enhance their journey in Web3.

## Target Track
Solving Defi interoperability using CCTP and Cross chain Payments.


## Gallery
Demo Link :- https://youtu.be/3x_O1ii2gZ4

#### Payer creation
![image](https://github.com/Utkarsh575/Invoto/assets/35625228/47c5f494-98a9-492e-98c8-c0576ab2e573)

#### Payer/Payee Onboarding
![image](https://github.com/Utkarsh575/Invoto/assets/35625228/045f27b3-7ffb-4b6e-a2ed-8c5f47a26489)

#### Payee Creation
![image](https://github.com/Utkarsh575/Invoto/assets/35625228/88b137ed-0670-4323-8699-a7d14352ffb6)

#### Payer Dashboard
![image](https://github.com/Utkarsh575/Invoto/assets/35625228/f8ce89f8-2f56-4a42-abeb-d95c319fb068)

#### Payment/Transfer
![image](https://github.com/Utkarsh575/Invoto/assets/35625228/b0c8ff64-1184-41cb-9eaa-dda4a640d6be)

#### Transfer to different wallet
![image](https://github.com/Utkarsh575/Invoto/assets/35625228/ac6c3fe1-b06c-47fc-b99d-0dec5fe65345)

#### Payee Dashboard
![image](https://github.com/Utkarsh575/Invoto/assets/35625228/9237ae3a-8601-4bd8-9ac7-a03ef69e12e2)

#### Invoice Creation
![image](https://github.com/Utkarsh575/Invoto/assets/35625228/811a34b5-f3e6-45be-a61c-e1fb517a890f)

#### Reciving Cross chain payment
![image](https://github.com/Utkarsh575/Invoto/assets/35625228/93a63a9d-896b-4d51-9cf0-bbdb778b9e53)

#### SEND TRANSACTION USING SEPOLIA TESTNET
![image](https://github.com/Utkarsh575/Invoto/assets/35625228/a7e7b717-373b-48f3-8790-6f5a670dd503)

#### RECIVE TRANSATION USING ARBITRUM SEPOLIA
![image](https://github.com/Utkarsh575/Invoto/assets/35625228/6b000250-0081-47b7-a14d-e67f175a946d)

## Techstack used:-
| Frontend & Web3    | Backend |
| -------- | ------- |
| React Typescript |  Node js  |
| Zustand           |  Express js     |
| Tilwind CSS Flowbyte    | MongoDB    |
|  web3-react and ethers |   Mongoose   |


# Setup Invoto locally

## Clone the frontend repository 
```
git clone https://github.com/Utkarsh575/Invoto.git
```
## Install dependencies for the client

Install NVM 

```
# Install nvm using brew
brew install nvm
# Or install it manually
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Use the correct node version (version found in .nvmrc)

```
nvm use
```

Install npm dependencies

```
npm install
```

## Running the app

```
npm start
```

The client app will now be running on: http://localhost:3000.

## Setting up the backend repo

```
git clone https://github.com/AryaKesharwani/Invoto-backend.git
```
Install npm dependencies

```
npm install
```

## Running the app

Run the backend server locally:

```
npm start
```
The server will now be running on: http://localhost:3001.

