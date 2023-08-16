import React from 'react';
import { connect } from 'react-redux';

import { NavModel } from '@grafana/data';
import { Page } from 'app/core/components/Page/Page';

import { getNavModel } from '../../core/selectors/navModel';
import { StoreState } from '../../types';

import { LicenseChrome } from './LicenseChrome';
import { ServerStats } from './ServerStats';

interface Props {
  navModel: NavModel;
}

export function UpgradePage({ navModel }: Props) {
  return (
    <Page navModel={navModel}>
      <Page.Contents>
        <ServerStats />
        <UpgradeInfo />
      </Page.Contents>
    </Page>
  );
}

interface UpgradeInfoProps {
  editionNotice?: string;
}

export const UpgradeInfo = ({ editionNotice }: UpgradeInfoProps) => {
  return (
    <>
      <LicenseChrome
        header="Sofinet Cloud"
        subheader="Transforming the Future with Sofinet IoT Solutions."
        editionNotice={editionNotice}
      ></LicenseChrome>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  navModel: getNavModel(state.navIndex, 'upgrading'),
});

export default connect(mapStateToProps)(UpgradePage);
