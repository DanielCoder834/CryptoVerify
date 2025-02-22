"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider } from "@web3auth/base";

const clientId = "YOUR_WEB3AUTH_CLIENT_ID"; // Replace with your actual Client ID from Web3Auth Dashboard

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x1", // Ethereum Mainnet
  rpcTarget: "https://rpc.ankr.com/eth",
  displayName: "Ethereum Mainnet",
  blockExplorerUrl: "https://etherscan.io",
  ticker: "ETH",
  tickerName: "Ethereum",
  logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
};

// Create Context
interface Web3AuthContextType {
  web3auth: Web3Auth | null;
  provider: IProvider | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const Web3AuthContext = createContext<Web3AuthContextType | null>(null);

// Web3Auth Provider Component
export const Web3AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);

  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        const web3authInstance = new Web3Auth({
          clientId,
          chainConfig,
          web3AuthNetwork: "mainnet",
        });

        await web3authInstance.initModal();
        setWeb3auth(web3authInstance);

        if (web3authInstance.provider) {
          setProvider(web3authInstance.provider);
        }
      } catch (error) {
        console.error("Web3Auth Initialization Error:", error);
      }
    };

    initWeb3Auth();
  }, []);

  const login = async () => {
    if (!web3auth) return;
    try {
      const provider = await web3auth.connect();
      setProvider(provider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const logout = async () => {
    if (!web3auth) return;
    try {
      await web3auth.logout();
      setProvider(null);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <Web3AuthContext.Provider value={{ web3auth, provider, login, logout }}>
      {children}
    </Web3AuthContext.Provider>
  );
};

// Hook to use Web3Auth
export const useWeb3Auth = () => {
  const context = useContext(Web3AuthContext);
  if (!context) throw new Error("useWeb3Auth must be used within a Web3AuthProvider");
  return context;
};
