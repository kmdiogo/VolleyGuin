import React, {useState} from "react";
import PropTypes from 'prop-types'
import {
    Box,
    Grid,
    Button,
    Input,
    InputAdornment
} from "@material-ui/core"
import SortIcon from "@material-ui/icons/Sort"
import SearchIcon from "@material-ui/icons/Search"
import {orderBy} from 'lodash'
import {useInput} from "../../hooks/useInput";

function ItemGrid(props) {
    const { colsPerItem, items, searchBy, componentKey, sortBy } = props
    // 0 - no sort, 1 - ascending, 2 - descending
    const [sortMode, setSortMode] = useState(0)
    const [localItems, setLocalItems] = useState([ ...items ])
    const [searchText, setSearchText, bindSearchText] = useInput('')

    function getIncrementedSortMode() {
        if (sortMode === 2) { return 0 }
        return sortMode + 1
    }
    function handleSortClick() {
        const newSortMode = getIncrementedSortMode()
        let orders;
        if (newSortMode === 0) {
            setLocalItems([...items] )
            setSortMode(newSortMode)
            return
        } else if (newSortMode === 1) {
            orders = ['asc']
        } else {
            orders = ['desc']
        }

        setLocalItems(orderBy(localItems, [sortBy], orders))
        setSortMode(newSortMode)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box display="flex">
                    <Button onClick={handleSortClick}>
                        Sort
                        <SortIcon  />
                    </Button>
                    <Box ml="auto">
                        <Input
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            }
                            placeholder="Search"
                            {...bindSearchText}
                        />
                    </Box>
                </Box>
            </Grid>
            {
                localItems.map(item => {
                    const itemComponent = (
                        <Grid item xs={colsPerItem}>
                            { item[componentKey] }
                        </Grid>
                    )
                    if (!searchBy || searchBy.length <= 0) {
                        return itemComponent
                    }

                    for (const key of searchBy) {
                        if (item[key].toLowerCase().includes(searchText.toLowerCase())) {
                            return itemComponent
                        }
                    }

                    return null
                })
            }
        </Grid>
    )
}

ItemGrid.propTypes = {
    colsPerItem: PropTypes.number,
    sortBy: PropTypes.string.isRequired,
    searchBy: PropTypes.array,
    items: PropTypes.array.isRequired,
    componentKey: PropTypes.string
}

ItemGrid.defaultProps = {
    colsPerItem: 4,
    componentKey: 'component'
}

export default ItemGrid

