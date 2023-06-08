a = {10, 20, 30}
a = {10, 20, 30, '멋쟁이사자', 'Kim', 40}
new_set = a.copy()
a = {10, 20, 30, '멋쟁이사자', 'Kim', 40, 10, 20}

b = set()
print(type(b))
a.add(50)
a.update([10, 20, 60, 70])
print(a)
a.remove('멋쟁이사자')  # 지워줘 했는데 없으면 error
a.discard('멋쟁이사자')  # 지워줘 했는데 없으면 그냥 지나감
a.discard(70)
print(a)

# new_set.clear()
# print(new_set)
intersection_a = a.intersection(new_set, a, b)
print(intersection_a)

union_a = a.union(new_set)
print('union_a:', union_a)

difference_a = a.difference(new_set)
print('difference_a:', difference_a)

print(b.issubset(a))
print(a.issuperset(b))
sym_a = a.symmetric_difference(new_set)
print('symmetric_difference:', sym_a)

# print(a[0]) set은 인덱스로 접근 불가, 순서X
