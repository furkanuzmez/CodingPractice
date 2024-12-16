console.log('Greedy Algorithm ')


class Greedy {
    constructor(level,pattern) {
        this._level = level;
        this._pattern = pattern;
    }



MergeInterval(params) {


    params.sort((a,b) => a[0]-b[0]);
  
    const merged = [];
    let currentInterval = intervals[0];

    for(let i=1;i<intervals.length;i++) {
        const  [currentStart,currentEnd] = currentInterval;
        const [nextStart,nextEnd] = intervals[i];
       console.log(i)
         if(currentEnd >= nextStart) {
            currentInterval = [currentStart,Math.max(currentEnd,nextEnd)]
         }else {
            merged.push(currentInterval);
            currentInterval = intervals[i];
         }

   

    }

    merged.push(currentInterval);
   


    return merged;
}
}


let testClass = new Greedy(3,'Greedy');

const intervals = [ [1, 3], [2, 6], [8, 10], [15, 18] ]
console.log(testClass.MergeInterval(intervals))