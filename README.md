# arithmetic_demo

## 一些算法demo(CoffeeScript)

__已有列表:__

* `选择排序`
* `直接插入排序`
* `希尔排序(使用序列: 1/2(3^k -1) )`
* `原地归并排序`
* `冒泡排序`
* `快速排序`
* `构建优先队列，找出输入中最小的N个值`
* `构建二叉树，找出输入中最大值`
* `构建无序表，查找指定值`
* `构建哈希表，查找指定值`

### 一次在自己mac上的测试
```
输入为一个长度为10000,范围为0到9999的数组
选择排序消耗了:692ms
直接插入排序：消耗了3ms
希尔排序(使用序列: 1/2(3^k - 1) )：消耗了:2ms
原地归并排序：消耗了2ms
冒泡排序：消耗了264ms
快速排序：消耗了:14ms
构建长度为5的优先队列消耗了4ms，输入中最小的5个数为:
[ 4, 2, 8, 6, 6 ]
构建二叉树消耗了5ms，输入中最大的数为:9998
构建无序表，使用了0ms
使用无序表找到值为5000的数，进行了4966次查找
构建哈希表，使用了1ms
使用哈希表找到值为5000的数，进行了13次查找
```
