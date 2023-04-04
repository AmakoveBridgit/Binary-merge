//Given an array of unsorted numbers, return the index of the
 //following target if the target exists in the array. If the target 
 //is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6
// mergeSort
function getArraysdiv(array){
    if(array.length<=1){
        return array
    }
    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)
    return mergeSort(divideArrs(left),divideArrs(right))
}
function mergeSort(left,right){
    let emptyArr=[]
    while(left.length && right.length){
    if(left[0]<right[0]){
        emptyArr.push(left.shift())

    }else{
        emptyArr.push(right.shift())
    }
}
return [...emptyArr,...left,...right]
}
let array=[45,12,6,89,2,5]
console.log(getArraysdiv(array))


// binary search
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

 //note that list must be sorted for this function to work 

function divArr(arrs){
    if(arrs.length<=1){
        return arrs
    }
    let middle=Math.floor(arrs.length/2)
    let left=arrs.slice(0,middle)
    let right=arrs.slice(middle)
    return sortDesc(divArr(left),divArr(right))

}
function sortDesc(left,right){
    let newEmpty=[]
    while(left.length && right.length){
         if(left[0]>right[0]){
            newEmpty.push(left.shift())
        }
        else{
            newEmpty.push(right.shift())
        }
    }

    return [...newEmpty,...left,...right]

}
let arrs=[123,89,5,23,9,56];
console.log(divArr(arrs))




//Given the following array, search for the following target
//let target = 34
// //let arr2 = [1,4,78,2,67,3];
function sortArr(arr3){
    if(arr3.length<1){
        return arr3
    }
    let middle=Math.floor(arr3.length/2)
    let left=arr3.slice(0,middle)
    let right=arr3.slice(middle)
    return mergeSorted(divideArrs(left),divideArrs(right))
}
function mergeSorted(left,right){
    let newArray=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            newArray.push(left.shift())
        }
        else{
            newArray.push(right.shift())
        }
    }
    return [...newArray,...left,...right]
}
let arr3=[1,4,78,2,67,3]
console.log(sortArr(arr3))

// searching for a target
function search(num1,target){
    let left=0
    let right=num1.length-1

    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(num1[middle]===target){
            return middle
        }
        else if(num1[middle]>target){
            left=middle+1
        }
        else{
            right=middle-1
        }
    }
    return null
}
let num1=[1,4,78,2,67,3]
console.log(search(num1,target))
// or
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


//  mergeSort 

function divideArrs(array){
    if (array.length<=1){
        return array
    }
    let middle=Math.floor(array.length/2)
    let left=array.slice(0,middle)
    let right=array.slice(middle)
    return sortArrays(divideArrs(left),divideArrs(right))

    
}
function sortArrays(left,right){
let emptyArray=[]
while(left.length && right.length ){
if(left[0]<right[0]){
    emptyArray.push(left.shift())
}
else{
    emptyArray.push(right.shift())
}
}
return [...emptyArray,...left,...right]
}
let hopper=[-6,20,8,-2,4]
console.log(divideArrs(hopper))