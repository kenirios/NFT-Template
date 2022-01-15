
import React, {useEffect, useState } from "react";
//import './App.css';
import {useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import * as s from "../styles/globalStyles";
import LipRenderer from "../comp/LipRenderer";
import _color from "../assets/images/bg/_color.png";


const Dashboard = () => {  
    
            const dispatch = useDispatch();
            const data = useSelector((state) => state.data);
            const [loading, setLoading] = useState(false);
            const blockchain = useSelector((state) => state.blockchain);
            console.log(data);



            // Subir nivel de un Token NFT
  const levelUpLip = async (_account, _id) => {
    setLoading(true);
    blockchain.lipToken.methods.levelUp(_id).send({     
      value: blockchain.web3.utils.toWei("0.2", "ether"),
      from: _account,
    }).once("error", (err) => {
      setLoading(false);
      console.log(err);
    }).then((receipt) => {
      setLoading(false);
      console.log(receipt);
      dispatch(fetchData(blockchain.account));
    });
  };

  // Subir vida de un Token NFT
  const vidaUpLip = async (_account, _id) => {
    setLoading(true);
    blockchain.lipToken.methods.vidaUp(_id).send({     
      value: blockchain.web3.utils.toWei("0.3", "ether"),
      from: _account,
    }).once("error", (err) => {
      setLoading(false);
      console.log(err);
    }).then((receipt) => {
      setLoading(false);
      console.log(receipt);
      dispatch(fetchData(blockchain.account));
    });
  };

///////////////////////  habilidad fuerza defenza y poder de pelea


// Subir habilidad de un Token NFT
const habilUpLip = async (_account, _id) => {
  setLoading(true);
  blockchain.lipToken.methods.habilUp(_id).send({     
    value: blockchain.web3.utils.toWei("0.1", "ether"),
    from: _account,
  }).once("error", (err) => {
    setLoading(false);
    console.log(err);
  }).then((receipt) => {
    setLoading(false);
    console.log(receipt);
    dispatch(fetchData(blockchain.account));
  });
};

// Subir defenza de un Token NFT
const defenzaUpLip = async (_account, _id) => {
  setLoading(true);
  blockchain.lipToken.methods.defenzaUp(_id).send({     
    value: blockchain.web3.utils.toWei("0.2", "ether"),
    from: _account,
  }).once("error", (err) => {
    setLoading(false);
    console.log(err);
  }).then((receipt) => {
    setLoading(false);
    console.log(receipt);
    dispatch(fetchData(blockchain.account));
  });
};


// Subir fuerza de un Token NFT
const fuerzaUpLip = async (_account, _id) => {
  setLoading(true);
  blockchain.lipToken.methods.fuerzaUp(_id).send({     
    value: blockchain.web3.utils.toWei("0.5", "ether"),
    from: _account,
  }).once("error", (err) => {
    setLoading(false);
    console.log(err);
  }).then((receipt) => {
    setLoading(false);
    console.log(receipt);
    dispatch(fetchData(blockchain.account));
  });
};


// Subir poder de un Token NFT
const poderUpLip = async (_account, _id) => {
  setLoading(true);
  blockchain.lipToken.methods.poderUp(_id).send({     
    value: blockchain.web3.utils.toWei("0.5", "ether"),
    from: _account,
  }).once("error", (err) => {
    setLoading(false);
    console.log(err);
  }).then((receipt) => {
    setLoading(false);
    console.log(receipt);
    dispatch(fetchData(blockchain.account));
  });
};


    return (
        <s.Container jc = {"center"} fd = {"row"} style = {{flexWrap: "wrap"}} >
        {data.allOwnerLips.map((item, index) => {
          
          return ( 
           
            <s.Container key = {index} style = {{padding: "15px"}} >
              
              <LipRenderer lip = {item} />
              
              <s.SpacerXSmall/>
                <div>{item.name}</div>                                                                                             
                <div>Vida: {item.vida}</div>                
                <div>Nivel: {item.level}</div>
                <div>Fuerza: {item.fuerza}</div>                    
                <div>Defenza: {item.defenza}</div>
                <div>Habilidad: {item.habil}</div>                                      
                <div>Poder de Pelea: {item.poder}</div>  

                <s.Button3
                    disabled = {loading ? 1:0}
                    onClick = {(e) => {
                      e.preventDefault();
                      levelUpLip(blockchain.account, item.id);
                    }}>
                      Nivel: {item.level} + 1
                    </s.Button3>

                    <s.Button3
                    disabled = {loading ? 1:0}
                    onClick = {(e) => {
                      e.preventDefault();
                      vidaUpLip(blockchain.account, item.id);
                    }}>
                      Vida: {item.vida} + 15
                    </s.Button3>

                    <s.Button3
                    disabled = {loading ? 1:0}
                    onClick = {(e) => {
                      e.preventDefault();
                      habilUpLip(blockchain.account, item.id);
                    }}>
                      Habil: {item.habil} + 3
                    </s.Button3>                    

                    <s.Button3
                    disabled = {loading ? 1:0}
                    onClick = {(e) => {
                      e.preventDefault();
                      fuerzaUpLip(blockchain.account, item.id);
                    }}>
                      Fuerza: {item.fuerza} +5
                    </s.Button3>


                    <s.Button3
                    disabled = {loading ? 1:0}
                    onClick = {(e) => {
                      e.preventDefault();
                      defenzaUpLip(blockchain.account, item.id);
                    }}>
                      Defenza: {item.defenza} + 3
                    </s.Button3>

                    <s.Button3
                    disabled = {loading ? 1:0}
                    onClick = {(e) => {
                      e.preventDefault();
                      poderUpLip(blockchain.account, item.id);
                    }}>
                      PP: {item.poder} + 10
                    </s.Button3>

              </s.Container>
          );
        })}
      </s.Container>
    );
};

export default Dashboard