import React from 'react';

class BuilingList extends React.Component {
		//selectedUpdate = this.props.selectedUpdate;

	render() {
		//console.log('This is my directory file', this.props.data);
		
		const { data } = this.props;
		const filterText = this.props.filterText; 

		const buildingList = data
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
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
