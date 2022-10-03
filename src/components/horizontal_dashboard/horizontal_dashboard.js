import React, { useEffect, useState } from 'react'
import './horizontal_dashboard.css'
import UpdatedTagValue from '../dashboard/updatedTagValue';
import CountUp from 'react-countup';
import 'animate.css';
import Tooltip from '@mui/material/Tooltip';
// import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import { styled } from '@mui/material/styles';
import { Ripple } from '../ripple/ripple';
// import { Link } from 'react-router-dom';

const fetchData = (endpoint) => {

    const axios = require('axios');
    const predictions = [];

    axios.get(endpoint)
        .then((response) => {
            const allPredictions = response.data.body;
            predictions.push(JSON.parse(allPredictions));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    if (predictions.length == 1) {
        var countValue = String(predictions.map(item => Object.values(item)))
        console.log(countValue)
    } else {
        var countValue = String(predictions.map(item => Object.values(item)[1])[0])
        if (countValue.includes('-')) {
            const inputDates = new Date(countValue)
            const monthValue = inputDates.toLocaleString('default', { month: 'short' }).slice(0, 3)
            const dayValue = inputDates.getDay()
            countValue = monthValue + ' ' + dayValue
        }
    }
    console.log(countValue)
    return (
        countValue
    );
}

// const LightTooltip = styled(({ className, ...props }) => (
//     <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//     [`& .${tooltipClasses.tooltip}`]: {
//         backgroundColor: theme.palette.common.white,
//         color: 'rgba(0, 0, 0, 0.87)',
//         boxShadow: theme.shadows[1],
//         fontSize: 11,
//     },
// }));


function HorizontalDashboard() {

    const axios = require('axios');

    const [lastUpdated, setLastUpdated] = useState([]);

    useEffect(() => {
        getPredictedData();
        console.log(lastUpdated)
    }, []);


    const getPredictedData = () => {
        axios.get('https://jnkntsb3gd.execute-api.ap-southeast-2.amazonaws.com/test')
            .then((response) => {
                const lastUpdate_date = JSON.parse(response.data.body)[0].Date_confirmation;
                const date_split = lastUpdate_date.split('-');
                const adjusted_date = date_split[2] + '-' + date_split[1] + '-' + date_split[0]
                const inputDates = new Date(adjusted_date)
                const monthValue = inputDates.toLocaleString('default', { month: 'short' }).slice(0, 3)
                const dayValue = inputDates.getDay()
                console.log(dayValue)
                setLastUpdated([monthValue, dayValue])
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <div className='horizontal-main-container'>
            <div id='dashboard-ripple' style={{ position: 'absolute', left: '35.5%', zIndex: '+1', opacity: '0.6' }}>
                <Ripple />
            </div>

            <div className='horizontal-dash-container w3-col m8 l8 s12'>
                <UpdatedTagValue
                    endpoint='https://so937ufj91.execute-api.ap-southeast-2.amazonaws.com/prod/adjusted_mobility'
                    heading='Total Cases in Australia'
                    tooltip='The total recorded cases in Australia'
                    link='/404'
                    icon='fa-solid fa-file-contract' />

                <UpdatedTagValue
                    endpoint='https://jnkntsb3gd.execute-api.ap-southeast-2.amazonaws.com/test'
                    heading='Predicted Cases'
                    tooltip='Prediction on Monkeypox cases based on our machine-learning model'
                    link='/prediction'
                    icon='fa-solid fa-chart-line' />

                <UpdatedTagValue
                    endpoint='https://6bgf6f5gx8.execute-api.ap-southeast-2.amazonaws.com/prod/'
                    heading='Last Spike in Cases'
                    tooltip='Last spike in Monkeypox cases'
                    link='/404'
                    icon='fa-solid fa-fire' />


                <UpdatedTagValue
                    endpoint='https://so937ufj91.execute-api.ap-southeast-2.amazonaws.com/prod/last_updated'
                    heading='Last Updated'
                    tooltip='Latest date from our database which has a case'
                    link='/404'
                    icon='fa-solid fa-clock' />

                {/* <Tooltip title="Last modified date of our Database" placement="top" arrow>
                    <div style={{ fontSize: '1.5rem', display: 'flex', flexDirection: 'column', rowGap: '1rem', padding: '2rem', textAlign: 'center' }} className='count-container'>
                        <i className='fa-solid fa-clock'></i>
                        <p className='w3-hide-small' style={{ fontSize: '1rem' }}>Last Updated</p>
                        <p>{lastUpdated[0]} <CountUp end={lastUpdated[1]} /></p>
                    </div>
                </Tooltip> */}

            </div>
        </div>
    )
}

export default HorizontalDashboard;