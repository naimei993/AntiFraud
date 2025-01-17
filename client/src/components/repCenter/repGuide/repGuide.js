import React from 'react';
import {Button, message, Checkbox} from 'antd'
import { useNavigate } from 'react-router';

import './repguide.min.css'
const RepGuide = () => {
    const navigate = useNavigate()
    const [value, setValue] = React.useState(2);

  const onChange = e => {
    setValue(e.target.checked);
  };

  const isAgerr = ()=>{//判断用户是否选择同意按钮
        if(value){
            navigate('/admin/reporting_center/reporting_form')
        }
        else{
           message.error("请您先阅读条款",3)
        }
  }
  const donotAgree = ()=>{//不同意按钮
    navigate('/admin/home/index')
  }
    return (
        <div className='all'>
            <div className='repguide'>
            <div className='toptitle'>
                <h1 className='article'>
                    <span>举报须知</span>
                </h1>
                
            </div>
            <div className='repguidebody'>
                <p>1.您应当保证所投诉内容与事实一致。若您故意捏造和歪曲事实而造成的一切后果，由您自行承担。</p>
                <p>2.您应当允许本受理中心根据工作需要在保护您的个人权益的前提下，使用您的任何叙述。</p>
                <p>3.请您尽可能填写详实内容，以利于您投诉问题的解决。</p>
                <p>4.本平台将及时处理您投诉的有效内容。</p>
            </div>
            <div className='repbottom'>
                <div className='radio'>
                <Checkbox onChange={onChange}>我已知晓并同意上述规则</Checkbox>
                </div>
                <div className='repbutton'>
                    <Button size='large' type='primary' onClick={isAgerr}>同意</Button>
                    <Button size='large' onClick={donotAgree}>不同意</Button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default RepGuide;