import { useEffect, useState } from 'react';
import classes from './Dialog.module.css';
export default function Dialog({handleClose,visible}:any) {
    const [opacity,setOpacity] = useState(0);
    const handleClosed = () =>{
        console.log("Closed");
        handleClose();
    }

    return (
        
        <div className={visible? `${classes.dialogoverlay} ${classes.visible}`: `${classes.dialogoverlay}`}>
            <div className={classes.background}></div>
            <div className={classes.dialog}>
                <div className={classes.contentBox}>
                    <div className={classes.media}></div>
                    <div className={classes.content}>
                        <div className={classes.titleBar}>
                            <div className={classes.title}>Test Dialog</div>
                            <button className={classes.closeBtn} onClick={handleClosed}>X</button>
                        </div>
                        <div className={classes.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
}