"use strict";
console.log("here i am");


var songs = ["Yesus alo","look away","misaka minbar","bietna ferasit","yhigos alo","my love", "you and i", "the note book","nay kibri amlak", "for ever" ];
var albums = ["mekane hiwet", "da slasie", "da meda","hiwet","mulu wengel","kidane mihret","kinzmrelu ena","meze me","nay gli", "gilgal"];
var artists = ["dani mengis", "ocbaslasie", "mihret","tesfaye gabiso","agegnehu","azieb","sofia", "mesfin gutu","meskerem","awtaru"]


        var form =document.getElementById("addForm");
        var song = document.getElementById("song");
        var itemList = document.getElementById('song-t');
        //form submit event//
        form.addEventListener('submit', addItem);
        //delete event//
        itemList.addEventListener('click', removeItem);
        //add item//
        function addItem(s){
                s.preventDefault();
        var newItem = document.getElementById('song').value;
        
        //create new li element//
        var li =document.createElement('li');
        //add class//
        li.className = 'list-group-item';
        //add text node with input value//
        li.appendChild(document.createTextNode(newItem));
        //create del button element//
        var deleteBtn = document.createElement('button');
        //add classes to del button//
        deleteBtn.className= 'btn btn-danger btn-sm floate-right delete';

        //append text node//
        deleteBtn.appendChild(document.createTextNode('X'));

        //append button to li//
        li.appendChild(deleteBtn);

        //Append li to list//
        itemList.appendChild(li);
        }
        function removeItem(s){
                if(s.target.classList.contains('delete')){
                        if(confirm('are you sure?')){
                                var li = s.target.parentElement;
                                itemList.removeChild(li);

                        }
        }

        }