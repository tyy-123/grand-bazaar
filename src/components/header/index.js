import './index.css';

function Header(props) {
    return (
      <div className='header'>
        <div className="left">
          {props.leftNode}
        </div>
        <div className="center">
          {props.centerNode}
        </div>
        <div className="right">
          {props.rightNode}
        </div>
      </div>
    );
  }
  
  export default Header;
  