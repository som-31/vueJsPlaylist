new Vue({
    el : "#vue-app",
    data : {
     available : false,
     nearby : false,
     name : '',
     age : 20,
     a: 0,
     b : 0
    },
    methods : {

        updateAge(){
            console.log('You entered your age');
        },
        updateName(){
           console.log('You entered your name');
        },
        add(inc){
            this.age += inc;
        },
        sub(dec){
            this.age -= dec;
        },
        greet(person){
            return ` Name : ${person.name} and Age : ${person.age}`
        },
        updateXY(event){
             this.x = event.offsetX;
             this.y = event.offsetY;
        },
        click(){
            alert('You clicked me');
        }
    },
    computed :{
        compClasses(){
            return {
                available : this.available,
                nearby : this.nearby
            }
        },
        addToA(){
            console.log('Add to A');
            return this.age+this.a;
        },
        addToB(){
            console.log('Add to B');
           return this.age+this.b;
        },
    }
});