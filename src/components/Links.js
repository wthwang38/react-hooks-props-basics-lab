import React from 'react'
// an <h3> element with the text of "Links"
// an <a> element with its href and text content set to URL of the user's Github link, passed down as a prop
// a second <a> element with its href and text content set to URL of the user's LinkedIn link, passed down as a prop
// Hint: make sure your <a> tags display the URL of the user's links as their text content so that it matches the demo image above
const Links = (props) => {
  return (
   <>
    <h3>Links</h3>
    <a href={props.github}>{props.github}</a>
    <a href={props.linkedin}>{props.linkedin}</a>
   </>
  )
}

export default Links