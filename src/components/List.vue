<template>
    <div>
        <div class="list-group d-flex" v-for="todo in todos" :key="todo.id">
            <a href="#" class="list-group-item  list-group-item-warning list">
                <router-link :to="'/todos/' + todo.id">
                    {{todo.name}}
                </router-link>
                <img src="../assets/trash.png" alt="" @click="deleteList(todo)">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todos: {}
    },
    methods: {
        deleteList(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1)
            localStorage.setItem('this.todos', JSON.stringify(this.todos));
        }
    }
}
</script>

<style lang="scss" scoped>
.list-group {
    :hover {
        background-color: #fff86f;

        a {
            background-color: #fff86f;
        }
    }
}

.list {
    width: 100%;

    :hover {
        background-color: #fff86f;
    }
}

a {
    word-wrap: break-word;
    background-color: #f6f490;
    text-decoration: none;

    :hover {
        background-color: #fff86f;
    }
}

img {
    float: right;
    cursor: pointer;
    background-color: #f6f490;
    :hover {
        background-color: #fff86f;
    }
}
</style>