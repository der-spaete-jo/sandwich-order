

// register the grid component
Vue.component('demo-grid', {
  template: '#grid-template',
  props: {
    employees: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredemployees: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var employees = this.employees
      if (filterKey) {
        employees = employees.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        employees = employees.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return employees
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    searchQuery: '',
    gridColumns: ['Name', 'Brötchen 1', 'Brötchen 2', 'Brötchen 3', 'Brötchen 4', 'Brötchen 5'],
    gridData: [
      { name: 'Chuck Norris', 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 },
      { name: 'Bruce Lee', 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 },
      { name: 'Jackie Chan', 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      { name: 'Jet Li', 1: 0, 2: 0, 3: 1, 4: 0, 5: 0 }
    ]
  }
})