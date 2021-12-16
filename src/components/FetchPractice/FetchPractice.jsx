import React, { useEffect, useState } from "react";

const FetchPractice = () => {

    const [results, setResults] = useState('')
    const [resultsFound, setResultsFound] = useState(false)

    useEffect(() => {



        if (!resultsFound) {
            fetch("https://www.dnd5eapi.co/api/ability-scores/")
            // .then(res => console.log("line14: ", res))
            .then(res => res.json())
            .then(data => setResults(data))
            // .then(console.log(results))
            .catch(err => console.log(err))
            setResultsFound(true)
        }
    }, [resultsFound])

    // const fetchData = () => {
    //     fetch("https://www.dnd5eapi.co/api/ability-scores/")
    //     .then(res => res.json())
    //     .then(data => setResults(data))
    //     .then(console.log(results))
    //     .catch(err => console.log(err))
    // }

    // fetchData();

    // useEffect(() => {
    //     fetchData()
    // }, [])

    return (
        <div>
            {results}
        </div>
    );

}

export default FetchPractice;