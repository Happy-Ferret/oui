import React from 'react';

import PagesIcon16 from 'oui-icons/src/16/pages-16.svg';
import PagesIcon24 from 'oui-icons/src/24/pages-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const PagesIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = PagesIcon16;
      break;
    case 24:
      Svg = PagesIcon24;
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

PagesIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default PagesIcon;

