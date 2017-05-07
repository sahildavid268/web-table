import React from 'react';
import ReactDOM from 'react-dom';

class PeriodicGrid extends React.Component {
    render() {
        const elementObj = this.props.elements;
        const gridClasses = 'grid '+elementObj.type;
        return (
            <div className={gridClasses}>
                <div className="name-tag">
                    <strong>{elementObj.element}</strong>
                    <span>{elementObj.name}</span>
                </div>
                <div className="element-parent">
                    {elementObj.type}
                </div>
            </div>
        );
    }
}

export default PeriodicGrid