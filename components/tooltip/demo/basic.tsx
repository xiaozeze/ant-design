import React from 'react';
import { Tooltip } from 'antd';

const App: React.FC = () => (
  <Tooltip title="prompt text <p>fdafda</p>">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);

export default App;
