import React from 'react';

import ExternalIcon16 from 'oui-icons/src/16/external-16.svg';
import ExternalIcon24 from 'oui-icons/src/24/external-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ExternalIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ExternalIcon16;
      break;
    case 24:
      Svg = ExternalIcon24;
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

ExternalIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ExternalIcon;

