import React from 'react';

class BuilingList extends React.Component {

	render() {
		//console.log('This is my directory file', this.props.data);
		
		//var { data } = this.props;
		
		//var newData = data.slice();
		//newData = newData.concat(this.props.addedBuildings)

		//data = newData;
		
		

		//var newData = this.props.data;
		//newData.push(this.props.addedBuildings);

		//console.log("To add: ", this.props.addedBuildings);
		console.log("New Data: ", this.props.dataState);
		
		//data = newData;

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
						<td>{directory.code} </td>
						<td> {directory.name} </td>
					</tr>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
