import { useState } from "react"

export default function Fact() {
    const [numToLearn, setNumToLearn] = useState('')
    const [typeOfFact, setTypeOfFact] = useState('trivia')
    const [fact, setFact] = useState('')

    const learn = () => {
        const url = `http://numbersapi.com/${numToLearn}/${typeOfFact}?json`

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setFact(data.text)
            })
            .catch((err) => {
                console.log(`Error: ${err}`)
            })
    }

    return (
        <div className="container">
            <div className="form-container">
                <p>Pick a number and learn something interesting about it!</p>
                <input
                    type="number"
                    placeholder="Pick a number"
                    value={numToLearn}
                    onChange={(e) => setNumToLearn(e.target.value)}
                    className="input"
                />
                <label htmlFor="type-of-fact">Type of fact:</label>
                <select
                    name="type-of-fact"
                    id="type-of-fact"
                    value={typeOfFact}
                    onChange={(e) => setTypeOfFact(e.target.value)}
                >
                    <option value="trivia">Trivia</option>
                    <option value="math">Math</option>
                    <option value="year">Year</option>
                </select>
                <button className="button" onClick={learn}>
                    Learn!
                </button>
            </div>
            <div className="result-container">
                <div className="result">
                    <p className="number-searched">{numToLearn}</p>
                    <p className="fact">{fact}</p>
                </div>
            </div>
        </div>

    )
}