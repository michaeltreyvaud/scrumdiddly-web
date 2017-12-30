import React from 'react';
import ReactLoading from 'react-loading';
import AppTheme from '../../../Themes';

const Style = {
  backgroundColor: AppTheme.white,
  height: '40px',
  width: '100%',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  border: 'none',
  borderRadius: '5px',
  marginTop: '10px',
};

const Loading = () => (
  <div style={Style}>
    <ReactLoading
      type="spin"
      color={AppTheme.pink}
      delay={0}
      height="30px"
      width="30px"
    />
  </div>
);

export default Loading;
