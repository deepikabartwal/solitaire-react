import React from 'react';
import Lodash from 'lodash';
import cards from './data/cardData';

class Tableau extends React.Component{
	constructor(props){
		super(props);
		console.log(props.value)
		this.state= {"deck":this.props.value};
	}
	generateCardView(card){
		return (
		<div className="card-container">
		<div draggable className="card" style={{"color":card.color}}>{card.unicode}</div>
		</div>)
	}
	generatePile(deck,count){
		let startingIndex = count-1;
		let endIndex = count + count-1;
	return deck.slice(startingIndex,endIndex);
	}
	generateTableau(){
		const cardCountList = [1,2,3,4,5,6,7];
		const generateAllPile = this.generatePile.bind(null,this.state.deck);
		return cardCountList.map(generateAllPile).map(pile => <div className="pile">{pile.map(this.generateCardView)}</div>) ;
	}
	render(){
		return <div className="tableau">{this.generateTableau()}</div>
	}
}
export default Tableau;