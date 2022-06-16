import { Typography } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Tabs } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ProductRecipeList from './ProductRecipeList';
import RecipeItemList from './RecipeItemList';
const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "red",
    },
  });
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const ProductRecipeListTabs = ()=>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const activeColor = "#000";
    const inactiveColor = "rgba(0,0,0,0.5)";
    const classes = useStyles();
    return (
        <>
            <AppBar 
            classname={classes.root}
            position="static">
                <Tabs 
                value={value} 
                onChange={handleChange} 
                aria-label="simple tabs example">
                    <Tab 
                        style={{ color: value === 0? activeColor: inactiveColor }}
                        label="Recipe List" {...a11yProps(0)} />
                    <Tab 
                        style={{ color: value === 1? activeColor: inactiveColor }}
                        label="Recipe Items" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
               <ProductRecipeList/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <RecipeItemList/>
            </TabPanel>
        </>
    )
}

export default ProductRecipeListTabs;