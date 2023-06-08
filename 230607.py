def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b


runner = fibonacci(10)
print(next(runner))

print("==========")
print(runner)
print(next(runner))
print("==========")

for num in runner:
    print(num)
