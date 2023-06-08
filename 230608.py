import sys
print("default: ", sys.getrecursionlimit())
sys.setrecursionlimit(100)
print("setting: ", sys.getrecursionlimit())

i = 0
def myfun():
    global i
    i += 1
    print("My Function: ", i)
    myfun()


myfun()
