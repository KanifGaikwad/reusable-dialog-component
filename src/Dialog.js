import React, {useState} from "react";

function Dialog(props) {
    return (
        <div>
            <div className='pop-up-css-background'>
            </div>
            <div className='pop-up-css'>
                <div className='pop-up-header'>
                    <div className='pop-up-title'>
                        <p className='pop-up-title-font'>{props.title}</p>
                    </div>
                </div>
                <div className='pop-up-content'>
                    {props.children}
                </div>
                <div className='pop-up-footer'>
                    {
                        props.footerActions.map(action => {
                            return (
                                <input className='pop-up-footer-inputs'
                                       style={{backgroundColor: action.backGroundColor}}
                                       type={"button"}
                                       value={`${action.name}`}
                                       onClick={() => action.callback()}/>
                            )
                        })
                    }`
                </div>
            </div>
        </div>
    )

}

export default Dialog;