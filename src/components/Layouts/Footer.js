import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';

export default ({ muscles, category, onSelect }) => {

    const index = category 
      ? muscles.findIndex(group => group === category) + 1
      : 0;

    const onIndexSelect = (e, index) => onSelect(index === 0 ? '' : muscles[index - 1]);

    return (
        <Paper>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              centered
              onChange={onIndexSelect}
              value={index}

            >
            <Tab label="All" />
            {muscles.map((muscle, i) => 
              <Tab key={i} label={muscle} />
            )}
            </Tabs>
        </Paper>
    );
}