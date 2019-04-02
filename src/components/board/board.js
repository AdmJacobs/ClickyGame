import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Anaheim Angels',
        img: 'img/250x180/angels.png',
        clicked: false
    },
    {
        name: 'White Sox',
        img: 'img/250x180/sox.png',
        clicked: false
    },
    {
        name: 'Boston Red Sox',
        img: 'img/250x180/boston.png',
        clicked: false
    },
    {
        name: 'Baltimore Orioles',
        img: 'img/250x180/baltimore.png',
        clicked: false
    },
    {
        name: 'Chicago Cubs',
        img: 'img/250x180/cubs.png',
        clicked: false
    },
    {
        name: 'Arizona Diamondbacks',
        img: 'img/250x180/diamond.png',
        clicked: false
    },
    {
        name: 'Houston Astros',
        img: 'img/250x180/houston.png',
        clicked: false
    },
    {
        name: 'Cincinnati Reds',
        img: 'img/250x180/reds.png',
        clicked: false
    },
    {
        name: 'Colorado Rockies',
        img: 'img/250x180/rockies.png',
        clicked: false
    },
    {
        name: 'Detroit Tigers',
        img: 'img/250x180/tigers.png',
        clicked: false
    },
    {
        name: 'Atlanta Braves',
        img: 'img/250x180/braves.png',
        clicked: false
    },
    {
        name: 'NY Mets',
        img: 'img/250x180/mets.png',
        clicked: false
    },
    {
        name: 'Minnesota Twins',
        img: 'img/250x180/twins.png',
        clicked: false
    },
    {
        name: 'LA Dodgers',
        img: 'img/250x180/dodgers.png',
        clicked: false
    },
    {
        name: 'Brewers',
        img: 'img/250x180/brewers.png',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every MLB Baseball Team once. Once you click a Team the grid will shuffle.<br/>Try not to click the same Team twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}