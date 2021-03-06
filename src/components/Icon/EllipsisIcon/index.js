import React from 'react';

import EllipsisIcon16 from 'oui-icons/src/16/ellipsis-16.svg';
import EllipsisIcon24 from 'oui-icons/src/24/ellipsis-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const EllipsisIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = EllipsisIcon16;
      break;
    case 24:
      Svg = EllipsisIcon24;
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

EllipsisIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default EllipsisIcon;

