
#print("Please enter the radius of the circle to compute the Area:") 
#radius = float(input())
#Area= str(3.14*radius**2)
#print("The Area of this circle is "+Area+" unit square")

def basicCalc():
  try:
    print("please enter the expression you wish to evaluate below")
    x = input()
    x= str(eval(x))
    print("The result is: "+x)
    print()
    basicCalc()
  except:
    print("this is a wrong input")
    basicCalc()
basicCalc()
