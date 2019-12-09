import React, { Component } from 'react'
import HeadingContent from "./HeadingContent"

class Content extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
            <HeadingContent />
            <HeadingContent />
            <HeadingContent />
        </div>
      </div>
    )
  }
}

export default Content
