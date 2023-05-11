import React, { Component , Fragment} from "react";
export default class Menu extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        menuOpen: false
      }
    }
  
    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})  
    }
    
    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
      this.setState({menuOpen: false})
    }
  
    toggleMenu () {
      this.setState(state => ({menuOpen: !state.menuOpen}))
    }
  
    render () {
      return (
        <div>
          <Menu 
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            <a onClick={() => this.closeMenu()}>Home</a>
            <a onClick={() => this.closeMenu()}>About</a>
            <a onClick={() => this.closeMenu()}>Contact</a>
            <a onClick={() => this.closeMenu()}>Settings</a>
          </Menu>
        </div>
      )
    }
  }