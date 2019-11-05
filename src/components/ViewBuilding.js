import React from 'react';

class ViewBuilding extends React.Component {

	render() {
		//var {data} = this.props
		var data = this.props.dataState.slice()
		const selectedBuilding = this.props.selectedBuilding
		

		let code = ''
		let name = ''
		let address = ''
		let longitude = ''
		let latitude = ''
	

		if (selectedBuilding === 0) {
			return (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		}
		else {
			console.log("DATA DISPLAYED: ", data);
			console.log("INDEX: ", selectedBuilding);

			// Get all the info to display
			if (data[selectedBuilding-1].code)
				code = data[selectedBuilding-1].code
			if (data[selectedBuilding-1].name)
				name = data[selectedBuilding-1].name
			if (data[selectedBuilding-1].address)
				address = data[selectedBuilding-1].address
			if (data[selectedBuilding-1].coordinates) {
				latitude = data[selectedBuilding-1].coordinates.latitude
			}
			if (data[selectedBuilding-1].coordinates) {
				longitude = data[selectedBuilding-1].coordinates.longitude
			}
		

			return (
				<div class="text-center">
					<h1><b>{code}</b></h1>
					<h2>{name}</h2>
					<h5>{address}</h5>
					<p>Coordinates: {latitude}, {longitude}</p>
				</div>
			);
		}

		
	}
}
export default ViewBuilding;
