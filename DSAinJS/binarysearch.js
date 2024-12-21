function binarySearch(arr, target){
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);
        if(arr[mid]===target){
            return true;
        }
        else if(arr[mid] < target){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return false;
}
module.exports = binarySearch;

// let arr = [1,2,3,4,5];
// binarySearch(arr , 6);