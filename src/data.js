window.data = {
  filterData: (dataPokemon, filterBy) => {
    const result = dataPokemon.filter(element => element.type.includes(filterBy));
    return result;
  },

  sortData: (DataFilter, sortOrder) => {
    if (sortOrder == "upward") {
      return DataFilter.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else /* if (sortOrder == "descendente")  */ {
      return DataFilter.sort((a, b) => (a.name < b.name) ? 1 : -1);
    }
  },
  
  computeStats: (array, whyIdo) => {
    if(whyIdo == 'average-type'){
      const result = array.reduce((previuosVal, actualVal ) =>{
        return previuosVal + actualVal;
      });
      const average = (result/array.length).toFixed(2);
      return average;
    }
    else{
      console.log('Hola');
    }
  }

  
}
