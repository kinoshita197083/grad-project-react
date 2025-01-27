import React, { useEffect } from 'react'
import { Intro_Hero } from '../../IntroHero/intro_hero'
import './game.css'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'black',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 620,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export function Game() {

    // Auto scroll to top everytime entering the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='game-page-div'>
            <Intro_Hero
                image='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/game_character.png'
                heading='Learn As You Play'
            // style={{ backGroundColor: 'black' }}
            />
            <div className='game-main-section'>
                <div className='game-page-left'>
                    <div className='game-img-div game1-div-1'>
                        <img className='game-img-1' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/game_layout.png'>
                        </img>
                    </div>

                    <div className='game-img-div-2 game1-div-2'>
                        <img className='game-img-1' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/key.png'>
                        </img>
                    </div>
                </div>

                <div id='game-sub-section-1'>
                    <h1 className='game-sub-section-heading-1'>Gym Goer</h1>
                    <p className='game-sub-section-p-1'>
                        Check your knowledge and select the best practices for prevention and sanitising in this gym environment to combat monkeypox.
                        <br /><br />
                        Interact with the various objects and correctly answer the questions to collect the keys and escape to complete the level.
                        Use the 'arrow keys' to move, the 'a' key to interact with objects and the 'w' and 's' keys to select your dialogue.
                    </p>
                    <HtmlTooltip
                        title={
                            // <React.Fragment>
                            <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/keyboard_key_gym.png' width='500' height='100'></img>
                            // </React.Fragment>
                        }
                    >
                        <button id='game-main-section-button-1' className=''>
                            <a target="_blank" href="https://game.charming-ape.click/" style={{ textDecoration: 'none', color: 'white' }}>
                                PLAY
                            </a>
                        </button>
                    </HtmlTooltip>
                </div>
            </div>

            <div className='game-main-section' style={{ backgroundColor: 'white' }}>
                <div id='game-sub-section-2'>
                    <h1 className='game-sub-section-heading-1'>POXING</h1>
                    <p className='game-sub-section-p-1'>
                        Try to survive by playing Poxing and see how long you last!
                        <br /><br />
                        Use the 'spacebar' to guide the boy through as many obstacles as you can by jumping and collecting the sanitising wipes!
                    </p>
                    <HtmlTooltip
                        title={
                            <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/keyboard_flappy.png' width='500' height='100'></img>
                        }
                    >
                        <button id='game-main-section-button-1' className='button2'>
                            <a target="_blank" href="https://flappy.charming-ape.click/" style={{ textDecoration: 'none', color: 'white' }}>
                                PLAY
                            </a>
                        </button>
                    </HtmlTooltip>
                </div>

                <div className='game-page-right'>
                    <div className='game-img-div game2'>
                        <img className='game-img-1' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/flappy_gameplay.png'>
                        </img>
                    </div>

                    <div className='game-img-div-2 game2-small'>
                        <img className='game-img-1' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/fly-guy.png'>
                        </img>
                    </div>
                </div>


            </div>
        </div>
    )
}