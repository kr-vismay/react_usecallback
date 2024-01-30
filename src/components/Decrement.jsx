import React from 'react'
import { memo } from 'react';
function Decrement({decrement}) {
    console.log("decrement is render");
  return (
    <div>{decrement}</div>

  )
}

export default memo(Decrement)