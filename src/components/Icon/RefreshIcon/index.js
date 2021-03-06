import React from 'react';

import RefreshIcon16 from 'oui-icons/src/16/refresh-16.svg';
import RefreshIcon24 from 'oui-icons/src/24/refresh-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const RefreshIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = RefreshIcon16;
      break;
    case 24:
      Svg = RefreshIcon24;
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

RefreshIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default RefreshIcon;

