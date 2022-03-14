import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


class Form extends React.Component 
{
  constructor (props) {
    super (props);
    this.formSubmit = this.formSubmit.bind (this);
    
  }

  oneIsChecked ()
  {
    let i = 0;
    let boxes = document.getElementsByClassName("form-check-input");
    for ( i = 0; i < boxes.length; i++)
    {
      console.log (boxes[i].checked);
      if (boxes[i].checked )
      { 
        break;
      }
    }

    if (i !== boxes.length)
    {
      return true;
    }

    else
    {
      return false;
    }
  }

  dropboxIsDefault () 
  {
    let dropbox = document.getElementsByClassName("form-select")[0];

    if (dropbox.options[dropbox.selectedIndex].value === dropbox.options[0].value)
    {
      return true;
    }

    else
    {
      return false;
    }
  }

  formSubmit (event) 
  {
    let checkbox = document.getElementsByClassName("form-check-input")[0];
    let dropdown = document.getElementsByClassName("form-select")[0];
    if (!this.oneIsChecked () )
    {
      checkbox.setCustomValidity ("Select at least one");
      checkbox.reportValidity();
    }

    else
    {
      checkbox.setCustomValidity("");
    }

    if (this.dropboxIsDefault () )
    {
      dropdown.setCustomValidity("Select an option");
      dropdown.reportValidity();
    }

    else 
    {
      dropdown.setCustomValidity("");
    }
    
  }

  render() {
    return (
      <div id="form" className="container-fluid">
        <form action="/form" method="post" >
          <select name="genre" className="form-select" required>
            <option defaultValue>Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          
          <input type="text" name="name" className="form-control" placeholder="Enter your name" required/>
          <input type="number" name="age" className="form-control" placeholder="Enter your age" required/>
          
          <div class="form-check">
            <input type="checkbox" name="choices" className="form-check-input" value="first" id="first" />
            <label for="first" className="form-check-label">First</label>
          </div>
          
          <div class="form-check">
            <input type="checkbox" name="choices" className="form-check-input" value="second" id="second" />
            <label for="second" className="form-check-label">Second</label>
          </div>
          
          <div class="form-check">
            <input type="checkbox" name="choices" className="form-check-input" value="third" id="third" />
            <label for="third" className="form-check-label">Third</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.formSubmit}>Submit</button>
        </form>
      </div>

    );
  }
}


ReactDOM.render (<Form />, document.getElementById("root") );
