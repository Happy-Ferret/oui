import React from 'react';

import * as highlight from 'highlight.js';

const highlightCode = (code, isHighlighted, className, testSection) => {
  let codeElement = null;

  if (isHighlighted) {
    // Code that uses syntax highlighting needs to have
    // `dangerouslySetInnerHTML` set so that the HTML returned is displayed.
    require('highlight.js/styles/docco.css');
    codeElement = (
      /* eslint-disable react/no-danger */
      <code
        className={ className }
        data-test-section={ testSection }
        dangerouslySetInnerHTML={ { __html: highlight.highlightAuto(code).value } }>
      </code>
      /* eslint-enable react/no-danger */
    );
  } else {
    codeElement = (
      <code
        className={ className }
        data-test-section={ testSection }>
        { code }
      </code>
    );
  }

  return codeElement;
};

/**
 * Display code either inline or in its own block.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Code = (props) => {
  if (props.type === 'inline') {
    return highlightCode(props.children, props.isHighlighted, 'oui-code', props.testSection);
  }

  return (
    <pre
      className="oui-pre"
      data-test-section={ props.testSection }>
      { highlightCode(props.children, props.isHighlighted) }
    </pre>
  );
};

Code.propTypes = {
  /** The code within the component */
  children: React.PropTypes.string.isRequired,
  /** Apply syntax highlighting to the code with automatic language detection */
  isHighlighted: React.PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
  /** How the code should be displayed */
  type: React.PropTypes.oneOf(['inline', 'block']).isRequired,
};

export default Code;
