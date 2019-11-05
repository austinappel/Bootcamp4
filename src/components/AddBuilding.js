import React from 'react';

class AddBuilding extends React.Component {

    addBuilding = () => {
        const building = {
            id: this.props.dataLength,
            code: document.getElementById("codeValue").value,
            name: document.getElementById("nameValue").value,
            address: document.getElementById("addressValue").value,
            coordinates: {
                latitude: document.getElementById("latValue").value,
                longitude: document.getElementById("longValue").value
            }
        };

        this.props.lengthUpdate();
        this.props.addedUpdate(building);
    }

	render() {
		return (
            <form>
                <input
                    type="text"
                    placeholder="Building Code"
                    id="codeValue"
                />
                <input
                    type="text"
                    placeholder="Building Name"
                    id="nameValue"
                />
                <input
                    type="text"
                    placeholder="Address"
                    id="addressValue"
                />
                <input
                    type="text"
                    placeholder="Latitude"
                    id="latValue"
                />
                <input
                    type="text"
                    placeholder="Longitude"
                    id="longValue"
                />
                <input
                    type="button"
                    value="Add Building"
                    onClick={this.addBuilding}
                />
            </form> 
        )
	}
}
export default AddBuilding;
