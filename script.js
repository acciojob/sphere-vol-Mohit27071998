function volume_sphere() {
    //Write your code here
	let rad =document.getElementById("radius").value

	let ans = (4/3) * 3.14 * (rad*rad*rad);

	let vol =document.getElementById("volume")
	vol.value = ans;
	return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
