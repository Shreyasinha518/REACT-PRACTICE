# TODO for Completing Myntra React Clone

## Redux Setup
- [ ] Create bagSlice.js for managing bag items
- [ ] Update store/index.js to include bag reducer
- [ ] Fix fetchStatusSlice.js bugs (naming, export, reducer logic)
- [ ] Wrap app with Redux Provider in main.jsx

## Data Loading
- [ ] Implement FetchItems.jsx to load items (or set initial items)
- [ ] Update itemsSlice to properly handle initial items

## Home Page
- [ ] Update Home.jsx to display all items from Redux using HomeItem components
- [ ] Update HomeItem.jsx to dispatch addToBag action on button click (fix onClick)

## Bag Page
- [ ] Update Bag.jsx to display bag items from Redux using BagItem components
- [ ] Update BagItem.jsx to dispatch removeFromBag action on button click

## Bag Summary
- [ ] Update BagSummary.jsx to calculate totals from bag items in Redux

## Testing
