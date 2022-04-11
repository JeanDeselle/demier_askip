import React, { Component } from "react";
import Grille from './Grille'
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
		};
	}

	onChangeInput = (e) => {
		this.setState({ input: e.target.value });
	};

	render() {
		return (
			<>
				<form>
					<input type="text" onChange={this.onChangeInput} />
				</form>
                <Grille nbr={this.state.input}></Grille>
			</>
		);
	}
}
export default Home;
