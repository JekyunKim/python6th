def val(lst):
    print("Inside Function before Append: ", lst, id(lst))
    lst.append(4)
    print("Inside Function after Append: ", lst, id(lst))


lst = [1, 2, 3]
print("Before Calling Function: ", lst, id(lst))
val(lst)
print("After Calling Function: ", lst, id(lst))

