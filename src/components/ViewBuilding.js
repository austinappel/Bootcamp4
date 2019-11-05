import React from 'react';

class ViewBuilding extends React.Component {

	render() {
		var {data} = this.props
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
				<div>
					<p>Code: {code}</p>
					<p>Name: {name}</p>
					<p>Address: {address}</p>
					<p>Coordinates:</p>
					<ul>
						<li>Latitude: {latitude}</li>
						<li>Longitude: {longitude}</li>
					</ul> 
				</div>
			);
		}

		
	}
}
export default ViewBuilding;
