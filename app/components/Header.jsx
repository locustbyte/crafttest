import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Generic from './Generic.jsx'

export default class Header extends Component {
  constructor() {
    super();
    this._generic = new Generic();
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#"><img className="logo" src="data:image/png;base64,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" alt="Website Name" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" exact to="/" activeClassName="active" onClick={e => this._generic.HideMenu(e)}>Item 1</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/articles" activeClassName="active" onClick={e => this._generic.HideMenu(e)}>Item 2</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/articles" activeClassName="active" onClick={e => this._generic.HideMenu(e)}>Item 3</NavLink>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" id="header-search" type="text" placeholder="Enter a search term..." aria-label="Enter a search term..." />
              <button className="btn btn-outline-success my-2 my-sm-2" type="submit" onClick={e => this._generic.Search(e)}>Search</button>
            </form> */}
          </div>
        </nav>
      </header>
    )
  }
}