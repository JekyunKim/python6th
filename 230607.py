print("parameter 없는 함수")

def disp():
    name = "멋쟁이 사자"
    print("Welcome to", name)

print("함수 실행")
disp()

def add(y):
    x = 10
    c = x + y
    print(c)

add(20)

def add(y):
    x = 10.2334
    print(x + y)
    print(f"Formatted Output{x + y:5.2f}")
    print(f"Formatted Output{x + y:f}")
    print(f"Formatted Output{x + y:.2f}")
    print(f"Formatted Output{x + y:10f}")

add(20)



