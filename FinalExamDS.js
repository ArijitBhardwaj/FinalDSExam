// Answer 1

function reverseInteger (num){
    if (num == 0){return 0;}

    else if (num > 0){
    let text = num.toString();
    let rev = text.split('').reverse().join('');
    let revNum = parseInt(rev);
    return revNum;
}
     else {
        num = num * (-1);
        let text = num.toString();
        let rev = text.split('').reverse().join('');
        let revNum = parseInt(rev);
        return revNum * (-1);

     }



}


// Answer 2
function targetFind(array, target){
    for (let i = 0; i< array.length; i++ ){

        if (array[i] > target){
            return i;
        }
        
        else if (array[i] == target){
            return i;
        }

        

       
    }

    return array.length;
}

//Answer 4

function findSmallestDuplicate(array){
    if (array.length == 0){
        return 0;
    }
    else if (array.length == 1){
        return array[0];
    }

    else {
    let sortedArray = array.sort();
    for (let i = 0; i< array.length; i++){
        if(sortedArray[i] == sortedArray[i+1]){
            return sortedArray[i];
        }
    }}

}

// Answer 3
class LinkedList{

    constructor(){
        this.head = null
    }



    deleteValue(target){
        let pointer = this.head;

        if (pointer.value == target){
            this.head = pointer.next;
        }

        else{

        while(pointer.next != null){
        
        

        if (pointer.next.value == target){

            pointer.next = pointer.next.next;
        }

        pointer = pointer.next;}
    }

       

        console.log("Head :" + this.head.value + " " + "New List :" + this.printList() );

    }

    printList(){
        let resultArray = [];
        let p = this.head;
        while (p != null){
            resultArray.push(p.value);
            p = p.next;
        }

        return resultArray;
    }

}


class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}


let List = new LinkedList();
let node1 = new Node(4);
let node2 = new Node(5);
let node3 = new Node(6);
let node4 = new Node(7);

List.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

// Eg - Usage : List.deleteValue(5);

// Answer will show updated head, and print rest of the remaininf list in an array


// MCQ Answer 1 - Binary Search
//MCQ Answer 2 - O(n)
//MCQ Answer 3 - Smaller than the node
//MCQ Answer 4 - Inorder traversal
//MCQ Answer 5 - null