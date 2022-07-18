import React from "react"
import "./Marker.css"

const Marker = (props: any) => {
  const { color, name, id, zIndex } = props
  return (
    <div>
      <div
        className="pin bounce"
        style={{ backgroundColor: color, cursor: "pointer", zIndex: zIndex}}
        title={name}
      />
      <div className="pulse" />
    </div>
  )
}

export default Marker
