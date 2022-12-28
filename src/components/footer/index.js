import './index.css'
import {HomeOutlined, UserOutlined, SettingFilled} from '@ant-design/icons';

function Footer() {
    return (
      <div className="footer">
        <div className='left'>
            <HomeOutlined />
            首页
        </div>
        <div className='center'>
            <UserOutlined />
            联系人
        </div>
        <div className='right'>
            <SettingFilled />
            我的
        </div>
      </div>
    );
  }
  
  export default Footer;
  