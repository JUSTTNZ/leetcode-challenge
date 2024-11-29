const head = [1, 2, 3, 5, 4, 6, 8, 9];

const middleIndex = (array) => {
    const mid = Math.floor(array.length / 2);  // Calculate the middle index
    
    if (array.length % 2 === 1) {
        // Odd-length array, print the middle element
        console.log(array[mid]);
    } else if (array.length % 2 === 0) {
        // Even-length array, print the two middle elements
        console.log(array[mid]);
    }
};

middleIndex(head);
const head  = [1, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const middle = [1, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6]

const middleIndex = (array) => {
    mid = Math.floor( array.length / 2 )

    if(array.length % 2 === 0) {
        console.log(array[mid])
    }else if (array.length % 2 === 1) {
        console.log(array[mid])
    }
}

middleIndex(head)
middleIndex(middle)

const canConstruct = (ransomNote, magazine) => {
    ransomNoteCount = {};
    magazineCount = {};

    for (const char of ransomNote) {
        ransomNoteCount[char] = (ransomNoteCount[char] || 0) + 1
    }

    for (const char of magazine) {
        magazineCount[char] = (magazineCount[char] || 0) + 1
    }

    for (const char in ransomNoteCount) {
        if(!magazineCount[char] || magazineCount[char] < ransomNoteCount[char]) {
            return false
        }
    }
    return true
}

console.log(canConstruct("aa", "ab"))
console.log(ransomNoteCount)

const text =  'programmingmmm';
const frequencyChar = {}
const duplicate = {}

for (const char of text) {
    frequencyChar[char] = (frequencyChar[char] || 0) + 1;
}
console.log(frequencyChar)
const arrayKeys = Object.keys(frequencyChar).sort((a, b) => frequencyChar[b] - frequencyChar[a])
const arrayObj = {}
arrayKeys.forEach(key => {
    arrayObj[key] = frequencyChar[key]
})
console.log(arrayObj)

for(const char in frequencyChar){
    if(frequencyChar[char] > 1) {
        duplicate[char] = frequencyChar[char]
    }
}

console.log(duplicate)


const nums = [1, 3, 2, 4]
const target = 6
const seen = new Map()
for (const num of nums) {
    const complement = target - nums[num] 
    if(seen.has(complement)) {
        console.log([seen.get(complement), num])
        return;
    }
    seen.set(nums[num], num)
}

const nums = [1, 3, 2, 4]
const target = 6

for (let i = 0; i < nums.length;  i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if(nums[i] + nums[j] == target) {
            console.log([i, j])
        }
    }

}

    const nums1 = [4, 1, 6, 9, 8];
    const nums2 = [2, 5, 3, 7];

    const join = [...nums1, ...nums2]
    console.log(join);

    let sortedArray = join.sort((a, b) => a - b) 
    console.log(sortedArray);


    const median = (array) => {
    middleNumber = Math.floor(array.length / 2)
    if(array.length % 2 === 0) {
        console.log(array[middleNumber])
    } else if (array.length % 2 === 1) {
        console.log(array[middleNumber])
    }
}

median(sortedArray);

const height = [70, 45, 92, 56, 83, 96, 61]

const max = (height) => {
    let maxArea = 0;
    for(let i = 0; i < height.length; i++) {
        for(let j = i + 1; j < height.length; j++) {
            const area = (j - i) * Math.min(height[i], height[j])
            if(area > maxArea) {
                maxArea = area;
            }
        }
    }
    return maxArea;
}
console.log(max(height));

const max = (height) => {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    let miniHeight = Infinity;

    while(left < right) {
       const width = right - left;
       const minHeight = Math.min(height[left], height[right])
         miniHeight = Math.min(miniHeight, minHeight)
        const area = width * minHeight;
        // maxArea = Math.max(maxArea,area)
        if(area > maxArea) {
            maxArea = area
        }

        if(height[left] < height[right]) {
            left++;
        }else {
            right--
        }
    }
    console.log(miniHeight)
    return maxArea
    
}
console.log(max(height))

const nums =  [2, 0, 1, -2, -3, -1, 3]

const equalZero = (array) => {
    nums.sort((a,b) => a - b)
    // let total = 0
    let totalArray = []
    for(i = 0; i < array.length - 2; i++) {
        // if(i > 0 && array[i] === array[i - 1])continue;
        for(j = i + 1; j < array.length - 1; j++) {
            // if(j > i + 1 && array[j] === array[j - 1])continue;
            for(k = j + 1; k < array.length; k++) {
                // if(k > j + 1 && array[j] === array[j - 1])continue;
                // let matched = array[i] + array[j] + array[k]
                if(array[i] + array[j] + array[k] === 0) {
                    totalArray.push([array[i], array[j], array[k]])

                }
            }
        }
    }
    return totalArray
}
equalZero(nums)
console.log(equalZero(nums))