
// Java Program to demonstrate Final
// with for-each Statement
import java.util.*;
import java.util.Map.Entry;
// Main class
class test {
 
    // Main driver method
    public static void main(String[] args)
    {
 
        Map<String,Integer> map=new HashMap<>();
        map.put("David", 2);
        map.put("Rocky", 1);
        map.put("Utsav", 5);
        map.put("Priya", 4);
        map.put("Inbav", 3);
         
        System.out.println(map);
        Set<Entry<String,Integer>> setEntry=map.entrySet();
        
        System.out.println("Entry Set in Set:");
        System.out.println(setEntry);
        
        List<Entry<String,Integer>> ListEntry=new ArrayList<>(map.entrySet());
        System.out.println("Entry Set stored in ArrayList:");
        System.out.println(ListEntry);
        
        //List is easily compareTo using Comparator interface
        ListEntry.sort((x,y) -> x.getValue().compareTo(y.getValue()));
        System.out.println("Entry Sorted List in ArrayList:");
        System.out.println(ListEntry);
       
       //Store the Sorted Value in Linked HasMap
        Map<String,Integer> sortedLinked=new LinkedHashMap<String,Integer>();
        
        for (Entry<String,Integer> entry : ListEntry) {
          sortedLinked.put(entry.getKey(),entry.getValue());
        }

        System.out.println("After Sorted the linkedlist");
        System.out.println(ListEntry);
    }
}