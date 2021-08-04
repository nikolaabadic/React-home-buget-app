import React from 'react'

const input = (props) => {
    return(
        <div className="form-group">
            <label className="control-label">{props.label}</label>
            <input className="form-control" 
                value={props.value} 
                onChange={props.changed}
                type={props.type}
                min={props.min}
                required/>
        </div>
    )
}

export default input