import { useState } from "react";

function Match({ teamA, teamB, onWinner }) {
    const [winner, setWinner] = useState(null)

    return (
        <>
            <div>
                <div>
                    <p>{teamA}</p>
                    <p>{teamB}</p>
                </div>

                <div>
                    <button onClick={() => {
                        setWinner(teamA)
                        onWinner(teamA)
                    }}>{teamA}</button>
                    <button onClick={() => {
                        setWinner(teamB)
                        onWinner(teamB)
                    }}>{teamB}</button>
                    
                    {winner ? winner : null}
                </div>

            </div>
        </>
    )
}
export default Match;