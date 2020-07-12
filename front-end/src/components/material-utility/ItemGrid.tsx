import React, {ReactElement, useState} from "react";
import PropTypes from 'prop-types'
import {
    Box,
    Grid,
    Button,
    Input,
    InputAdornment,
    Tooltip, GridSize
} from "@material-ui/core"
import SortIcon from "@material-ui/icons/Sort"
import SearchIcon from "@material-ui/icons/Search"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import {orderBy} from 'lodash'
import {useInput} from "../../hooks/useInput";

type Props<T> = {
    colsPerItem?: GridSize,
    sortBy: keyof T,
    searchBy?: (((item: T) => string) | keyof T)[],
    items: (T & {component: ReactElement})[],
}

const sortModeMappings = [
    {
        icon: undefined,
        tooltip: ''
    },
    {
        icon: <ArrowUpwardIcon />,
        tooltip: 'Ascending'
    },
    {
        icon: <ArrowDownwardIcon />,
        tooltip: 'Descending'
    },
]
function ItemGrid<ItemInterface>({ colsPerItem = 4, items, searchBy, sortBy }: Props<ItemInterface>) {
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
        let orders: undefined | 'asc' | 'desc';
        if (newSortMode === 0) {
            setLocalItems([...items] )
            setSortMode(newSortMode)
            return
        } else if (newSortMode === 1) {
            orders = "asc"
        } else {
            orders = 'desc'
        }

        setLocalItems(orderBy(localItems, [sortBy], orders))
        setSortMode(newSortMode)
    }

    const SortButton = () => {
        if (sortMode > 0) {
            return (
                <Tooltip title={sortModeMappings[sortMode].tooltip}>
                    <Button onClick={handleSortClick}>
                        Sort
                        <SortIcon  />
                        { sortModeMappings[sortMode].icon }
                    </Button>
                </Tooltip>
            )
        }
        return (
            <Button onClick={handleSortClick}>
                Sort
                <SortIcon  />
                { sortModeMappings[sortMode].icon }
            </Button>
        )
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box display="flex">
                    <SortButton />
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
                localItems.map((item, index) => {
                    const itemComponent = (
                        <Grid item xs={colsPerItem} key={index}>
                            { item.component }
                        </Grid>
                    )
                    if (!searchBy || searchBy.length <= 0) {
                        return itemComponent
                    }

                    for (const field of searchBy) {
                        let comparisonItem: any;
                        if (typeof field === 'function') {
                            comparisonItem = field(item)
                        } else {
                            comparisonItem = item[field]
                        }
                        if (comparisonItem.toLowerCase().includes(searchText.toLowerCase())) {
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

export default ItemGrid

