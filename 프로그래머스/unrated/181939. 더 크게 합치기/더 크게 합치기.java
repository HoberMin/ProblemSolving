class Solution {
    public int solution(int a, int b) {
        String first = ""+a+b;
        String second = ""+b+a;
        return Math.max(Integer.parseInt(first),Integer.parseInt(second));
    }
}