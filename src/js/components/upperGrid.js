import React from 'react';
import ReactDOM from 'react-dom';
import PeriodicCol from './periodicCol';

class UpperGrid extends React.Component {
    render() {
        const rows = [];
        let i = 0;
        this.props.data.forEach(function(col) {
            rows.push(<PeriodicCol col={col} key={i} />);
            i++;
        });

        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default UpperGrid