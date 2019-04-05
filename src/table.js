import React,{Component}from 'react';
import cards from './data/cardData';
import Lodash from 'lodash';
import Tableau from './tableau';

class Table extends Component{
	constructor(props){
		super(props);
		this.state ={"cards":Lodash.shuffle(cards)};
	}
	generateCardView(card){
		return (
		<div className="card-container">
		<div draggable className="card" style={{"color":card.color}}>{card.unicode}</div>
		</div>)
	}
	render(){
		return(
			<div className="table"><Tableau value={this.state.cards}/></div>
			
		)
	}
}
export default Table;