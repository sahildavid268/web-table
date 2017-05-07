import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import WebTable from './components/webTable';
import Layout from './lib/layout';

import '../sass/fonts.scss';
import '../sass/core.scss';

import Data from '../data/config.json';

class Main extends React.Component {
    render() {
        return (
            <WebTable webTable={this.props.webTable}/>
        );
    }
}

$.get(Data, (data) => {
    const app = document.getElementById('app');
    ReactDOM.render(<Main webTable={data} />, app);

    let layout = Layout.init();
    layout.layoutAdjustments();
});
