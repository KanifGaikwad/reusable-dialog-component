import React, {useState} from "react";
import Dialog from "./Dialog";

function App() {
    const [data, setData] = useState({});
    let eventSource = new EventSource('http://localhost:8080/workOrder/react');
    eventSource.onmessage = function (event) {
        let parse = JSON.parse(event.data);
        data[parse.id] = parse;
        setData({...data})
    }
    const dialogProps = {
        title: 'A Dialog for React Testing',
        footerActions: [
            {
                name: 'Save',
                backGroundColor: '#D8E00F',
                callback: () => {
                    alert('Save Clicked');
                }
            }, {
                name: 'Cancel',
                backGroundColor: '#D9E4EA',
                callback: () => {

                }
            }, {
                name: 'Revert',
                backGroundColor: '#D9E4EA',
                callback: () => {

                }
            }, {
                name: 'Recalculate',
                backGroundColor: '#D9E4EA',
                callback: () => {

                }
            }
        ]
    }

    function renderDataObject(tar){
        let returnData = [];
        Object.keys(tar).forEach(value => {
            returnData.push(
                <div className='work-order-status'>
                    <div className='work-order-content-div'>
                        {tar[value].id}
                    </div>
                    <div className='work-order-content-div'>
                        {tar[value].number}
                    </div>
                    <div className='work-order-content-div'>
                        {tar[value].status}
                    </div>
                </div>
            )
        })
        return returnData;
    }


    return (
        <Dialog {...dialogProps}>
            <div className='work-order-status'>
                <div className='work-order-content-div-header'>
                    {'ID'}
                </div>
                <div className='work-order-content-div-header'>
                    {'NUMBER'}
                </div>
                <div className='work-order-content-div-header'>
                    {'STATUS'}
                </div>
            </div>
            {renderDataObject(data)}
        </Dialog>
    );
}

export default App;