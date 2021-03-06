import React from 'react';

import CheckIcon16 from 'oui-icons/src/16/check-16.svg';
import CheckIcon24 from 'oui-icons/src/24/check-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const CheckIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = CheckIcon16;
      break;
    case 24:
      Svg = CheckIcon24;
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

CheckIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default CheckIcon;

