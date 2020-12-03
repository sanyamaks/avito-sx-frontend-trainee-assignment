import React from 'react';
import { Header, Icon, Segment, Grid, Button } from 'semantic-ui-react';

const HeaderExampleSettingsIcon = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={2}>
        <Button icon>
          <Icon name="arrow left" size="large" />
        </Button>
      </Grid.Column>
      <Grid.Column width={12}>
        <Header as="h2" icon textAlign="center">
          <Header.Content>
            Account Settings
            <Header.Subheader>Manage your preferences</Header.Subheader>
          </Header.Content>
        </Header>
      </Grid.Column>
      <Grid.Column width={2}>
        <Button icon>
          <Icon name="refresh" size="large" loading />
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default HeaderExampleSettingsIcon;
