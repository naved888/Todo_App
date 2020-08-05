<template>
    <div class="listitems">
        <ul>
            <li v-for="item in listItem" :key="item.id"><input v-model="item.done" @change="done(item)" type="checkbox"
                    name="status" id="status"><span :class="{done: item.done}">{{item.name}}</span>
                <img src="../assets/trash.png" alt="" @click="deleteList(item)"></li>
        </ul>
        <div class="d-flex">
            <input type="text" name="" id="inputItem" v-on:keyup.enter="addItem()">
            <b-button variant="primary" @click="addItem()">Add</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listName: '',
                todos: [],
                listItem: {},
                todo: {},
                newListItem: []
            }
        },
        props: {
            sort: String
        },
        mounted() {
            this.getListItems();
        },
        watch: {
            sort: function (sort) {
                if (sort === 'All') {
                    this.getListItems()
                } else if (sort === 'Completed') {
                    this.getListItems()
                    this.listItem = this.listItem.filter(item => {
                        return item.status === true;
                    })
                } else {
                    this.getListItems();
                    this.listItem = this.listItem.filter(item => {
                        return item.status === false;
                    })
                }
            }
        },
        methods: {
            getListItems() {
                this.todos = JSON.parse(localStorage.getItem('this.todos'));
                this.todos.forEach(todo => {
                    if (parseInt(this.$route.params.id) === todo.id) {
                        this.todo = todo;
                        this.listItem = this.todo.listItem
                    }
                })
            },
            addItem() {
                this.listName = document.getElementById('inputItem').value;
                this.todos.forEach(todo => {
                    if (parseInt(this.$route.params.id) === todo.id && this.todo.listItem !== undefined) {
                        this.todo.listItem.push({
                            id: (new Date()).getTime(),
                            name: this.listName,
                            status: false
                        })
                    } else if (parseInt(this.$route.params.id) === todo.id) {
                        this.todo['listItem'] = [{
                            id: (new Date()).getTime(),
                            name: this.listName,
                            status: false
                        }];
                        
                    }
                })
                localStorage.setItem('this.todos', JSON.stringify(this.todos));
                document.getElementById('inputItem').value='';
                this.getListItems();
            },
            deleteList(item) {
                const listIndex = this.listItem.indexOf(item);
                this.listItem.splice(listIndex, 1)
                localStorage.setItem('this.todos', JSON.stringify(this.todos));
            },
            done(item) {
                const listIndex = this.listItem.indexOf(item);
                if (this.listItem[listIndex].status == false) {
                    this.listItem[listIndex].status = true
                } else {
                    this.listItem[listIndex].status = false
                }
                localStorage.setItem('this.todos', JSON.stringify(this.todos));
            }
        }
    }
</script>

<style lang="scss" scoped>
.listitems {
    background-color: #fff;
    #status {
        margin-left: -32px;
        margin-right: 20px;
    }
    ul {
        background-color: #fff;
        li {
            padding: 10px;
            list-style: none;
            background-color: #fff;
            border-bottom: 1px solid gray;
            word-wrap: break-word;
            span {
                background-color: #fff;
            }
        }
    }
    #inputItem {
        width: 100%;
    }
    img {
        float: right;
        cursor: pointer;
    }
    .done {
        text-decoration: line-through;
    }
}

</style>