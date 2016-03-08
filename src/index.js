import React, { Component, PropTypes } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

import Toolbar from './toolbar';

class MaterialDraft extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);
  }

  state = { editorState: EditorState.createEmpty() };

  handleChange = editorState => {
    const plainText = editorState.getCurrentContent().getPlainText();
    this.props.onChange(plainText);
    this.setState({ editorState });
  };

  focus = () => this.refs.editor.focus();

  handleKeyCommand = command => {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.handleChange(newState);
      return true;
    }
    return false;
  };

  render () {
    const { editorState } = this.state;
    return (
      <div onClick={this.focus}>
        <Toolbar />
        <Editor
          {...this.props}
          editorState={editorState}
          ref="editor"
          onChange={this.handleChange}
          handleKeyCommand={this.handleKeyCommand}
        />
      </div>
    );
  }
}

export default MaterialDraft;
