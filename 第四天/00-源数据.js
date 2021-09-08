var arrProduct=[
		{
		  name:"衣柜",
		  type:"家具",
		  price:2000,
		  color:"木制"
		},
		{
		  name:"冰箱",
		  type:"家电",
		  price:8000,
		  color:"purple"
		},
		{
		  name:"电视机",
		  type:"家电",
		  price:10000,
		  color:"black"
		},
		{
		 name:"香皂",
		 type:"日用品",
		 price:20,
		 color:"pink"
		},
		{
		  name:"沐浴露",
		  type:"日用品",
		  price:80,
		  color:"white"
		},
		{
		  name:"电饭煲",
		  type:"家电",
		  price:800,
		  color:"gray"
		},
		{
		  name:"四件套",
		  type:"日用品",
		  price:1200,
		  color:"red"
		}
	]
	
	
	function arrToTable(arrProduct,idV){
		arrProduct.forEach(function(item){
				document.querySelector(`#${idV} tbody`).innerHTML+=`<tr>
				<td>${item.name}</td>
				<td>${item.type}</td>
				<td>${item.price}</td>
				<td>${item.color}</td>
		</tr>`
			})
	}