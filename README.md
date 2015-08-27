# react-assign

> Update React state without boilerplate

Lightweight shortcut for update the **state** of a React class without having to define a function handler for it.

## Problem

Let's say you want to update 2 values whenever the user write something in an input, tipically you have to define 2 handlers for update their values:

```javascript
  var React = require('react');

  React.createClass({
    getInitialState() {
      return {
        username: "",
        password: ""
      };
    },
    
    updateName(e) {
      var newName = e.target.value;

      this.setState({
        "username": newName
      });
    },

    updatePass(e) {
      var newPass = e.target.value;

      this.setState({
        "password": newPass
      });
    },

    render() {
      <div>
        <input type="text" onChange={this.updateName}/>
        <input type="password" onChange={this.updatePass}/>
      </div>
    }
  });
```

## Solution

Use **react-assign**:

```javascript
  var React = require('react');
  var assignValue = require('react-assign');

  React.createClass({
    getInitialState() {
      return {
        username: "",
        password: ""
      };
    },
    
    render() {
      <div>
        <input type="text" onChange={assignValue(this, "username")}/>
        <input type="password" onChange={assignValue(this, "password")}/>
      </div>
    }
  });
```

## API

#### assignValue(reactClassInstance, propertyName)

##### reactClassInstance

Type: `Object`

Instance to set the value

##### propertyName

Type: `String`

State property which will be updated

## Conclusion

**React Assign** does that work for you and allows you to remove a lot of boilerplate from your classes.