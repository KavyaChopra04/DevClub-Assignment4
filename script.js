            var todconf;
            var totconf;
            var todconfi;
            var totconfi;
            var label=[]
			var data1=[]
			var data2=[]
			chartIt();
		    async function chartIt(){
                await loadNames();
                const ctx = document.getElementById('myChart');
                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: label,
                        datasets: [{
                            label: 'NUMBER OF CONFIRMED CASES IN INDIA OVER THE LAST 30 DAYS',
                            data: data1,
                            borderWidth: 1,
                            borderColor: "blue",
                            backgroundColor: "white"
                        }]
                    },
                    options: {
                        legend: {
                        labels: {
                            fontColor: "white",
                            fontSize: 18
                        }
                    },
                        scales: {
                            yAxes: 
                            [{
                                ticks: {
                                    fontColor: "#FFF",
                                    fontSize: 18,
                                    stepSize: 1,
                                    beginAtZero: true
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: "#FFF",
                                    fontSize: 14,
                                    stepSize: 1,
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                })
                };
			async function loadNames() {
				const response = await fetch('https://api.covid19api.com/total/dayone/country/india');
                const response2 = await fetch ('https://api.covid19api.com/summary')
				const obj = await response.json();
                const obj2= await response2.json();
                todconf=obj2.Global.NewConfirmed;
                totconf=obj2.Global.TotalConfirmed;
                console.log(totconf);
                console.log(todconf);
                todconfi=obj2.Countries[77].NewConfirmed;
                totconfi=obj2.Countries[77].TotalConfirmed;
                function myFunction() {
                    document.getElementById("todglob").innerHTML = todconf;
                    document.getElementById("totglob").innerHTML = totconf;
                    document.getElementById("todind").innerHTML = todconfi;
                    document.getElementById("totind").innerHTML = totconfi;
                  }
                myFunction();
				var res = [];
				for(var i in obj)
					res.push(obj[i]);
				let total=0;
				let need = res.slice((res.length - 31), res.length)
				for(let i=1;i<31;i++){
					var date = new Date(need[i].Date);
					label.push(date.toISOString().substring(0, 10))
					data1.push(need[i].Confirmed-need[i-1].Confirmed)
				}
				console.log(label)
				console.log(data1)
			}
