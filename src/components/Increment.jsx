import React from 'react'
import { memo } from 'react';
function Increment({increment}) {
    console.log("increment is render");
  return (
    <div>
 {increment}
    </div>
  )
}

export default memo(Increment)
