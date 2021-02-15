<template>
    <div>
        <div class="main-section">
            <h1>
                <router-link :to="'/'"><img src="../assets/back.png" alt=""></router-link>{{todo.name}}
                <select v-bind:onchange="selectChange(selected)" name="" id="filter" v-model="selected">
                    <option value="All" selected>All</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </h1>
            <app-item v-bind:sort="sort"></app-item>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todos: [],
            todo: {},
            listItem: [],
            sort: '',
            selected: 'All',
        }
    },
    created() {
        this.todos = JSON.parse(localStorage.getItem('this.todos'));
        this.todos.forEach(todo => {
            if (parseInt(this.$route.params.id) === todo.id) {
                this.todo = todo;
                this.listItem = this.todo.listItem
            }
        })
    },
    methods: {
        selectChange() {
            this.sort = this.selected;
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-section {
        margin-top: 80px;
        background-color: #fff;
        padding: 2px;
        padding-bottom: 4px;
        box-shadow: 2px 4px 13px 0px rgba(0, 0, 0, 0.29);
        max-width: 800px;
        h1 {
            background-color: #fff86f;
            padding: 10px;
            padding: 10px;
            display: flow-root;
            #filter {
                font-size: medium;
                float: right;
                margin: 14px;
                width: 103px;
            }

            img {
                background-color: #fff86f;
                padding-right: 10px;
                cursor: pointer;
            }
        }
    }
</style>