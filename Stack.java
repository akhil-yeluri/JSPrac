// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;

class HelloWorld {
    
    public static String GetResult(String s)
    {
        Stack<Character> stack = new Stack<Character>();
        String temp="";
        String output = "";
        
        for(int i=s.length()-1;i>=0;i--){
            if(s.charAt(i)!='(')
                stack.push(s.charAt(i));
            else
            {
                temp="";
                while(stack.size()>0){
                    if(stack.peek()==')')
                        {
                            stack.pop();
                            temp+= stack.pop();
                            break;
                        }
                     temp+= stack.pop();
                }
                
                int multiplier =s.charAt(--i) - '0';
                
                for(int j=0;j<multiplier;j++)
                    output=temp+output;
                    
            }
            
        }
        
        return output;
    }
    
    public static void main(String[] args) {
        System.out.println("Enter the string");
        Scanner in = new Scanner(System.in);
        String s = in.nextLine();
        System.out.println(GetResult(s));
    }
}

