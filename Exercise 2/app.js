new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert() {
               alert('button clicked'); 
            },
            keyDownEvent(event) {
                this.value = event.target.value;
                //return this.value;
            }
        }
    });