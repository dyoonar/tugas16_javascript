n = [45, 100,99,3,2,4,1,2,3,19,22,14,10]
function MinArray(nilai){
	return Math.min.apply(Math, nilai)
}
function MaksArray(nilai){
	return Math.max.apply(Math, nilai)
}
console.log("Nilai Minimal : ",MinArray(n))
console.log("Nilai Maksimal : ",MaksArray(n))