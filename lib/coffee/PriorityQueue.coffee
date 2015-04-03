class PriorityQueue
  queue = []

  constructor:(@len) ->

  insert:(theValue) ->
    if queue.length == @len
      queue.push(theValue)
      queue.splice @maxIndex(),1
    else
      queue.push(theValue)

  size:() ->
    @len

  isEmpty:() ->
    @len == 0

  max:() ->
    max = 0;
    for i in [0..((queue.length - 1))]
      if @queue[i] >= max
        max = queue[i]
    max

  maxIndex:() ->
    maxIndex = 0
    max = 0;
    for i in [0..((queue.length - 1))]
      if queue[i] >= max
        max = queue[i]
        maxIndex = i
    maxIndex

  delMax:() ->
    maxIndex = @maxIndex()

    delete queue[maxIndex]

  getQue:() ->
    queue

module.exports = (len) ->
  new PriorityQueue(len)