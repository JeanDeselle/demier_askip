import React, { Component } from "react";
let tab = [];
class Grille extends Component {
	constructor(props) {
		super(props);
	}

	createTab() {
		const nbr = parseInt(this.props.nbr);

		if (nbr) {
			let count = 1;
			for (let i = 0; i < nbr; i++) {
				tab[i] = [];
				for (let j = 0; j < nbr; j++) {
					tab[i][j] = count;
					count++;
				}
			}
		}
	}

	render() {
		this.createTab();
		return (
			<table>
				<tbody>
					{tab.map((cell, index) => {
						return (
							<tr key={index}>
								{cell.map((cel, ind) => {
									return (
										<td key={ind} className={"case-" + ind}>
											{cell[ind]}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

export default Grille;
