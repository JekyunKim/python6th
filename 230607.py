# if else
# age = 18
# if age >= 18:
#     print('성인입니다.')
# else:
#     print('미성년자입니다.')
#
# 중첩된 if else
# score = 55
# if score >= 90:
#     print('A')
# else:
#     if score >= 80:
#         print('B')
#     else:
#         if score >= 70:
#             print('C')
#         else:
#             print('D')
#
# elif
# marks = 75
# if marks >= 90:
#     print('A')
# elif marks >= 80:
#     print('B')
# elif marks >= 70:
#     print('C')
# else:
#     print('D')
#
# a = int(input("Enter Number Greater than or Equal to 2:"))
# if a >= 2:
#     print("Correct!! You have Entered: ", a)
# else:
#     print("Wrong!! You have Entered: ", a)
#
# day = input("요일을 입력하세요: ")
# if day == "Mon":
#     print("오늘은 월요일")
# elif day == "Tue":
#     print("오늘은 화요일")
# elif day == "Wed":
#     print("오늘은 수요일")
# else:
#     print("휴일")

# while loop
a = 1
while a <= 10:
    print(a)
    a += 1
print("코드 종료")

a = 2
while a <= 20:
    print(a)
    a += 2
print("코드 종료")

a = 3
while a <= 10:
    print(a)
    a += 1
else:
    print("While 조건이 거짓이므로 Else 부분 실행됨")
print("코드 종료")

# 무한 loop
while True:
    print("멋쟁이 사자")
print("코드 종료")

i = 0
while True:
    i += 1
    print(i)
    if i == 5:
        break
print("코드 종료")

# 중첩
i = 1
while i <= 3:
    print("Outer Loop", i)
    i += 1
    j = 1
    while j <=5:
        print("Inner Loop", j)
        j += 1
    print("코드 종료")






