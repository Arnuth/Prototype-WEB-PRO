import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const ActiveDay = ({ id, name }) => {
    const [isShow, setIsShow] = useState(false);

    const handleToggle = () => {
      setIsShow(!isShow);
    };


    return (
        <li key={id} onClick={handleToggle} className={isShow ? "active" : ""}>
           <Button component="a" variant="contained"> {name} </Button>
        </li>
    )
}

export default ActiveDay

