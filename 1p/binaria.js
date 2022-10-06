var array = [];
let num0;
let k = 0;


for(i = 0; i < 10000; i++){
num0 = Math.floor(Math.random() * 10000);
array.push(num0);
};

function up(a,b){return a-b}

binarySearch = function(item){
array.sort(up); 
var low = 0, 
high = array.length - 1, 
mid, element;
while (low <= high){ 
mid = Math.floor((low + high) / 2); 
element = array[mid];

if (element < item) { 
low = mid + 1;
} else if (element > item) { 

high = mid - 1; 
} else {
return mid;

}
  k++;  
}
  
};


console.log(array.sort(up));


console.log(binarySearch(27));

console.log('pasos', k)