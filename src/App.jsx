import { teams } from "./data/teams"
import { useEffect, useState } from "react";
import Match from "./components/Match"
import Round from "./components/Round"
import ChampionScreen from "./components/ChampionScreen"

import "./styles/App.css"

function App() {
    const [winners, setWinners] = useState([])
    const [quartas, setQuartas] = useState([])
    const [semifinais, setSemifinais] = useState([])
    const [final, setFinal] = useState([])

    const oitavas = [
        ["Brasil", "Coreia do Sul"],
        ["Argentina", "Austrália"],
        ["França", "Polônia"],
        ["Inglaterra", "Senegal"],
        ["Holanda", "Estados Unidos"],
        ["Japão", "Croácia"],
        ["Marrocos", "Espanha"],
        ["Portugal", "Alemanha"]
    ];

    useEffect(() => {

        let jogosQuartas = []
        for (let i = 0; i < winners.length; i += 2) {
            jogosQuartas.push([
                winners[i],
                winners[i + 1]
            ])
        }

        setQuartas(
            jogosQuartas
        )
        console.log(jogosQuartas);
    }, [winners])

    function adicionarVencedor(time) {
        setWinners(prev => [
            ...prev,//Funciona, mas quando houver muitos cliques rápidos, a forma mais segura é usar a versão com função:
            time
        ]);
    }
    for (let i = 0; i < winners.length; i += 2) {
        console.log(
            winners[i],
            winners[i + 1]
        );
    }


    return (
        <>
            {/* Exibe os times da copa */}
            <div>
                {teams.map((team, index) => {
                    return <p key={team}>{team}</p>
                })}
            </div>
            {/*  */}
            <div>
                {oitavas.map((partida, index) => {
                    return (
                        <div key={index}>
                            {partida[0]}x {partida[1]}
                        </div>
                    )
                })}
            </div>


            <Round
                title="Oitavas"
                matches={oitavas}
                onWinner={adicionarVencedor}
            />
            {quartas.length == 4 &&
                <Round
                    title="quartas"
                    matches={quartas}
                />}
            {/* 
            <Round
                title="Semifinais"
                matches={semifinais}
                onWinner={adicionarVencedor}
            />
            <Round
                title="Final"
                matches={final}
                onWinner={adicionarVencedor}
            /> */}


            {/* {champion && (
                <ChampionScreen champion={champion} />
            )} */}

        </>

    )
}

export default App
