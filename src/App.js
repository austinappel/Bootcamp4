import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      removedBuildings: [],
      addedBuildings: [],
      dataLength: 149,
      dataState: this.props.data.slice()
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  removedUpdate(id) {
    var newArray = this.state.removedBuildings; 
    newArray.push(id);
    this.setState({
      removedBuildings: newArray
    })
  }

  addedUpdate(building) {
    var newArray = this.state.addedBuildings;
    newArray.push(building);
    this.setState({
      addedBuildings: newArray
    })
  }

  lengthUpdate() {
    this.setState({
      dataLength: this.state.dataLength + 1
    })
  }

  dataStateUpdate(newBuilding) {
    var {data}  = this.props;
    var newData = data.slice();
    newData.push(newBuilding);

    this.setState({
		  dataState: newData
    })

    console.log("New data state: ", this.state.dataState)
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div class="container">
            <div class="row">
              <div class="col">
                <table class="table table-responsive table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Code</th>
                      <th scope="col">Building</th>
                    </tr>
                  </thead>
                  <tbody>
                    <BuildingList
                      data={this.props.data}
                      filterText={this.state.filterText}
                      selectedUpdate={this.selectedUpdate.bind(this)}
                      removedBuildings={this.state.removedBuildings}
                      addedBuildings={this.state.addedBuildings}
                      dataStateUpdate={this.dataStateUpdate.bind(this)}
                      dataState={this.state.dataState}
                    />
                  </tbody>
                </table>
              </div>
              <div class="col">
                <ViewBuilding
                  data={this.props.data}
                  selectedBuilding={this.state.selectedBuilding}
                  dataState={this.state.dataState}
                />
                <RemoveBuilding
                  removedUpdate={this.removedUpdate.bind(this)}
                  selectedBuilding={this.state.selectedBuilding}
                  dataState={this.props.dataState}
                /> 
                <AddBuilding
                  addedBuildings={this.addedBuildings}
                  addedUpdate={this.addedUpdate.bind(this)}
                  dataLength={this.state.dataLength}
                  lengthUpdate={this.lengthUpdate.bind(this)}
                  dataStateUpdate={this.dataStateUpdate.bind(this)}
                />
              </div>
            </div>
            <div class="row">
              <Credit />
            </div>
          </div>
          
        </main>
      </div>
    );
  }
}

export default App;
