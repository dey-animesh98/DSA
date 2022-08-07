What are Subsequences?
```yml
We can answer that by understanding the difference between Subarray, Subsequence and Subset

A subarray is a contiguous part of array and maintains relative ordering of elements. For an array/string of size n, there are n*(n+1)/2 non-empty subarrays/substrings.

A subsequence maintain relative ordering of elements but may or may not be a contiguous part of an array. For a sequence of size n, we can have 2^n-1 non-empty sub-sequences in total.

A subset MAY NOT maintain relative ordering of elements and can or cannot be a contiguous part of an array. For a set of size n, we can have (2^n) sub-sets in total.
```
Let us understand it with an example.

Consider an array:

array = [1,2,3,4]

Subarray : [1,2],[1,2,3] - is continous and maintains relative order of elements

Subsequence: [1,2,4] - is not continous but maintains relative order of elements

Subset: [1,3,2] - is not continous and does not maintain relative order of elements

Some interesting observations :

Every Subarray is a Subsequence.
Every Subsequence is a Subset.