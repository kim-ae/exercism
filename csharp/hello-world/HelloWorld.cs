using System;
class HelloWorld
{
    public static string Hello(string name){
        return "Hello, "+ ((name != null) ? name : "World") + "!";
    }
}
