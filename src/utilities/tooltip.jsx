import ReactTooltip from 'react-tooltip';

export const tooltip = (id, msg) => (
  <ReactTooltip place='bottom' type='dark' effect='solid' id={id}>
    {msg}
  </ReactTooltip>
);
