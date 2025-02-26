// Linear addition
var sum_to_n_a = function(n) {
    result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
};

// Recursive Linear addition
var sum_to_n_b = function(n) {
    if (n == 1) {
        return n;
    }
    return n + sum_to_n_b(n - 1);
};

// Using sum of arithmetic progression
var sum_to_n_c = function(n) {
    result = (n / 2) * (2 + (n-1));
    return result;
};