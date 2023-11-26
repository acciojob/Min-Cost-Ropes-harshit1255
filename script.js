function mincost(arr)
{ 
//write your code here
// return the min cost
  arr.sort();
	 let sum =0;
	let res =0;
	while(arr.length!=1)
		{
			let sum = arr[0]+arr[1];
			res +=sum;
			arr.splice(0,2,sum);
		}
	return res;
}

module.exports=mincost;
