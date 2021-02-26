import React, { Component } from 'react';

import Breadcrumb from './Breadcrumb.jsx';

export default class Home extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <form className="calc-body">
                            <h2 className="title">The QuickBooks Calculator</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Income from sales</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Commissions</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Construction</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Other Income</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                </div>
                            </div>
                            <div className="social-icons">
                                <p>Share my results</p>
                                icons here
                            </div>
                        </form>


                    </div>
                    <div className="col-md-3">
                        <div className="calculation">
                            <div className="row">
                                <div className="col-md-12">
                                    Total
                                </div>
                                <div className="col-md-12 green-bgnd">
                                    <div className="calc-bgnd">
                                        £200
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="faqs">

                    <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">


                        <div class="card">


                            <div class="card-header" role="tab" id="headingOne1">
                                <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                    aria-controls="collapseOne1">
                                    <h5 class="mb-0">
                                        Collapsible Group Item #1 <i class="fas fa-angle-down rotate-icon"></i>
                                    </h5>
                                </a>
                            </div>


                            <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                                data-parent="#accordionEx">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                    labore sustainable VHS.
      </div>
                            </div>

                        </div>

                        <div class="card">


                            <div class="card-header" role="tab" id="headingTwo2">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                                    aria-expanded="false" aria-controls="collapseTwo2">
                                    <h5 class="mb-0">
                                        Collapsible Group Item #2 <i class="fas fa-angle-down rotate-icon"></i>
                                    </h5>
                                </a>
                            </div>


                            <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                                data-parent="#accordionEx">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                    labore sustainable VHS.
      </div>
                            </div>

                        </div>

                        <div class="card">


                            <div class="card-header" role="tab" id="headingThree3">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                                    aria-expanded="false" aria-controls="collapseThree3">
                                    <h5 class="mb-0">
                                        Collapsible Group Item #3 <i class="fas fa-angle-down rotate-icon"></i>
                                    </h5>
                                </a>
                            </div>


                            <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
                                data-parent="#accordionEx">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                    labore sustainable VHS.
      </div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>

        );
    }
}
