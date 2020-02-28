import React from "react";

const Contact = () => {
    return (<div className="container">
        <div className="row">
            <div className="col-md col-lg-8 col-sm">
                <h2>Contact</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="John Smith"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Message">Message</label>
                        <textarea
                            className="form-control"
                            id="Message"
                            rows={6}
                            defaultValue={" "}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
          </button>
                </form>
            </div>
        </div>
    </div>)
}

export default Contact;