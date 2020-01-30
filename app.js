var one = new Vue({
    el : "#vue-app-one",
    data : {
        title : "vue-app-one"
    },
    methods : {
    },
    computed : {
       greet(){
           return 'this is one'
       }
    }

});

var two = new Vue({
    el : "#vue-app-two",
    data : {
        title: "vue-app-two"
    },
    methods : {
        change(){
         one.title = "title changed"
        }
    },
    computed : {
        greet(){
            return 'this is from two'
        }

    }

});

two.title = 'yeh bhi changed'