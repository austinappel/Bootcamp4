import React from 'react';

class BuilingList extends React.Component {

	render() {
		
		var data = this.props.dataState.slice()

		const filterText = this.props.filterText; 

		const buildingList = data
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				if (!this.props.removedBuildings.includes(directory.id))
				return (
					<tr key={directory.id} onClick={() => this.props.selectedUpdate(directory.id)}>
						<td>{directory.code}</td>
						<td>{directory.name}</td>
					</tr>
				);
			});

		return buildingList;
	}
}
export default BuilingList;
