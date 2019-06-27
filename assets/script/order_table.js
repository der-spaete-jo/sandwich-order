var order_table = new Vue({
  el: '#order-table',
  methods: {
  	onCellClick(entry, key) {
  		console.log(entry)	// the entry that needs update
  		console.log(key)	// the sandwich that needs update
  		var empl_name = entry.name
  		var sandw_1_amount = entry
  		var sandw_2_amount = entry
  		var sandw_update_nr = key
  		order_table.gridData.push( {name: empl_name, 1:sandw_1_amount, 2:sandw_2_amount })
  	  	}
  },
  data: {
    gridColumns: ['name', '1', '2', '3', '4', '5'],
    gridData: [
      { name: 'Chuck Norris', 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 },
      { name: 'Bruce Lee', 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 },
      { name: 'Jackie Chan', 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      { name: 'Jet Li', 1: 0, 2: 0, 3: 1, 4: 0, 5: 1 }
    ]
  }
})