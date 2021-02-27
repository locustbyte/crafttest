import React, { Component } from 'react';

import Breadcrumb from './Breadcrumb.jsx';

export default class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            income: 0,
            commission: 0,
            construction: 0,
            other: 0,
            total: 0
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleIncomeChange = this.handleIncomeChange.bind(this);
        this.handleCommissionChange = this.handleCommissionChange.bind(this);
        this.handleConstructionChange = this.handleConstructionChange.bind(this);
        this.handleOtherChange = this.handleOtherChange.bind(this);
        //this.handleTotalChange = this.handleTotalChange.bind(this);
    }

    componentWillMount() { }

    resetInput = (e) => {
        e.target.value = "";
    }

    handleIncomeChange(event) {
        this.setState(...this.state, { income: event.target.value });
    }

    handleCommissionChange(event) {
        this.setState(...this.state, { commission: event.target.value });
    }

    handleConstructionChange(event) {
        this.setState(...this.state, { construction: event.target.value });
    }

    handleOtherChange(event) {
        this.setState(...this.state, { other: event.target.value });
    }

    handleTotalChange(event) {
        //this.setState({value: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        let pounds = this.state.pounds;
        let ppp = this.state.ppp;
        let total = ppp * pounds;
        console.log(total);
        const self = this;
        axios.post('/api/add/transaction', {
            pounds: pounds,
            ppp: ppp,
            total: total
        })
            .then(function (response) {
                console.log(response);
                self.setState({ pounds: '', ppp: '', total: '' });
                // $("#pounds").val('');
                // $("#ppp").val('');
                // $("#total").val('');
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }

    render() {
        const total = parseInt(this.state.income) + parseInt(this.state.commission) + parseInt(this.state.construction) + parseInt(this.state.other);
        return (
            <div className="container">
                <form className="container" onSubmit={this.handleFormSubmit}>
                    <div className="row">
                        <div className="col-md-9 calc-body">
                            <h2 className="title">The QuickBooks Calculator</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Income from sales</label>
                                        <input type="text" name="income" id="income" className="form-control" placeholder="£0" onChange={this.handleIncomeChange} required onFocus={(e) => this.resetInput(e)} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Commissions</label>
                                        <input type="text" name="commission" id="commission" className="form-control" placeholder="£0" onChange={this.handleCommissionChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Construction</label>
                                        <input type="text" name="construction" id="construction" className="form-control" placeholder="£0" onChange={this.handleConstructionChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Other Income</label>
                                        <input type="text" name="other" id="other" className="form-control" placeholder="£0" onChange={this.handleOtherChange} required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 total-bk">
                            <p className="title">Total</p>
                            <div className="content">£{total}</div>
                        </div>
                    </div>


                </form>
                <div className="row faq-content">
                    <div className="col-md-9">
                        <h4 className="title">
                            Frequently Asked Questions
                        </h4>
                        <div className="faqs">

                            <div className="faq-accordion-content accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">


                                <div className="card">


                                    <div className="card-header" role="tab" id="headingOne1">
                                        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                            aria-controls="collapseOne1">
                                            <p className="mb-0 accordion-item">
                                                Collapsible Group Item #1 <i className="fa fa-angle-down rotate-icon"></i>
                                            </p>
                                        </a>
                                    </div>


                                    <div id="collapseOne1" className="collapse" role="tabpanel" aria-labelledby="headingOne1"
                                        data-parent="#accordionEx">
                                        <div className="card-body">
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

                                <div className="card">


                                    <div className="card-header" role="tab" id="headingTwo2">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                                            aria-expanded="false" aria-controls="collapseTwo2">
                                            <p className="mb-0 accordion-item">
                                                Collapsible Group Item #2 <i className="fa fa-angle-down rotate-icon"></i>
                                            </p>
                                        </a>
                                    </div>


                                    <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                                        data-parent="#accordionEx">
                                        <div className="card-body">
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

                                <div className="card">


                                    <div className="card-header" role="tab" id="headingThree3">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                                            aria-expanded="false" aria-controls="collapseThree3">
                                            <p className="mb-0 accordion-item">
                                                Collapsible Group Item #3 <i className="fa fa-angle-down rotate-icon"></i>
                                            </p>
                                        </a>
                                    </div>


                                    <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
                                        data-parent="#accordionEx">
                                        <div className="card-body">
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
                </div>
            </div>
        )
    }
}
