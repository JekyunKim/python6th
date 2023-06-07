def add():
    x = 10
    y = 20
    c = x + y
    return c


sum1 = add()
print(sum1)

def add2():
    x = 10
    y = 20
    return x + y


sum2 = add2()
print(sum2)

def add3(y):
    x = 10
    return x + y


sum3 = add3(20)
print(sum3)

def add4(y):
    x = 10
    c = x + y
    d = y - x
    return c, d, 50


sum4, sub1, a = add4(20)
print(sum4)
print(sub1)
print(a)
print(type(add4(20)))
