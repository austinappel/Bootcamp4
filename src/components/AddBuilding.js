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

        this.props.dataStateUpdate(building);
        
    }

	render() {
		return (
            <form class="input-form">
                <div class="form-group">
                    <label for="codeValue">Code</label>
                    <input type="text" class="form-control" placeholder="Enter code" id="codeValue" />
                </div>
                <div class="form-group">
                    <label for="nameValue">Building name</label>
                    <input type="text" class="form-control" placeholder="Enter name of buiding" id="nameValue" />
                </div>
                <div class="form-group">
                    <label for="addressValue">Address</label>
                    <input type="text" class="form-control" placeholder="Enter code" id="addressValue" />
                </div>
                <div class="form-group">
                    <label>Coordinates</label>
                    <input type="text" class="form-control" placeholder="Latitude" id="latValue" />
                    <input type="text" class="form-control" placeholder="Longitude" id="longValue" />
                </div>
                <div class="text-center">
                    <input
                        type="button"
                        class="btn"
                        value="Add Building"
                        onClick={this.addBuilding}
                    />
                </div>
            </form>
                
                
                
                
        )
	}
}
export default AddBuilding;
