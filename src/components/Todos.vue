<template>
    <div>
        <div class="main-section">
            <h1>To Do Lists</h1>
            <img src="../assets/more.png" v-b-modal.modal-prevent-closing>
            <div>
                <b-modal centered size="sm" id="modal-prevent-closing" class="modal-center" ref="modal" title="Want to add new todo!" @show="resetModal"
                    @hidden="resetModal" @ok="handleOk">
                    <form ref="form" @submit.stop.prevent="handleSubmit">
                        <b-form-group :state="nameState" label="Name" label-for="name-input"
                            invalid-feedback="Name is required">
                            <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
                        </b-form-group>
                    </form>
                </b-modal>
            </div>
            <app-list v-bind:todos="todos"></app-list>
        </div>
    </div>
</template>

<script>
export default {
        data() {
        return {
            name: '',
            nameState: null,
            todos: [{
                    "id": 1,
                    "name": "Grocery Shopping",
                    "listItem": [{
                            "id": 1,
                            "name": "Apples",
                            "status": false
                        },
                        {
                            "id": 2,
                            "name": "Dal",
                            "status": false
                        },
                        {
                            "id": 3,
                            "name": "Rice",
                            "status": false
                        },
                        {
                            "id": 4,
                            "name": "Mangoes",
                            "status": false
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Movies to watch",
                    "listItem": [{
                            "id": 1,
                            "name": "Avengers",
                            "status": false
                        },
                        {
                            "id": 2,
                            "name": "Lords of the rings",
                            "status": false
                        },
                        {
                            "id": 3,
                            "name": "Justice League",
                            "status": false
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Steps to follow",
                    "listItem": [{
                            "id": 1,
                            "name": "Doctor checkup",
                            "status": false
                        },
                        {
                            "id": 2,
                            "name": "Gym Addmission",
                            "status": false
                        }
                    ]
                }
            ]

        }
    },
    mounted() {
        if (JSON.parse(localStorage.getItem('this.todos')) != null) {
            this.todos = JSON.parse(localStorage.getItem('this.todos'))
        }
        localStorage.setItem('this.todos', JSON.stringify(this.todos));
        this.todos = JSON.parse(localStorage.getItem('this.todos')) ?
         this.todos = JSON.parse(localStorage.getItem('this.todos')) : [];
    },
    methods: {
        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.nameState = valid
            return valid
        },
        resetModal() {
            this.name = ''
            this.nameState = null
        },
        handleOk(bvModalEvt) {
            bvModalEvt.preventDefault()
            this.handleSubmit()
        },
        handleSubmit() {
            if (!this.checkFormValidity()) {
                return
            }
            this.todos.push({
                id: (new Date()).getTime(),
                name: this.name
            })
            localStorage.setItem('this.todos', JSON.stringify(this.todos))
            this.$nextTick(() => {
                this.$bvModal.hide('modal-prevent-closing')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-section {
        margin-top: 80px;
        background-color: #fff;
        padding: 2px;
        box-shadow: 2px 4px 13px 0px rgba(0, 0, 0, 0.29);
        max-width: 800px;
    h1 {
        background-color: #fff;
        display: inline-block;
    }

    img {
        background-color: #fff;
        float: right;
        padding: 16px;
        cursor: pointer;
    }
}

</style>