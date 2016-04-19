/*
  Index
    UserApp
      UserLoginFormData
        UserLoginForm
    UserAuth
*/

var React = require('react');

function UserLoginForm(props) {

  var categoryList = props.categories.map(cat => (
    <option value={ cat._id }>{ cat.name }</option>
    ));

        return (
            <div className="jumbotron">
              <div className="container">
                <form onSubmit={ props.submitUserToServer } >
                    <legend>{props.login ? 'Log In' : 'Sign Up'}</legend>
                  
                    <div className="form-group">
                      <label>Email</label>
                      <input onChange={ props.onEmailChange } name="email" type="email" className="form-control" id=""  />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input onChange={ props.onPasswordChange } name="password" type="password" className="form-control" id="" />
                    </div>
                  
                    {props.login ? null : 
                    <div>
                      <div className="form-group">
                        <label>User Name</label>
                        <input onChange={ props.onUserNameChange } name="username" type="username" className="form-control" id=""  />
                      </div>

                      <div className="form-group">
                        <label>Phone</label>
                        <input onChange={ props.onPhoneChange } name="phone" type="phone" className="form-control" id=""  />
                      </div>

                      <div className="form-group">
                        <label>User Image</label>
                        <input onChange={ props.onImageChange } name="image" type="text" className="form-control" id=""  />
                      </div>

                      <div className="form-group">
                        <label>Category</label>
                        <select onChange={props.onCategoryChange} className="form-control">
                        <option>Please Choose</option>
                          {categoryList}
                        </select>
                      </div>
                    </div>
                    }

                  
                    <button type="submit" className="btn btn-primary">{props.login ? 'Log In' : 'Sign Up'}</button>
                  </form>
              </div>
            </div>
            )
};

module.exports = UserLoginForm;