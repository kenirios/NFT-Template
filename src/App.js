/* eslint-disable no-undef */
// Importaciones
import React, {useEffect, useState } from "react";
import './App.css';
import {useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import LipRenderer from "./comp/LipRenderer";
import _color from "./assets/images/bg/_color.png";

function App() {

  // Primeros pasos en la carga de la información
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [loading, setLoading] = useState(false);
  const blockchain = useSelector((state) => state.blockchain);
  console.log(data);
 


  const  generateRandomString = (num) => {
    //const characters ='ABECIDOFUGAHEJIKOLUMANEIPOQURASETIVOWUXAYEZI';
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result1;
}


  // Mint de un nuevo Token NFT
  const mintNFT = async (_account, _name, cant) => {
    setLoading(true);
    blockchain.lipToken.methods.createRandomLip(_name, cant).send({
      from: _account,
      value: blockchain.web3.utils.toWei("1", "ether"),
    }).once("error", (err) => {
      setLoading(false);
      console.log(err);
    }).then((receipt) => {
      setLoading(false);
      console.log(receipt);
      dispatch(fetchData(blockchain.account));
    });
  };


  const mintNFT2 = async (_account, _name, cant) => {
    setLoading(true);
    blockchain.lipToken.methods.createRandomLip(_name, cant).send({
      from: _account,
      value: blockchain.web3.utils.toWei("2", "ether"),
    }).once("error", (err) => {
      setLoading(false);
      console.log(err);
    }).then((receipt) => {
      setLoading(false);
      console.log(receipt);
      dispatch(fetchData(blockchain.account));
    });
  };

  const mintNFT3 = async (_account, _name, cant) => {
    setLoading(true);
    blockchain.lipToken.methods.createRandomLip(_name, cant).send({
      from: _account,
      value: blockchain.web3.utils.toWei("3", "ether"),
    }).once("error", (err) => {
      setLoading(false);
      console.log(err);
    }).then((receipt) => {
      setLoading(false);
      console.log(receipt);
      dispatch(fetchData(blockchain.account));
    });
  };


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

///////////////////////  habilidad fuerza defenza y poder de pelea




  // Visualizar el balance del Smart Contract
  const balanceSmartContract = async () => {
    setLoading(true);
    const money = blockchain.lipToken.methods.moneySmartContract().call();
    money.then(value => {
      alert(parseFloat(value/1000000000000000000))})
      console.log(money)
  };

  // Obtención del dinero por el Owner del Smart Contract
  const ethersOwner = async (_account) => {
    setLoading(true);
    blockchain.lipToken.methods.withdraw().send({
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

  // Recurso: https://es.reactjs.org/docs/hooks-effect.html
  // De forma similar a componentDidMount y componentDidUpdate
  useEffect (() => {
    if(blockchain.account != "" && blockchain.lipToken != null){
      dispatch(fetchData(blockchain.account));
    }
  }, [blockchain.lipToken]);
  

  // Visualización del Videojuego NFT 
  return (
    <div class="container-fluid">
    <s.Screen image={_color}>
      {blockchain.account === "" || blockchain.lipToken === null ? (
        <s.Container flex = {1} ai = {"center"} jc = {"center"}>
          <s.TextTitle> ¡AniMons Game, Juego NFT de Batallas Epicas!</s.TextTitle>
          <s.SpacerSmall/>
        <s.Button1 
          onClick = {(e) => {
          e.preventDefault();
          dispatch(connect());
        }}> 
        CONECTAR  
        </s.Button1>
        <s.SpacerSmall/>
        {blockchain.errorMsg != "" ? ( 
          <s.TextDescription>{blockchain.errorMsg}</s.TextDescription> ) : null}
        </s.Container> ) : (
          <s.Container ai = {"center"} style = {{padding: "24px"}}>
          <s.TextTitle> ¡Bienvenido al Videojuego NFT! </s.TextTitle>
          <s.SpacerSmall/>
          
          <s.Button2 
          
           onClick = {(e) => {
             e.preventDefault();
             const name = " AniMons-"+generateRandomString(4);
             const cant = '2';
             mintNFT(blockchain.account, name, cant)
           }} > 
           Crear Nuevo Pack de 3 NFT 
           </s.Button2>

                  
          <s.Button2 
           onClick = {(e) => {
             e.preventDefault();
             const name = " AniMons-"+generateRandomString(4) 
             const cant = '3';
             mintNFT2(blockchain.account, name, cant)
           }} > 
           Crear Nuevo Pack de 4 NFT 
           </s.Button2>
                 
          <s.Button2 
           onClick = {(e) => {
             e.preventDefault();
             const name = " AniMons-"+generateRandomString(4) 
             const cant = '4';
             mintNFT3(blockchain.account, name, cant)
           }} > 
          Crear Nuevo Pack de 5 NFT 
           </s.Button2>

          <s.Container jc = {"center"} fd = {"row"} style = {{flexWrap: "wrap"}} >
            {data.allLips.map((item, index) => {
              
              return ( 
               
                <s.Container key = {index} style = {{padding: "15px"}} >
                  <div className="card">
                  <LipRenderer lip = {item} />
                  </div>
                  <s.SpacerXSmall/>
                  <div className="card">    

                      <div>{item.name}</div>                                                      
                      <div>Id: {item.id}</div>                      
                      <div>Vida: {item.vida}</div>                
                    <div>Nivel: {item.level}</div>
                    <div>Fuerza: {item.fuerza}</div>                    
                    <div>Rareza: {item.rarity}</div>                    
                    <div>Defenza: {item.defenza}</div>
                    <div>Habilidad: {item.habil}</div>                                      
                    <div>Poder de Pelea: {item.poder}</div>
                    <div>ADN: {item.dna}</div>                            
                    <s.Button3
                    disabled = {loading ? 1:0}
                    onClick = {(e) => {
                      e.preventDefault();
                      levelUpLip(blockchain.account, item.id);
                    }}>
                      Pack 1 Nivel
                    </s.Button3>

                    <s.Button3
                    disabled = {loading ? 1:0}
                    onClick = {(e) => {
                      e.preventDefault();
                      vidaUpLip(blockchain.account, item.id);
                    }}>
                      15 Vidas
                    </s.Button3>

                    <s.Button3
                    disabled = {loading ? 1:0}
                    onClick = {(e) => {
                      e.preventDefault();
                      habilUpLip(blockchain.account, item.id);
                    }}>
                      3 Habilidad
                    </s.Button3>                    

                    <s.Button3
                    disabled = {loading ? 1:0}
                    onClick = {(e) => {
                      e.preventDefault();
                      fuerzaUpLip(blockchain.account, item.id);
                    }}>
                      5 de fuerza
                    </s.Button3>


                    <s.Button3
                    disabled = {loading ? 1:0}
                    onClick = {(e) => {
                      e.preventDefault();
                      defenzaUpLip(blockchain.account, item.id);
                    }}>
                      3 Defenza
                    </s.Button3>

                    <s.Button3
                    disabled = {loading ? 1:0}
                    onClick = {(e) => {
                      e.preventDefault();
                      poderUpLip(blockchain.account, item.id);
                    }}>
                      10 P Pelea
                    </s.Button3>

                  </div>
                  </s.Container>
              );
            })}
          </s.Container>
          
          <s.Button4
            onClick = {(e) => {
              e.preventDefault();
              balanceSmartContract();
            }}>
              BALANCE DEL SMART CONTRACT
            </s.Button4>

          <s.Button4
            onClick = {(e) => {
              e.preventDefault();
              ethersOwner(blockchain.account);
            }}>
              RETIRAR DINERO
            </s.Button4>
            </s.Container>
        )}
    </s.Screen> 
    </div>
  );
}


export default App;
