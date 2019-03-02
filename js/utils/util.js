function initCount(){
    var counter = 1;
    function increaseCount(){
        return counter++;
    }
    return increaseCount;
    }