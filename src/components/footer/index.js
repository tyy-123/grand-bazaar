import './index.css'
import { HomeOutlined, UserOutlined, SettingFilled } from '@ant-design/icons';

function Footer(props) {
  const handleJump = (url) => {
    // props.history.pushState(url);
    console.log(props);
  }
  return (
    <div className="footer">
      <div className='left'  onClick={() => handleJump('/home')}>
        <HomeOutlined />
        首页
      </div>
      <div className='center' onClick={() => handleJump('/auto')}>
        <UserOutlined />
        联系人
      </div>
      <div className='right' onClick={() => handleJump('/moments')}>
        <SettingFilled />
        我的
      </div>
    </div>
  );
}

export default Footer;
