// External dependencies
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Internal dependencies
import '@/config/client/i18n';
import { plainText, plainTextLength } from '../utils/filters';

const LIMIT = 2000;

function ReadMorePanel({ content, id, t }) {
  const [showMore, setShowMore] = useState(false);

  if (content.length === 0) {
    return;
  }

  if (showMore || plainTextLength(content) <= LIMIT) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return (
    <div className="panel-more-wrap">
      <div
        className="panel-more-wrap"
        dangerouslySetInnerHTML={{ __html: `${plainText(content).substr(0, LIMIT)} …` }}
        id={id}
        onClick={() => setShowMore(true)}
      />
      <div
        aria-controls={id}
        aria-expanded="false"
        className="panel-more-fade"
        onClick={() => setShowMore(true)}
        type="button"
      >
        {t('Read more…')}
      </div>
    </div>
  );
}

ReadMorePanel.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation('core')(ReadMorePanel);
