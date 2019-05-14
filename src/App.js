import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtTextBox: '',
      txtTextArea: '',
      ddlDropDown: 2,
      rdoRadio: 'rdo2',
      chkCheckBox: true
    };
  }

  handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(`handleOnSubmit data`, this.state);
  };

  handleOnReset = (e) => {
    this.setState({
      txtTextBox: '',
      txtTextArea: '',
      ddlDropDown: 1,
      rdoRadio: '',
      chkCheckBox: false
    });
  };

  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Form</div>
              <div className="card-body">
                <form onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label>Text Box</label>
                    <input
                      type="text"
                      name="txtTextBox"
                      className="form-control"
                      value={this.state.txtTextBox}
                      onChange={this.handleOnChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Text Area</label>
                    <textarea
                      className="form-control"
                      name="txtTextArea"
                      value={this.state.txtTextArea}
                      rows="3"
                      onChange={this.handleOnChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Drop Down List</label>
                    <select className="form-control" name="ddlDropDown" value={this.state.ddlDropDown} onChange={this.handleOnChange}>
                      <option value={0}>Option 1</option>
                      <option value={1}>Option 2</option>
                      <option value={2}>Option 3</option>
                    </select>
                  </div>

                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rdoRadio"
                        value="rdo1"
                        onChange={this.handleOnChange}
                        checked={this.state.rdoRadio === 'rdo1'}
                      />
                      Radio 1
                    </label>
                    &nbsp; &nbsp;
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rdoRadio"
                        value="rdo2"
                        onChange={this.handleOnChange}
                        checked={this.state.rdoRadio === 'rdo2'}
                      />
                      Radio 2
                    </label>
                  </div>

                  <br />
                  <br />

                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="chkCheckBox"
                        checked={this.state.chkCheckBox}
                        onChange={this.handleOnChange}
                      />
                      Display value
                    </label>
                  </div>

                  <br />

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-success" onClick={this.handleOnReset}>
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
