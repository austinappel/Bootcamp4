import React from 'react';

class RemoveBuilding extends React.Component {

    test() {

    }

	render() {
		return (
            <form>
                <input
                    class="btn"
                    type="button"
                    value="Remove Building"
                    onClick={() => this.props.removedUpdate(this.props.selectedBuilding)}
                />
            </form> 
        )
	}
}
export default RemoveBuilding;
