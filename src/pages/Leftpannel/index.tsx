import './index.scss'


const Leftpannel = () => {
    return (
    <div className='leftpannel'>
        <div className='user-info-wrap'>人员</div>
        <div className='robot-detect-system'>
            <div className='device-online-panel'>
                <div className="item">门禁</div>
                <div className="item">监控</div>  
                <div className="item">机器人</div>
            </div>
            <div className='infrared-panel'>当天热成像</div>
            <div className='person-panel'>当天行人</div>
            <div className='face-panel'>当天人脸</div>
        </div>
    </div>
)
}

export default Leftpannel