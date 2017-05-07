import React from 'react';
import ReactDOM from 'react-dom';
import UpperGrid from './upperGrid';

class WebTable extends React.Component {
    render() {
        return (
            <div className="web-table" style={{ height: window.innerHeight }}>
                <div className="upper-grid">
                    <UpperGrid data={this.props.webTable.upper}/>
                </div>
                <div className="lower-grid">
                    Coming Soon...
                </div>
            </div>
        );
    }
}

export default WebTable