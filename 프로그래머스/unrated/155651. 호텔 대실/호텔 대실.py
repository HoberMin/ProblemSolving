def solution(book_time):
    book_time.sort(key=lambda x: (x[0][:2], x[0][3:]))

    room_stack = []
    max_room = 0

    for start_time, end_time in book_time:
        i_hour, i_minute = int(start_time[:2]), int(start_time[3:])
        current_time = i_hour * 60 + i_minute

        # room_stack에서 현재 시간보다 작은 값들을 제거하여 청소된 객실들을 제거
        room_stack = [x for x in room_stack if x > current_time]

        # 새로운 예약을 처리하기 위해 객실 할당
        room_stack.append(int(end_time[:2]) * 60 + int(end_time[3:]) + 10)

        # 현재 객실 수가 최대 객실 수보다 크다면 갱신
        max_room = max(max_room, len(room_stack))

    return max_room