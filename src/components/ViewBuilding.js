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
					<h3><b>{code}</b> - {name}</h3>
					<h6>{address}</h6>
					<p>Coordinates: {latitude}, {longitude}</p>
				</div>
			);
		}

		
	}
}
export default ViewBuilding;
