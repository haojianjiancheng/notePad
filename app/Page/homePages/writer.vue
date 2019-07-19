<template>
    <div class="writer">
        <editor></editor>
    </div>
</template>

<script>
    import editor from "../../components/Editor/index.js";
    export default {
        components : {
            editor
        }
    }
</script>

<style lang="less">
    .writer{
        margin-top: 50px;
    }
</style>