class Solution {
    public int solution(int a, int b) {
        int first = Integer.parseInt(""+a+b);
        int second = a*b*2;
        return Math.max(first,second);
    }
}