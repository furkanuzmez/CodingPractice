console.log('Greedy Algorithm');

class Greedy {
    private _level: number;
    private _pattern: string;

    constructor(level: number, pattern: string) {
        this._level = level;
        this._pattern = pattern;
    }

    MergeInterval(intervals: [number, number][]): [number, number][] {
        if (intervals.length === 0) {
            return [];
        }

        // Sort intervals by the start time
        intervals.sort((a, b) => a[0] - b[0]);

        const merged: [number, number][] = [];
        let currentInterval: [number, number] = intervals[0];

        for (let i = 1; i < intervals.length; i++) {
            const [currentStart, currentEnd] = currentInterval;
            const [nextStart, nextEnd] = intervals[i];

            console.log(i);

            if (currentEnd >= nextStart) {
                // Merge intervals
                currentInterval = [currentStart, Math.max(currentEnd, nextEnd)];
            } else {
                // Push the current interval and move to the next
                merged.push(currentInterval);
                currentInterval = intervals[i];
            }
        }

        // Add the last interval
        merged.push(currentInterval);

        return merged;
    }
}

// Instantiate the class
const testClass = new Greedy(3, 'Greedy');

// Define test intervals
const intervals: [number, number][] = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(testClass.MergeInterval(intervals));