import React, { Component } from 'react';
import { Menu, Segment, Transition, Image, Icon } from 'semantic-ui-react';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible !== undefined ? props.visible : true
    };
  }

  handleClick() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    return (
      <>
        <Menu size='massive' inverted borderless attached='top' pointing>
          <Menu.Item header href='/'>Coop Control</Menu.Item>
          <Menu.Item active={this.state.visible}  onClick={() => this.handleClick()}>
            <Icon name='video camera' /> Live Cam
          </Menu.Item>
          <Menu.Item href='https://github.com/isometimescode/coopcontrol-react' target='_blank' position='right'>
            <Icon name='github' size='large' /> GitHub
          </Menu.Item>
        </Menu>

        <Transition visible={this.state.visible} animation='fade' duration={800} transitionOnMount unmountOnHide>
          <Segment attached tertiary>
            <Image centered src={process.env.REACT_APP_LIVE_CAM_URL} />
          </Segment>
        </Transition>
      </>
    );
  }
}

export default MainMenu;
