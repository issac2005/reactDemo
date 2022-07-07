import 'braft-editor/dist/index.css'
import './editor.scss'
import React from 'react'
import BraftEditor from 'braft-editor'
import { Input } from 'antd';

export default class BasicDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState(''), // 设置编辑器初始内容
    outputHTML: '<p></p>',
    title: ''
  }

  componentDidMount () {
    this.isLivinig = true
    if (this.props.text) {
        this.setState({
            editorState: BraftEditor.createEditorState(this.props.text)
        })
    }
    if (this.props.title) {
        this.setState({
            title: this.props.title
        })
    }
  }

  componentWillUnmount () {
    this.isLivinig = false
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
    const data = {title: this.state.title, richText: editorState.toHTML()}
    this.props.editorChange && this.props.editorChange(data);
  }


  // 标题输入框监听事件
  inputChange = (e) => {
    this.setState({title: e.target.value}, () => {
        const data = `<h3>${this.state.title}</h3>` + this.state.editorState.toHTML();
        this.props.editorChange(data);
    });
    
  }

  render () {

    const { editorState } = this.state;
    const controls = [
        'code', 'bold', 'italic', 'underline', 'text-color', 'text-align', 'list-ol', 'link'
      ]

    return (
      <div>
        <Input placeholder="Input post title" defaultValue={this.state.title} value={this.state.title} onChange={this.inputChange} />
        <div className="editor-wrapper">
          <BraftEditor
            value={editorState}
            controls={controls}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}