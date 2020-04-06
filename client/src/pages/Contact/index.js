import React from "react";

// const Contact = () => {

//     return (
{/* <div className="container">
    <div className="row">
        <div className="col-md col-lg-8 col-sm">
            <h2>Contact</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="formGroupContactInput">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupContactInput"
                        placeholder="John Smith"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ContactInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="ContactInputEmail1"
                        placeholder="Contact@gmail.com"
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
</div> */}
//     )
// }

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div className="container">
                <div className="row">
                <div className="col-md col-lg-8 col-sm">
                    <form
                        onSubmit={this.submitForm}
                        action="https://formspree.io/xdolerky"
                        method="POST"
                    >
                        <label htmlFor="formGroupContactInput">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="formGroupContactInput"
                            placeholder="John Smith"
                        />
                        <label htmlFor="ContactInputEmail1">Email address</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="ContactInputEmail1"
                            placeholder="Contact@gmail.com"
                        />
                        <label htmlFor="Message">Message</label>
                        <textarea
                            name="message"
                            className="form-control"
                            id="Message"
                            rows={6}
                            defaultValue={" "}
                        />
                        <br></br>
                        {status === "SUCCESS" ? <p>Thanks!</p> : <button type="submit" className="btn btn-primary">
                            Submit
          </button>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </form>
                </div></div>
            </div>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}
