import Match from "./Match";

function Round({ title, matches, onWinner }) {
    return (
        <section>
            <h2>{title}</h2>

            {matches.map((match, index) => {
                return(
                <Match
                    key={index}
                    teamA={match[0]}
                    teamB={match[1]}
                    onWinner={onWinner}
                />)
            })}
        </section>
    )
}

export default Round