var sandwich_chooser_app = new Vue({
	el: '#sandwich-chooser',
	data: function() {
		return {
			employee_name: "",
			sandwich: [
				{ id: "sw_1", name: "Müsli", description: "Müslibrötchen", number: 0 },
				{ id: "sw_2", name: "Käse", description: "Normales Brötchen mit Käse belegt", number: 0 },
				{ id: "sw_3", name: "Mett", description: "Normales Brötchen mit Mett und Zwiebeln belegt", number: 0 },
				{ id: "sw_4", name: "Schinken", description: "Roggenbrötchen mit Kochschinken belegt", number: 0 },
				{ id: "sw_5", name: "Körner", description: "Mehrkornbrötchen mit Käse belegt", number: 0 }
			],
			chosen: []
		}
	},
	computed: {
		sandwich_1_total() {
			let sum = 0
			for (var i = this.chosen.length - 1; i >= 0; i--) {
				sum += this.chosen[i].sw_1_am
			}
			console.log(sum)
			return sum
		},
		sandwich_total() {
			let sums = [0, 0, 0, 0, 0]			
			for (var i = this.chosen.length - 1; i >= 0; i--) {
				sums[0] += this.chosen[i].sw_1_am
				sums[1] += this.chosen[i].sw_2_am
				sums[2] += this.chosen[i].sw_3_am
				sums[3] += this.chosen[i].sw_4_am
				sums[5] += this.chosen[i].sw_5_am		
			}			
			return obj
		}
	},
	methods: {
		onSendOrder(evt) {
			// Grab data from input form
			let empl_name = this.employee_name
			let sandwich_1_amount = this.sandwich[0].number		
			let sandwich_2_amount = this.sandwich[1].number		
			let sandwich_3_amount = this.sandwich[2].number		
			let sandwich_4_amount = this.sandwich[3].number		
			let sandwich_5_amount = this.sandwich[4].number			
			
			let order = { 
				name: empl_name, 
				sw_1_am: sandwich_1_amount, 
				sw_2_am: sandwich_2_amount, 
				sw_3_am: sandwich_3_amount, 
				sw_4_am: sandwich_4_amount, 
				sw_5_am: sandwich_5_amount 
			}

			// save data to chosen array
			this.chosen.push( order )
		},
		onEraseOrder(evt) {
			// set empl_
			this.employee_name = ""
			for (var i = this.sandwich.length - 1; i >= 0; i--) {
				this.sandwich[i].number = 0
			}
		},
		onPrint(evt) {
		// Open Windows printer popup window
			console.log("Öffnet das Popup Fenster zur Auswahl eines Druckers.")
		},
		onDownload(evt) {
			// Download chosen array as JSON
			console.log("Lädt Tabelle 'Bestellungen' herunter (.json Format).")
		},
		onWipeOrders(evt) {
			// Open a confirmation popup 'U sure mate?'
			console.log("Lösche alle Bestellungen")
			// Wipe all Orders
			this.chosen = []
		}
	}
})