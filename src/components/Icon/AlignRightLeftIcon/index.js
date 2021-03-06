import React from 'react';

import AlignRightLeftIcon16 from 'oui-icons/src/16/align-right-left-16.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AlignRightLeftIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = AlignRightLeftIcon16;
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

AlignRightLeftIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AlignRightLeftIcon;

