function volume_sphere() {
    //Write your code here
	let rad =document.getElementById("radius").value

	let ans = (4 / 3) * Math.PI * Math.pow(rad, 3);
	let out = parseFloat(ans.toFixed(4))
      
	let vol =document.getElementById("volume")
	vol.value = out;
	return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
