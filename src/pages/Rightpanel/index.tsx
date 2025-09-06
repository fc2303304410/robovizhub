import './index.scss'

const Rightepannel = () => {
    return (
    <div className="rightpannel">
        <div className="background-entry">后台管理</div>
        <div className="rightctxwrap">
            <div className="alarm-info">
                <div className='real-chart'></div>
                <div className='warn-count-wrap'></div>
                <div className='real-alarm-bar'></div>
            </div>
            <div className="plate-panel">当天车牌</div>
        </div>
    </div>
)
}

export default Rightepannel