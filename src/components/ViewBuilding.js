import React from 'react';

class ViewBuilding extends React.Component {

	render() {
		const {data} = this.props
		const selectedBuilding = this.props.selectedBuilding
		
	

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
			// Get all the info to display
			const code = data[selectedBuilding-1].code
			const name = data[selectedBuilding-1].name
			const address = data[selectedBuilding-1].address
			let longitude = ''
			let latitude = ''
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
