
|Behavior   | input   | output  |
|-----------:|:----------|:---------|
|can store and return task name and task item list|Grocery Shopping, milk, eggs, bread, beer | Grocery Shopping, milk, eggs, bread, beer |
|can return names as and ordered list| Grocery Shopping, House Cleaning| 1. Grocery Shopping 2. House Cleaning|
|can return task sub-items as checkbox list below ordered list item| Grocery shopping, milk eggs, bread, beer| 1. Grocery Shoppping []milk []eggs []bread []beer|
|checking boxes strikes through the item| [√]milk | [√]-milk-|
|checking all boxes removes ordered list item| 1.Grocery Shopping [√]milk [√]eggs [√]bread [√]beer 2. House Cleaning []bathroom| 1.House Cleaning []bathroom|
