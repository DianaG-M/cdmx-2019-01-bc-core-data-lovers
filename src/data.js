window.data = {
  filterData: (dataPokemon, filterBy) => {
    const result = dataPokemon.filter(element => element.type.includes(filterBy));
    return result;
  },

  sortData: (DataFilter, sortOrder) => {
    switch (sortOrder){
      case 'downward':
        return DataFilter.sort((a, b) => (a.name > b.name) && -1);
      case 'upward':
        return DataFilter.sort((a, b) => (a.name < b.name) && -1);
    }
  },

  computeStats: (array) => {
      const result = array.reduce((previuosVal, actualVal ) =>{
        return previuosVal + actualVal;
      });
      const average = (result/array.length).toFixed(2);
      return average;
    }
    
}
