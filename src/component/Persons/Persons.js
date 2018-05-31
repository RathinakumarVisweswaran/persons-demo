import React, {Component} from 'react';
import Person from '../Person/Person';
import Radium from 'radium';

class Persons extends Component {
    state = ({
        persons: [{name: 'Rathinakumar', profession: 'softwareEngineer', age: 30, id: 2},
                 {name: 'Vijaykumar', profession: 'dentist', age: 28, id: 3},
                 {name: 'avanthi', profession: 'House Wife', age: 32, id: 1}],
        show: true});

    deletePerson = (delId) => {
        const persons = [...this.state.persons];
        const newPersons = persons.filter(person => person.id !== delId);
        console.log(delId, ' = ', newPersons);
        this.setState({persons: persons.filter(person => person.id !== delId)});
        console.log(this.state.persons);
    }

    togglePersons = () => {
        const doShow = this.state.show;
        this.setState({show: !doShow});
    }
    

    render() {

        const toggleColor = {
            backgroundColor: 'green',
            color: 'white',
            font: 'ingerit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        const classes = [];
        if (this.state.persons.length > 2) {
            classes.push('red');
        }

        if (this.state.persons.length === 1) {
            classes.push('red', 'bold');
        }

        let persons = null;

        if (this.state.show) {
            persons = (<div>
                {this.state.persons.map((person, index) => 
                <Person key={person.id}
                        name={person.name} 
                        profession={person.profession}
                        click={() => this.deletePerson(person.id)}/>)}
                </div>);
            toggleColor.backgroundColor = 'red';
            toggleColor[":hover"] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        return (<div>
            <button style={toggleColor} onClick={this.togglePersons}>Toggle</button>
            <p className={classes.join(' ')} > This is my siblings, with myself </p>
            {persons}
        </div>);
    }
}

export default Radium(Persons);