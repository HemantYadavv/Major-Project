import React from 'react'

const Checkout = () => {
    return (
        <div className="container">
            <main>
                <div className="rows">
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-4 mt-3 fa-lg fw-bold">Billing address</h4>
                        <form>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder=""
                                        defaultValue=""
                                        required=""
                                    />
                                    <div className="invalid-feedback">Valid first name is required.</div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder=""
                                        defaultValue=""
                                        required=""
                                    />
                                    <div className="invalid-feedback">Valid last name is required.</div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="phonenumber" className="form-label">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phonenumber"
                                        placeholder=""
                                        defaultValue=""
                                        required=""
                                    />
                                    <div className="invalid-feedback">Valid first name is required.</div>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor=" alternatenumber" className="form-label">
                                        Alternate Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="alternatenumber"
                                        placeholder=""
                                        defaultValue=""
                                        required=""
                                    />
                                    <div className="invalid-feedback">Valid last name is required.</div>
                                </div>
                                
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">
                                        Email <span className="text-muted">(Optional)</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="you@example.com"
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        placeholder="1234 Main St"
                                        required=""
                                    />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">
                                        Address 2 <span className="text-muted">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address2"
                                        placeholder="Apartment or suite"
                                    />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">
                                        Country
                                    </label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>India</option>
                                    </select>
                                    <div className="invalid-feedback">Please select a valid country.</div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">
                                        State
                                    </label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Choose...</option>
                                        <option>Uttar Pradesh</option>
                                    </select>
                                    <div className="invalid-feedback">Please provide a valid state.</div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">
                                        Zip
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="zip"
                                        placeholder=""
                                        required=""
                                    />
                                    <div className="invalid-feedback">Zip code required.</div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">
                                    Shipping address is the same as my billing address
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">
                                    Save this information for next time
                                </label>
                            </div>

                            <hr className="my-4" />
                            <button className="w-100 btn btn-warning btn-lg" type="submit">
                                Continue to Payment
                            </button>
                        </form>
                    </div>

                </div>

            </main>

            <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">© 2024 Mitti Mahal</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="#">Privacy</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Terms</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">Support</a>
                    </li>
                </ul>
            </footer>

        </div>
    )
}

export default Checkout