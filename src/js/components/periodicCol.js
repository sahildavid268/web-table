import React from 'react';
import ReactDOM from 'react-dom';
import PeriodicGrid from './periodicGrid';

class PeriodicCol extends React.Component {
    render() {
        const grid = [];
        let i = 0;
        this.props.col.forEach(function(elements) { 
            grid.push(<PeriodicGrid elements={elements} key={i} />);
            i++;
        });
        
        return (
            <div className="col">
                {grid}
            </div>
        );
    }
}

export default PeriodicCol