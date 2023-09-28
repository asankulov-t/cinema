import { Message } from 'primereact/message';
import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../Store/Store";

const ErrorHandler = () => {
    let status=useSelector<RootState>(state => state.rootReducer.status.status)
    let message=useSelector<RootState>(state => state.rootReducer.status.message)
    return(
        <div>
            {status=='Failed'?<Message severity="error" text={message+''} />:null}
        </div>
    )
};

export default ErrorHandler;