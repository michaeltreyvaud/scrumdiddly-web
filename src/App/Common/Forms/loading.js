import React from 'react';
import ReactLoading from 'react-loading';
import Styles from './loading.styles';
import AppTheme from '../../../Themes';

const Loading = () => (
  <div style={Styles.loading}>
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
