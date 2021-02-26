import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';

import Breadcrumb from './Breadcrumb.jsx';

export default class Categories extends Component {
    constructor() {
        super();

        this.state = {
            array: []
        };
    }

    componentDidMount() {
        // get the categories from mongo
        axios.get('/api/articles')
            .then(response => {
                this.setState(
                    { array: response.data }
                );
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderArticles() {
        return _.map(this.state.array, (item, i) => {
            return (
                <div key={i} className="col-sm-6 mb-3">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{item}</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus felis vestibulum neque ultrices, in dignissim dui egestas. Mauris sed aliquam sapien, sit amet ultrices erat.</p>
                        <NavLink exact to={`/articles/${i}/`}><li className="btn btn-primary">View more in {item}</li></NavLink>
                    </div>
                    </div>
                </div>
                
            );
        });
    }

    renderBreadcrumbs() {
        return (
            <Breadcrumb currentPage="Articles" />
        );
    }

    render() {
        return (
            <div className="article-listing">
                {this.renderBreadcrumbs()}
                <h1>Articles</h1>
                <div className="row">
                    {this.renderArticles()}
                </div>
            </div>
        );
    }
}
