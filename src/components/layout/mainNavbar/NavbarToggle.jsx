import React, { useState } from "react";
import { Modal } from "antd";
import { useMoralis, useNFTBalances, useMoralisWeb3Api } from "react-moralis";
import Web3 from "web3";
import "./index.css";

const NavbarToggle = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const Web3Api = useMoralisWeb3Api()
  // const { authenticate, isAuthenticated, user, logout } = useMoralis(); 
  const [webUser, setWebUser] = useState(undefined)
    const [web3, setWeb] = useState(undefined)
  const handleConnect = () => {
    new Promise(async (resolve, reject) => {
      if (window.ethereum) {
        try {
            setWebUser(window.ethereum);
          await window.ethereum.enable();
          resolve(window.ethereum);
        } catch (err) {
          reject(err);
        }
      }
    }).then((res) => {
        setWeb(new Web3(res));
        setWeb((prevweb) => {
        prevweb.eth.getAccounts((error, result) => {
          if (result) {
            setIsModalVisible(false)
            const options = {
              address: "0x41B029E72b5588112d027a3985Dc1490829F20bd",
              chain: "Rinkeby",
            };
            const results = Web3Api.Moralis.Web3API.token.getNFTMetadata(
              options
            );
          }
        });
        return prevweb;
      });
    });
  };
  return (
    <div className="nav-toggle">
      <div className="content">
        <img
          className="wallet-type"
          alt=""
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng574a15f25d3faaa5ef9ec2ed5312e50fef7ebc9c92f80c9a6565b98be348590b"
        />
        <span className="wallet-text">Ethereum&nbsp;Mainnet</span>
      </div>
      <div
        className="connect-mode"
        onClick={() => setIsModalVisible(!isModalVisible)}
      >
        <span className="connect-text">Connect&nbsp;Wallet</span>
      </div>
      <Modal
        title="Connect Wallet"
        visible={isModalVisible}
        style={{ width: "604px" }}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <div className="Modal-Tittle-Subheading">
          Plase select the wallet of your liking
        </div>
        <div className="Modal-Tittle-Wallet">
          <div className="connect-type" onClick={handleConnect}>
            <img
              alt=""
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6a064d029d951180a7ea624e9d028d26b5a9c37224590e184060b93699442c8d"
            />
          </div>
          <div className="connect-type">
            <img
              alt=""
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6b1e358ef83b5da0676fd51625e6d900cb5f14810a698fb600d9788f26473274"
            />
          </div>
          <div className="connect-type">
            <img
              alt=""
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1d4646bdfcfa63a3079779350728475010654d4bf85281b2165cdffbfabe5d11"
            />
          </div>
          <div className="connect-type">
            <img
              alt=""
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbab18e483255ca8c28e501c1b8ec21fae5e326837b0ec6a8c8d3bd0956f6acec"
            />
          </div>
          <div className="connect-type">
            <img
              alt=""
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng479e90bbb61efe47432379703c3015f4d78a41e836241ff9dd9cbcd07452d17a"
            />
          </div>
          <div className="connect-type">
            <img
              alt=""
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngacc81eb080ac4190096dd4287490cc3d6116ce5a05534bfb8f63f30b3eaef798"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default NavbarToggle;
