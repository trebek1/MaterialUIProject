import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui/List';

export default ({ styles, exercises }) => {
    return (
        <Grid item sm={6}>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises], i) =>
                    <Fragment key={i}>
                        <Typography variant="headline" style={{textTransform: 'capitalize'}}>
                            { group }
                        </Typography>
                        <List component="ul">
                            {exercises.map(({ title }, index) =>
                            <ListItem button key={index}>
                                <ListItemText primary={ title } />
                            </ListItem>    
                            )}
                        </List>
                    </Fragment>
                )}
            </Paper>
        </Grid>
    );
}