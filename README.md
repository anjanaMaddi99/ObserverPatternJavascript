### Observer Pattern Overview:
The Observer Pattern is a behavioral design pattern where an object, called the subject or observable, maintains a list of its dependents, called observers, and notifies them of any state changes, usually by calling one of their methods. This pattern enables a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

### Components of the Observer Pattern:

1. **Observable (Subject):**
   - The Observable is the object whose state changes are of interest to other objects (observers).
   - It maintains a list of observers and provides methods to attach, detach, and notify them.
   - In our case, the sensor detecting temperature at home serves as the Observable.

2. **Observer:**
   - The Observer is the object that depends on the Observable. It is notified of any changes in the Observable's state.
   - Observers register themselves with the Observable to receive updates.
   - In our case, the clock, air conditioner (AC), and smartphone are all Observers.

### Detailed Implementation:

1. **Observable:**
   - The Observable should have methods to manage its list of observers. These typically include:
     - `attachObserver(Observer observer)`: Adds an observer to the list.
     - `detachObserver(Observer observer)`: Removes an observer from the list.
   - It should also have a method to notify all observers when its state changes:
     - `notifyObservers()`: Calls the `update()` method on each observer in the list.
   - In our scenario:
     - The sensor (Observable) should have methods like `attachObserver(observer)`, `detachObserver(observer)`, and `notifyObservers()`.
     - It maintains a list of observers (clock, AC, phone).

2. **Observer:**
   - Observers should implement an `update` method that specifies how they react to changes in the Observable's state.
   - The Observable calls this method on each registered observer when its state changes.
   - In our scenario:
     - The clock, AC, and phone should implement an `update` method.
     - When the sensor's temperature reading changes, it calls the `update` method on each observer, passing the new temperature value.
     - Each observer can then update its display or take appropriate action based on the new temperature value.

### Workflow:
1. The Observable (sensor) detects a change in its state (temperature reading).
2. The Observable notifies all registered observers (clock, AC, phone) by calling their `update` methods.
3. Each observer updates its state or performs actions based on the new information received from the Observable.

### Benefits:
- **Loose Coupling:** The Observer Pattern promotes loose coupling between Observable and Observer objects. They can interact without having detailed knowledge of each other.
- **Flexibility:** You can easily add or remove observers without modifying the Observable, and vice versa.
- **Scalability:** The pattern scales well as the number of observers or observables increases.

By following this pattern, you create a robust and maintainable system where components are decoupled and can respond dynamically to changes in state.

below is the UML Diagram of the solution proposed by Observer Pattern
![image](https://github.com/anjanaMaddi99/ObserverPatternJavascript/assets/170990935/c5ccaae7-c6fe-49b8-b867-b57c66fda952)




<br>
<br>
<br>
<br>













I gained insight from the video below. If you need further clarification, feel free to refer to the source for additional inspiration.
inspiration: https://www.youtube.com/watch?v=_BpmfnqjgzQ&t=1900s&pp=ygUQb2JzZXJ2ZXIgcGF0dGVybg%3D%3D
