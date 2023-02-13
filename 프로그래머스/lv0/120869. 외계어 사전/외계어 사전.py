def solution(spell, dic):
    for i in dic:
        if len(i) != len(spell):
            continue;
        for v in spell:
            i = i.replace(v,"",1)
            if i == "":
                return 1
    return 2