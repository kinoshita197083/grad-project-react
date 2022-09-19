import React, { useEffect, useState } from 'react'
import ReactEcharts from 'echarts-for-react';
import axios from 'axios';
import '../counter/counter.css'

export function TagValue(props) {

    //Where predictions data store
    const [predictions, getPredictions] = useState([]);

    useEffect(() => {
        getPredictedData();
    }, []);


    //The GET request
    const getPredictedData = () => {
        // axios.get('https://jnkntsb3gd.execute-api.ap-southeast-2.amazonaws.com/test')
        axios.get(props.endpoint)
            .then((response) => {
                const allPredictions = response.data.body;
                getPredictions(JSON.parse(allPredictions));
                //console.log(JSON.parse(allPredictions));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    if (predictions.length == 1){
        var countValue = String(predictions.map(item => Object.values(item)))
        console.log(countValue)
    } else {
        var countValue = String(predictions.map(item => Object.values(item)[1])[0])
        if (countValue.includes('-')){
            const inputDates = new Date(countValue)
            const monthValue = inputDates.toLocaleString('default', {month: 'short'}).slice(0, 3)
            const dayValue = inputDates.getDay()
            countValue = monthValue + ' ' + dayValue
        } 
    }
    console.log(countValue)
    return (
        <div className = 'counter'>{countValue}</div>
    );
};