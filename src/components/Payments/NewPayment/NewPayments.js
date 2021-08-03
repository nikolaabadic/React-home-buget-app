import React, { Fragment } from 'react'
import './NewPayment.css'

const newPayment = () => {
    return (
        <Fragment>
            <h1 className="display-4 mt-3">New payment</h1>
            <hr />
            <div class="row">
                <form class="payment">
                    <div>
                        <div class="form-group">
                            <label class="control-label">Date</label>
                            <input readonly type="date"  class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">From account</label>
                            <input class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Recipient Account number</label>
                            <input class="form-control" />
                        </div>
                    </div>
                    <div>
                        <div class="form-group">
                            <label class="control-label">Purpose</label>
                            <input class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Model</label>
                            <input class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Reference Number</label>
                            <input class="form-control" />
                        </div>
                    </div>
                    <div class="final-column">
                        <div class="form-group">
                            <label class="control-label">Amount</label>
                            <input class="form-control" type="number" min="0"/>
                        </div>
                        <div class="form-group create">
                            <input type="submit" value="Create" class="btn btn-primary" />
                        </div>

                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default newPayment