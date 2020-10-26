import React from 'react';
import "./Calculator.css";

class Calculator extends React.Component {
  state = {
    transactionsFile: null,
    transactionFileValid: false,
    scheduleFile: null,
    scheduleFileValid: false,
  };

  onTransactionChange = event => {
    let val = false;
    let file = null;
    if (event.target.files[0]) {
      file = event.target.files[0];
      let fileName = file.name.toString();
      val = (fileName.endsWith("xls") || fileName.endsWith("xlsx") || fileName.endsWith("xlsm") ||
      fileName.endsWith("xlsb") || fileName.endsWith("odf") || fileName.endsWith("ods")
      || fileName.endsWith("odt"));
    }
    this.setState({ transactionsFile: file });
    this.setState({ transactionFileValid: val });
  }; 

  onScheduleChange = event => {
    let val = false;
    let file = null;
    if (event.target.files[0]) {
      file = event.target.files[0];
      let fileName = file.name.toString();
      val = (fileName.endsWith("xls") || fileName.endsWith("xlsx") || fileName.endsWith("xlsm") ||
      fileName.endsWith("xlsb") || fileName.endsWith("odf") || fileName.endsWith("ods")
      || fileName.endsWith("odt"));
    }
    this.setState({ scheduleFile: file });
    this.setState({ scheduleFileValid: val });
  };

  buttonOnClick(transactionFile, scheduleFile) {
    console.log(transactionFile)
    console.log(scheduleFile)
  }

  render() {
    return (
      <div className = "Calculator">
        <header className = "Calculator-header">
          <p>Meantime Calculator</p>
          <p className = "Calculator-p">Input transactions Excel sheet:
            <input className = {((this.state.transactionsFile && this.state.transactionFileValid) 
            || (!this.state.transactionsFile)) ? "Calculator-input" : "Calculator-error-input"} 
            type = "file" onChange={this.onTransactionChange}/>
          </p>
          <p className = "Calculator-p">Input schedule Excel sheet: 
            <input className = {((this.state.scheduleFile && this.state.scheduleFileValid) 
            || (!this.state.scheduleFile)) ? "Calculator-input" : "Calculator-error-input"} 
            type = "file" onChange={this.onScheduleChange}/>
          </p>
          {this.state.transactionFileValid && this.state.scheduleFileValid && <button onClick ={this.buttonOnClick(this.state.transactionsFile, this.state.scheduleFile)}>Calculate</button>}
        </header>    
      </div>
    );
  }
}
export default Calculator;