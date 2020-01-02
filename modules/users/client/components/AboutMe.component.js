// External dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Internal dependencies
import '@/config/client/i18n';
import { plainTextLength } from './utils/filters';
import { ReadMorePanel } from '@/modules/core/client/components/ReadMorePanel';
import { withTranslation } from '@/modules/core/client/utils/i18n-angular-load';

function AboutMe({ t, profile, isSelf, profileMinimumLength }) {
  return (
    <>
      <section className="panel panel-default">
        <header className="panel-heading">
          {t('About me')}
        </header>
        <div className="panel-body">
          {profile.description && (
            <ReadMorePanel
              content={profile.description}
              id="profile-description"
              limit={400}
            />
          )}

          {/* If no description, show deep thoughts... */}
          {!profile.description && (
            <blockquote
              aria-label={t('Member has not written description about themself.')}
              className="profile-quote"
            >
              {t('“Everyone is necessarily the hero of their own life story.”')}
            </blockquote>
          )}
        </div>

        {/* User watching their own profile and it's too short */}
        {(isSelf && (!profile.description || plainTextLength(profile.description) < profileMinimumLength)) &&
        <footer className="panel-footer">
          <p className="lead">
            {t('Your profile description should be longer so that you can send messages.')}
            <br/><br />
            <a href="/profile/edit" className="btn btn-primary">{t('Fill your profile')}</a>
          </p>
        </footer>}
      </section>
    </>
  );
}

AboutMe.propTypes = {
  profile: PropTypes.object,
  isSelf: PropTypes.bool,
  profileMinimumLength: PropTypes.number.isRequired,
  t: PropTypes.func,
};

export default withTranslation(['user-profile'])(AboutMe);
