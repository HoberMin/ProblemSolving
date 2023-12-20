function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = new Array(bridge_length).fill(0); // 다리를 나타내는 배열, 초기 값은 0

    while (bridge.length) {
        bridge.shift(); // 다리의 맨 앞에 있는 트럭을 빼냄

        if (truck_weights.length) {
            // 대기 중인 트럭이 남아 있다면
            if (bridge.reduce((acc, cur) => acc + cur, 0) + truck_weights[0] <= weight) {
                // 다리에 새로운 트럭이 올라갈 수 있는 경우
                bridge.push(truck_weights.shift()); // 트럭을 다리에 올림
            } else {
                // 다리에 새로운 트럭이 올라갈 수 없는 경우
                bridge.push(0); // 무게 0인 트럭(다리를 지난 것으로 간주)을 올림
            }
        }

        time += 1; // 1초 경과
    }

    return time;
}