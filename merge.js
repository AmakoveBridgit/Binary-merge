//Given an array of unsorted numbers, return the index of the
 //following target if the target exists in the array. If the target 
 //is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6

function binary(num,target){
let left=0;
let right=num.length-1;
while(left<=right){
    let middle=Math.floor((left+right)/2);
    if (num[middle]===target){
    return middle;
}
else if(num[middle]<target){ 
    left=middle+1;
}
else{
    right=middle-1;
}
}

return null
}
let num=[2,5,6,12,45,89]
let target=6;
console.log(binary(num,target))











//Given an unsorted array of numbers return the sorted 
//array in descending order
//let arr=[123,89,5,23,9,56]

// //note that list must be sorted for this function to work 
let arr=[123,89,5,23,9,56];
arr.sort(function(a,b){
    return (a-b)
})
console.log(arr);
arr.reverse(arr);
console.log(arr);











//Given the following array, search for the following target
//let target = 34
// //let arr2 = [1,4,78,2,67,3];
function binarySearch(arr2,targetNum){
    let left=0;
    let right=arr2.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if (arr2[middle]===target){
        return middle;
    }
    else if(arr2[middle]<targetNum){ 
        left=middle+1;
    }
    else{
        right=middle-1;
    }
    }
    
    return null
    }
    let arr2=[1,2,3,4,67,78]
    let targetNum=34
    console.log(binarySearch(arr2,targetNum))