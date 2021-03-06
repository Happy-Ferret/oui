import React from 'react';

import HistoryIcon16 from 'oui-icons/src/16/history-16.svg';
import HistoryIcon24 from 'oui-icons/src/24/history-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const HistoryIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = HistoryIcon16;
      break;
    case 24:
      Svg = HistoryIcon24;
      break;
    default:
  }

  return (
    <Svg
      className="oui-icon display--inline"
      data-test-section={ props.testSection }
    />
  );
};

HistoryIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default HistoryIcon;

