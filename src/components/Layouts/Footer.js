import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';

export default ({ muscles }) => {
    return (
        <Paper>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              centered
              value={0}
            >
            <Tab label="All" />
            {muscles.map((muscle, i) => 
              <Tab key={i} label={muscle} />
            )}
            </Tabs>
        </Paper>
    );
}